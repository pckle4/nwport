
"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Home, AlertTriangle, Power } from "lucide-react"
import { cn } from "../lib/utils"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050000] text-white relative overflow-hidden font-sans select-none p-6">

      {/* Background Ambience - Red Emergency Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
         <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-red-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
         <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-orange-900/10 rounded-full blur-[120px]" />
         {/* CRT Scanline Effect */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02),rgba(255,0,0,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl w-full">

        {/* Left Column: Hanging Visual */}
        {/* Added padding top to ensure beam is visible and not cut off */}
        <div className="flex flex-col items-center justify-start h-[450px] relative pt-10">
            
            {/* Ceiling/Beam - Anchored clearly */}
            <div className="absolute top-10 w-48 h-4 bg-neutral-800 rounded-lg shadow-2xl z-20 border-b-2 border-neutral-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500/50 animate-ping absolute right-3"></div>
                <div className="w-2 h-2 rounded-full bg-red-500 absolute right-3"></div>
                
                {/* Bolt details */}
                <div className="absolute left-2 w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                <div className="absolute right-8 w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
            </div>

            {/* HD Wires - Positioned relative to beam to ensure connection */}
            <svg className="absolute top-[50px] w-64 h-[120px] z-10 pointer-events-none drop-shadow-md overflow-visible" viewBox="0 0 256 120">
                 {/* Left Wire */}
                 <line x1="85" y1="0" x2="85" y2="120" stroke="#525252" strokeWidth="3" />
                 {/* Right Wire */}
                 <line x1="171" y1="0" x2="171" y2="120" stroke="#525252" strokeWidth="3" />
                 
                 {/* Wire Knots/Joints at top */}
                 <circle cx="85" cy="0" r="4" fill="#404040" />
                 <circle cx="171" cy="0" r="4" fill="#404040" />
            </svg>

            {/* The Board - Pushed down by wire length */}
            <div className="mt-[118px] origin-top animate-swing will-change-transform">
                 <div className="relative bg-[#0F0505] border-4 border-red-900/50 p-8 sm:p-12 rounded-xl shadow-[0_0_50px_rgba(220,38,38,0.25)] flex flex-col items-center justify-center transform group">
                     
                     {/* Warning Stripes on Top Border */}
                     <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#b91c1c_10px,#b91c1c_20px)] opacity-50 rounded-t-lg"></div>

                     {/* Screws */}
                     <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-900 shadow-inner flex items-center justify-center"><div className="w-1.5 h-0.5 bg-neutral-950"></div></div>
                     <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-900 shadow-inner flex items-center justify-center"><div className="w-1.5 h-0.5 bg-neutral-950"></div></div>
                     
                     {/* Glowing 404 */}
                     <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] font-mono glitch-text">
                       404
                     </h1>

                     {/* Sticker - Taped Look */}
                     <div className="absolute -bottom-6 rotate-2 bg-red-600 text-black px-6 py-2 font-bold font-mono text-sm uppercase tracking-widest shadow-xl border-2 border-red-400">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/20 rotate-90 blur-[1px]"></div> {/* Tape effect */}
                        System Failure
                     </div>
                 </div>
            </div>
        </div>

        {/* Right Column: Text & Action */}
        <div className={`text-center md:text-left space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-800/50 text-red-500 text-xs font-mono mb-2">
                    <AlertTriangle className="w-3 h-3" />
                    <span>CRITICAL_PATH_ERROR</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                   Protocol <span className="text-red-600">Terminated</span>.
                </h2>
                
                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                   The requested sector does not exist or has been corrupted. Immediate relocation is advised to prevent data loss.
                </p>
            </div>

            <div className="flex justify-center md:justify-start">
               <Button 
                   asChild 
                   className="h-14 px-8 rounded-xl bg-red-600 text-white hover:bg-red-700 font-bold text-lg shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all hover:scale-105 active:scale-95 group border border-red-500/50"
               >
                 <Link to="/">
                   <Power className="w-5 h-5 mr-2.5 group-hover:text-black transition-colors" />
                   Initiate Reboot
                 </Link>
               </Button>
            </div>
            
            <div className="font-mono text-[10px] text-red-900/50 pt-10">
                ERROR_CODE: 0x404_NOT_FOUND // STACK_TRACE_NULL
            </div>
        </div>

      </div>
    </div>
  )
}
