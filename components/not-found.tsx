"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Home, ArrowLeft, WifiOff } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Spotlight from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[400px] bg-gradient-to-b from-white/10 to-transparent blur-[60px] pointer-events-none" />

      {/* Hanging Sign Animation */}
      <div className="relative z-10 flex flex-col items-center mt-[-60px] sm:mt-[-80px]">
        
        {/* Wires */}
        <div className="flex gap-24 sm:gap-32 mb-[-2px] relative z-0">
          <div className="w-[1px] h-[120px] sm:h-[150px] bg-gradient-to-b from-transparent via-gray-700 to-gray-800 opacity-60"></div>
          <div className="w-[1px] h-[120px] sm:h-[150px] bg-gradient-to-b from-transparent via-gray-700 to-gray-800 opacity-60"></div>
        </div>

        {/* The Sign */}
        <div className="relative z-10 animate-swing origin-top">
             <div className="relative bg-black/80 backdrop-blur-xl border-4 border-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform duration-500">
                 
                 {/* Screws */}
                 <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gray-900 rotate-45"></div>
                    <div className="w-full h-[1px] bg-gray-900 -rotate-45 absolute"></div>
                 </div>
                 <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
                     <div className="w-full h-[1px] bg-gray-900 rotate-12"></div>
                     <div className="w-full h-[1px] bg-gray-900 -rotate-12 absolute"></div>
                 </div>
                 <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gray-900 rotate-90"></div>
                    <div className="w-full h-[1px] bg-gray-900 absolute"></div>
                 </div>
                 <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
                     <div className="w-full h-[1px] bg-gray-900 rotate-45"></div>
                     <div className="w-full h-[1px] bg-gray-900 -rotate-45 absolute"></div>
                 </div>

                 {/* Neon Text */}
                 <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                   404
                 </h1>
                 <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 mt-4 mb-3"></div>
                 <p className="text-xs sm:text-sm font-mono text-purple-400 tracking-[0.3em] uppercase">
                    Page Not Found
                 </p>
             </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-12 text-center z-10 px-6 max-w-lg space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-2 ring-1 ring-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <WifiOff className="w-6 h-6 text-red-400" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-2">Connection Lost in Void</h2>
            <p className="text-gray-500 leading-relaxed text-sm">
               The coordinates you entered point to a sector that doesn't exist or has been moved to a different galaxy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] font-semibold"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Base
              </Link>
            </Button>
            
            <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto h-12 rounded-full border-gray-800 bg-transparent text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Link to="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Link>
            </Button>
          </div>
      </div>
    </div>
  )
}
