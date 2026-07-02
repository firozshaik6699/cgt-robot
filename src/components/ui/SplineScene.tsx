'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene, className }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const splineApp = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(true)

  const handleLoad = useCallback((app: any) => {
    splineApp.current = app

    // If already scrolled past hero before Spline loaded, stop immediately
    if (!isVisibleRef.current && app) {
      try { app.stop() } catch (_) {}
    }

    // Delay the reveal to allow WebGL shaders to compile and prevent black flash/stuttering
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const app = splineApp.current
        isVisibleRef.current = entry.isIntersecting

        if (!app) return

        try {
          if (entry.isIntersecting) {
            app.play()
          } else {
            app.stop()
          }
        } catch (_) {
          // Spline app may not be ready yet
        }
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className || ''}`}>
      {/* Premium Loader */}
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center absolute inset-0 z-10 bg-transparent">
          <div className="w-8 h-8 border-2 border-white/5 border-t-[#F4751E] rounded-full animate-spin" />
        </div>
      )}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }}
      >
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default SplineScene;
