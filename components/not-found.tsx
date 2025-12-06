
"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white relative overflow-hidden font-sans select-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
         <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-gradient-to-b from-white/5 to-transparent blur-[80px] pointer-events-none" />

      {/* Hanging Sign Container - Compacted */}
      <div className="relative z-10 flex flex-col items-center -mt-16 sm:-mt-24 scale-90 sm:scale-100">
        
        {/* HD Wires - SVG for sharpness */}
        <svg className="w-64 h-32 mb-[-2px] opacity-70" viewBox="0 0 200 100" preserveAspectRatio="none">
             <line x1="20" y1="0" x2="20" y2="100" stroke="url(#wireGradient)" strokeWidth="1.5" />
             <line x1="180" y1="0" x2="180" y2="100" stroke="url(#wireGradient)" strokeWidth="1.5" />
             <defs>
               <linearGradient id="wireGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="rgba(75, 85, 99, 0)" />
                 <stop offset="50%" stopColor="#4b5563" />
                 <stop offset="100%" stopColor="#1f2937" />
               </linearGradient>
             </defs>
        </svg>

        {/* The Board */}
        <div className="origin-top animate-swing will-change-transform">
             <div className="relative bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center transform hover:rotate-1 transition-transform duration-300 group">
                 
                 {/* Screws/Rivets */}
                 <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-neutral-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center border border-black"><div className="w-full h-px bg-neutral-600 rotate-45"></div></div>
                 <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-neutral-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center border border-black"><div className="w-full h-px bg-neutral-600 -rotate-12"></div></div>
                 <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-neutral-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center border border-black"><div className="w-full h-px bg-neutral-600 rotate-90"></div></div>
                 <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-neutral-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center border border-black"><div className="w-full h-px bg-neutral-600 rotate-12"></div></div>
                 
                 {/* Content */}
                 <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-700 drop-shadow-2xl select-none">
                   404
                 </h1>
                 
                 <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse whitespace-nowrap">
                    System Failure
                 </div>
             </div>
        </div>
      </div>

      {/* Funny Content */}
      <div className={`mt-12 sm:mt-16 text-center z-20 px-4 max-w-md mx-auto space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 flex items-center justify-center gap-2">
               <span>Lost in Space?</span> 
               <span className="text-2xl animate-bounce">🧑‍🚀</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
               Whoops! The page you're looking for has been abducted by aliens 👽 or drifted into a black hole.
            </p>
            <p className="text-xs text-gray-600 font-mono italic">
               (Even <b>Ctrl+Z</b> can't fix this one...)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button 
                asChild 
                className="w-full sm:w-auto h-12 rounded-full bg-white text-black hover:bg-gray-200 font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Beam Me Up, Scotty 🛸
              </Link>
            </Button>
            
            <Button 
                asChild 
                variant="outline" 
                className="w-full sm:w-auto h-12 rounded-full border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
            >
              <Link to="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back (Safely)
              </Link>
            </Button>
          </div>
      </div>
    </div>
  )
}
