import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';

export const TiltCard = ({ children, className, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    mouseX.set(clientX);
    mouseY.set(clientY);
    
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Keep border radius consistent with the card
  const roundedClass = className?.match(/rounded-[a-z0-9]+/i)?.[0] || 'rounded-2xl';

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
      onClick={onClick}
      className={`relative transition-all duration-200 ease-out group overflow-hidden ${className || ''}`}
    >
      {/* Premium Spotlight effect */}
      <motion.div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${roundedClass} z-0 mix-blend-screen`}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(126, 91, 240, 0.15),
              transparent 40%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
