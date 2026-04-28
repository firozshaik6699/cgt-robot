'use client'

import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene, className }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`w-full h-full relative ${className || ''}`}>
      {/* Premium Loader */}
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center absolute inset-0 z-10 bg-black">
          <div className="w-8 h-8 border-2 border-white/5 border-t-[#F4751E] rounded-full animate-spin" />
        </div>
      )}
      <Spline
        scene={scene}
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease' }}
      />
    </div>
  )
}

export default SplineScene;
