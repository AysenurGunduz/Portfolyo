import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Rocket = ({ delay = 0, size = 30, position = "left" }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobil cihazlar için pozisyonları ayarla
  const positions = {
    left: windowWidth <= 768 
      ? { x: "10vw", y: "15vh" }
      : { x: "20vw", y: "20vh" },
    right: windowWidth <= 768
      ? { x: "85vw", y: "15vh" }
      : { x: "77vw", y: "20vh" }
  };

  // Mobil cihazlar için boyutu ayarla
  const adjustedSize = windowWidth <= 768 ? 20 : size;

  const rocketVariants = {
    initial: {
      ...positions[position],
      scale: 0,
      rotate: -45,
      opacity: 0
    },
    animate: {
      ...positions[position],
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.7,
        duration: 1
      }
    },
    exit: {
      ...positions[position],
      scale: 0,
      rotate: 45,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Sabit renk
  const color = "#FF1493"; // Deep Pink

  return (
    <motion.div
      style={{
        position: "fixed",
        zIndex: 1,
        pointerEvents: "none"
      }}
      variants={rocketVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <svg
        width={adjustedSize}
        height={adjustedSize * 1.5}
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nose Cone */}
        <path
          d="M12 2L16 8H8L12 2Z"
          fill={color}
        />
        {/* Rocket Body */}
        <rect
          x="8"
          y="8"
          width="8"
          height="20"
          fill={color}
        />
        {/* Fins */}
        <path
          d="M8 28L4 36H8V28Z"
          fill={color}
        />
        <path
          d="M16 28L20 36H16V28Z"
          fill={color}
        />
        {/* Window */}
        <circle
          cx="12"
          cy="16"
          r="2"
          fill="#FFF0F5"
        />
        {/* Exhaust */}
        <path
          d="M8 28C8 28 10 32 12 32C14 32 16 28 16 28"
          stroke={color}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </motion.div>
  );
};

const RocketBackground = () => {
  const location = useLocation();
  const positions = ["left", "right"];
  
  // Sadece belirli sayfalarda roketleri göster
  const showRockets = ['/about', '/services', '/portfolio', '/contact'].includes(location.pathname);
  
  return (
    <AnimatePresence>
      {showRockets && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
          {positions.map((position, index) => (
            <Rocket
              key={`${location.pathname}-${position}`}
              delay={0.7 * index}
              size={30}
              position={position}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default RocketBackground; 