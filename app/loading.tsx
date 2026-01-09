'use client'

import React from 'react'
import MagicLoader from '@/components/ui/magic-loader'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <MagicLoader size={120} />
    </div>
  )
}
