
"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Home, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden font-sans selection:bg-red-500/30">
      
      {/* Red Alarm Ambience - Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#200000_1px,transparent_1px),linear-gradient(to_bottom,#200000_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center h-full">

          {/* Left Column: The Hanging Mechanism */}
          <div className="relative flex flex-col items-center h-[500px] sm:h-[600px] justify-start pt-10">
              
              {/* Ceiling Connector (Visual anchor to top of screen) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-12 bg-gray-800 z-10"></div>

              {/* Static Beam */}
              <div className="w-64 sm:w-80 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-700 z-20 relative flex items-center justify-between px-6 mt-12">
                   <div className="w-3 h-3 rounded-full bg-gray-600 shadow-inner border border-gray-500"></div>
                   <div className="h-1 w-full mx-4 bg-gray-950/50 rounded-full"></div>
                   <div className="w-3 h-3 rounded-full bg-gray-600 shadow-inner border border-gray-500"></div>
              </div>

              {/* Swinging Assembly Wrapper */}
              {/* transform-origin must be at the top where it meets the beam */}
              <div className="animate-swing origin-top" style={{ transformOrigin: '50% 0px' }}>
                  
                  {/* Wires */}
                  <div className="h-32 sm:h-40 w-48 sm:w-60 mx-auto flex justify-between px-4 relative -mt-1">
                      {/* Left Wire */}
                      <div className="w-1 h-full bg-gray-700 shadow-lg"></div>
                      {/* Right Wire */}
                      <div className="w-1 h-full bg-gray-700 shadow-lg"></div>
                  </div>

                  {/* The Sign Board */}
                  <div className="relative bg-[#080808] border-[4px] border-red-900/80 p-6 sm:p-10 rounded-xl shadow-[0_0_60px_rgba(220,38,38,0.25)] flex flex-col items-center justify-center w-[300px] sm:w-[400px]">
                      
                      {/* Industrial Bolts */}
                      <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-600 rotate-45"></div></div>
                      <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-600 -rotate-45"></div></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-600 rotate-90"></div></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center"><div className="w-2 h-0.5 bg-gray-600"></div></div>

                      {/* Content */}
                      <div className="flex items-center gap-3 mb-4 opacity-90">
                          <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
                          <span className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase font-bold">System Failure</span>
                      </div>
                      
                      <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                          404
                      </h1>

                      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent my-6"></div>

                      <div className="font-mono text-sm text-red-400/80 tracking-[0.2em] uppercase">
                          Signal Lost
                      </div>

                      {/* Sticker */}
                      <div className="absolute -bottom-6 -right-4 bg-yellow-500 text-black font-extrabold text-[10px] sm:text-xs px-4 py-1 rotate-[-6deg] shadow-lg border border-yellow-600 z-30 uppercase tracking-wide">
                          Do Not Enter
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Column: Text & Interaction */}
          <div className="text-center md:text-left space-y-8 max-w-lg mx-auto md:mx-0 z-20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    CRITICAL_ERROR_DETECTED
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                    Houston, we have a <span className="text-red-500 inline-block decoration-red-900/50 underline-offset-8">problem</span>.
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                    The requested trajectory failed. The page you are looking for has been abducted by aliens 👽 or swallowed by a black hole.
                </p>
              </div>

              <div className="pt-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="h-14 px-10 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all hover:scale-105 border-0 font-bold text-lg tracking-wide"
                  >
                    <Link to="/">
                        <Home className="w-5 h-5 mr-2.5" />
                        Return to Earth
                    </Link>
                  </Button>
              </div>

              <div className="pt-6 border-t border-gray-800/50">
                  <p className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                      Error Code: 0x404_PAGE_NOT_FOUND <br/>
                      System Status: COMPROMISED
                  </p>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}
