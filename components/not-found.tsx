
"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] text-white relative overflow-hidden font-sans select-none p-6">

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
         <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl w-full">

        {/* Left Column: Hanging Visual */}
        <div className="flex flex-col items-center justify-start h-[320px] sm:h-[400px] relative">
            {/* Ceiling/Beam */}
            <div className="absolute top-0 w-40 h-3 bg-gray-800 rounded-b-xl shadow-2xl z-20 border-b border-gray-700"></div>

            {/* HD Wires - Clearly Visible */}
            <svg className="absolute top-2 w-56 h-[100px] z-10 pointer-events-none drop-shadow-md" viewBox="0 0 200 100" preserveAspectRatio="none">
                 {/* Left Wire */}
                 <line x1="60" y1="0" x2="60" y2="100" stroke="#9ca3af" strokeWidth="3" />
                 {/* Right Wire */}
                 <line x1="140" y1="0" x2="140" y2="100" stroke="#9ca3af" strokeWidth="3" />
            </svg>

            {/* The Board - Pushed down to connect to wires */}
            <div className="mt-[98px] origin-top animate-swing will-change-transform">
                 <div className="relative bg-[#0A0A0A] border-2 border-gray-800 p-8 sm:p-12 rounded-2xl shadow-[0_0_80px_rgba(124,58,237,0.1)] flex flex-col items-center justify-center transform group">

                     {/* Screws/Rivets */}
                     <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gray-700 border border-gray-900 shadow-inner flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-900 rotate-45"></div></div>
                     <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gray-700 border border-gray-900 shadow-inner flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-900 -rotate-45"></div></div>
                     <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gray-700 border border-gray-900 shadow-inner flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-900 rotate-90"></div></div>
                     <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gray-700 border border-gray-900 shadow-inner flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-900 -rotate-12"></div></div>
                     
                     {/* Glowing 404 */}
                     <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-white drop-shadow-2xl font-mono">
                       404
                     </h1>

                     {/* Sticker */}
                     <div className="absolute -bottom-5 rotate-3 bg-yellow-400 text-black px-4 py-1.5 font-bold font-mono text-sm uppercase tracking-widest shadow-xl border-2 border-yellow-500/50">
                        Signal Lost
                     </div>
                 </div>
            </div>
        </div>

        {/* Right Column: Text & Action */}
        <div className={`text-center md:text-left space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                   Houston, we have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">problem</span>.
                </h2>
                
                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                   The page you're looking for has drifted into deep space. It might have been moved, deleted, or never existed in this dimension.
                </p>
            </div>

            <div className="flex justify-center md:justify-start">
               <Button 
                   asChild 
                   className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 group"
               >
                 <Link to="/">
                   <Home className="w-5 h-5 mr-2.5 group-hover:-translate-y-0.5 transition-transform" />
                   Return to Earth
                 </Link>
               </Button>
            </div>
        </div>

      </div>
    </div>
  )
}
