'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { EnhancedHeader } from '@/components/enhanced-header'
import { OptimizedMobileHero } from '@/components/optimized-mobile-hero'
import { smoothScrollToElement } from '@/lib/utils'

const AboutSection = dynamic(() => import('@/components/about-section'), { ssr: false })
const EnhancedSkills = dynamic(() => import('@/components/enhanced-skills'), { ssr: false })
const MobileOptimizedProjects = dynamic(() => import('@/components/mobile-optimized-projects'), { ssr: false })
const CompactContactSection = dynamic(() => import('@/components/compact-contact-section'), { ssr: false })
const EnhancedFooter = dynamic(() => import('@/components/enhanced-footer'), { ssr: false })

type ViewportMountProps = {
  children: React.ReactNode
  rootMargin?: string
  forceMount?: boolean
}

const ViewportMount = ({ children, rootMargin = '900px', forceMount = false }: ViewportMountProps) => {
  const [mounted, setMounted] = useState(forceMount)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (forceMount) {
      setMounted(true)
      return
    }
  }, [forceMount])

  useEffect(() => {
    if (mounted || forceMount) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted, forceMount, rootMargin])

  return (
    <div ref={ref} style={{ minHeight: 1 }} className="content-visibility-auto">
      {mounted ? children : null}
    </div>
  )
}

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hash, setHash] = useState('')

  useEffect(() => {
    // Get initial hash
    setHash(window.location.hash)

    // Listen for hash changes
    const handleHashChange = () => {
      setHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Handle hash scrolling
  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1)
      let cancelled = false
      let attempts = 0

      const tryScroll = () => {
        if (cancelled) return
        const el = document.getElementById(targetId)
        if (el) {
          smoothScrollToElement(el)
          return
        }
        attempts += 1
        if (attempts < 12) {
          window.setTimeout(tryScroll, 120)
        }
      }

      requestAnimationFrame(tryScroll)
      return () => {
        cancelled = true
      }
    }
  }, [hash])

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  // Cursor glow effect
  useEffect(() => {
    const glow = document.createElement('div')
    glow.className = 'cursor-glow'
    document.body.appendChild(glow)
    
    const moveGlow = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', moveGlow, { passive: true })
    return () => {
      window.removeEventListener('mousemove', moveGlow)
      glow.remove()
    }
  }, [])

  const forceAbout = hash === '#about'
  const forceSkills = hash === '#skills'
  const forceProjects = hash === '#projects'
  const forceContact = hash === '#contact'

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#cc8b86] selection:text-white">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      
      <EnhancedHeader />
      <main>
        <div id="home" style={{ scrollMarginTop: '96px' }}>
          <OptimizedMobileHero />
        </div>

        <ViewportMount forceMount={forceAbout} rootMargin="1200px">
          <AboutSection />
        </ViewportMount>

        <ViewportMount forceMount={forceSkills}>
          <EnhancedSkills />
        </ViewportMount>

        <ViewportMount forceMount={forceProjects}>
          <MobileOptimizedProjects />
        </ViewportMount>

        <ViewportMount forceMount={forceContact}>
          <CompactContactSection />
        </ViewportMount>
      </main>

      <ViewportMount rootMargin="800px">
        <EnhancedFooter />
      </ViewportMount>
    </div>
  )
}
