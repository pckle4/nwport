'use client'

import dynamic from 'next/dynamic'

const ResumePage = dynamic(() => import('@/components/resume-page'), { ssr: false })

export default function ResumeRoute() {
  return <ResumePage />
}
