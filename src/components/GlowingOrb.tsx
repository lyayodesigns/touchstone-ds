import React, { useEffect, useRef } from 'react';

const GlowingOrb: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = orb.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to center
      const distX = (clientX - centerX) * 0.03;
      const distY = (clientY - centerY) * 0.03;
      
      // Limit movement
      const maxDist = 15;
      const moveX = Math.max(-maxDist, Math.min(maxDist, distX));
      const moveY = Math.max(-maxDist, Math.min(maxDist, distY));
      
      // Apply subtle movement to the orb
      orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative w-full flex items-center justify-center pointer-events-none mb-8">
      <div 
        ref={orbRef}
        className="absolute w-[300px] h-[300px] rounded-full transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(138, 43, 226, 0) 70%)',
          boxShadow: '0 0 100px 60px rgba(138, 43, 226, 0.3)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-full border-4 border-purple-500 animate-pulse-glow">
            <div className="w-full h-full rounded-full border-4 border-white/20 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingOrb;
