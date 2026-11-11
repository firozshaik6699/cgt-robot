'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Spline from '@splinetool/react-spline';

declare global {
  interface Window {
    __CGT_SPLINE_LOADED__?: boolean;
    __CGT_PRELOADER_DONE__?: boolean;
  }
}

interface SplineSceneProps {
  scene: string;
  className?: string;
  onSceneLoad?: () => void;
}

function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGL2RenderingContext && canvas.getContext('webgl2')
    ) || !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene, className, onSceneLoad }) => {
  const [remountKey, setRemountKey] = useState(0);
  const [webglSupported] = useState(() => isWebGLAvailable());
  const splineApp = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasSignaledReady = useRef(false);
  const contextRetryCount = useRef(0);

  const signalRobotReady = useCallback(() => {
    if (hasSignaledReady.current) return;
    hasSignaledReady.current = true;
    window.__CGT_SPLINE_LOADED__ = true;
    window.dispatchEvent(new CustomEvent('cgt-spline-loaded'));
    if (onSceneLoad) onSceneLoad();
  }, [onSceneLoad]);

  // If device/browser has WebGL completely disabled, release preloader gracefully
  useEffect(() => {
    if (!webglSupported) {
      signalRobotReady();
    }
  }, [webglSupported, signalRobotReady]);

  const handleLoad = useCallback(
    (app: any) => {
      splineApp.current = app;

      // Ensure Spline recalculates canvas bounds cleanly on iOS Safari dynamic viewport
      try {
        window.dispatchEvent(new Event('resize'));
        app.play?.();
      } catch {
        // Ignore if runtime handles resize internally
      }

      // Wait 2 animation frames so Metal (iOS) / GLES (Android) flushes the actual
      // rendered 3D robot pixels into the WebGL drawingBuffer BEFORE lifting Preloader.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          signalRobotReady();
        });
      });
    },
    [signalRobotReady]
  );

  const handleError = useCallback(() => {
    // Release preloader if remote .splinecode fails to fetch so site never deadlocks
    signalRobotReady();
  }, [signalRobotReady]);

  // Attach WebGL context-loss recovery for iOS Safari memory reclamation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onContextLost = (e: Event) => {
      e.preventDefault();
      if (contextRetryCount.current < 2) {
        contextRetryCount.current += 1;
        window.setTimeout(() => {
          setRemountKey((k) => k + 1);
        }, 350);
      } else {
        signalRobotReady();
      }
    };

    const attachCanvasListener = () => {
      const canvas = container.querySelector('canvas');
      if (canvas) {
        canvas.addEventListener('webglcontextlost', onContextLost, false);
        return canvas;
      }
      return null;
    };

    let trackedCanvas = attachCanvasListener();
    const observer = new MutationObserver(() => {
      if (!trackedCanvas) {
        trackedCanvas = attachCanvasListener();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (trackedCanvas) {
        trackedCanvas.removeEventListener('webglcontextlost', onContextLost);
      }
    };
  }, [remountKey, signalRobotReady]);

  // Pause WebGL loop ONLY after initial load is complete AND user has scrolled well past Hero
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const app = splineApp.current;
        if (!app || !hasSignaledReady.current) return;

        try {
          if (entry.isIntersecting) {
            app.play?.();
          } else if (window.scrollY > window.innerHeight * 0.75) {
            app.stop?.();
          }
        } catch {
          // Safe no-op
        }
      },
      { threshold: 0, rootMargin: '150px 0px 150px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!webglSupported) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative ${className || ''}`}
      style={{
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Keep opacity: 1 so iOS Safari WebKit actively composites & paints the WebGL canvas
          behind the fullscreen Preloader instead of throttling an opacity:0 canvas */}
      <Spline
        key={remountKey}
        scene={scene}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'auto',
        }}
      />
    </div>
  );
};

export default SplineScene;
