'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    __CGT_SPLINE_LOADED__?: boolean;
  }
}

interface SplineSceneProps {
  scene: string;
  className?: string;
  onSceneLoad?: () => void;
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene, className, onSceneLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const splineApp = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(true)

  const handleLoad = useCallback((app: any) => {
    splineApp.current = app

    // Lower rendering resolution on mobile screens to save GPU power & battery
    try {
      if (window.innerWidth < 768 && app._renderer) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
        app._renderer.setPixelRatio(dpr);
      }
    } catch (_) {}

    // If already scrolled past hero before Spline loaded, stop immediately
    if (!isVisibleRef.current && app) {
      try { app.stop() } catch (_) {}
    }

    setIsLoaded(true);

    // Notify global preloader that Spline 3D model is loaded and ready to reveal
    window.__CGT_SPLINE_LOADED__ = true;
    window.dispatchEvent(new CustomEvent('cgt-spline-loaded'));
    if (onSceneLoad) onSceneLoad();
  }, [onSceneLoad])

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
    <div 
      ref={containerRef} 
      className={`w-full h-full relative ${className || ''}`}
      style={{ contain: 'layout paint' }}
    >
      {/* 3D Spline Robot Silky Smooth Cinematic Entrance Reveal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.94,
          y: isLoaded ? 0 : 12,
        }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.35, 1] }}
        className="w-full h-full"
      >
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        />
      </motion.div>
    </div>
  )
}

export default SplineScene;
