import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Rocket1 = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const leftRocketVariants = {
    initial: {
      x: "-100vw",
      y: "50vh",
      scale: 0.8,
      opacity: 0
    },
    animate: {
      x: "50vw",
      y: "50vh",
      scale: 1,
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const rightRocketVariants = {
    initial: {
      x: "200vw",
      y: "50vh",
      scale: 0.8,
      opacity: 0
    },
    animate: {
      x: "50vw",
      y: "50vh",
      scale: 1,
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Sabit renk ve boyut
  const color = "#FF1493"; // Deep Pink
  const size = 40;

  if (!isHomePage) return null;

  return (
    <>
      {/* Sol Roket */}
      <motion.div
        style={{
          position: "fixed",
          zIndex: 1000,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)"
        }}
        variants={leftRocketVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          width={size}
          height={size * 1.5}
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(90deg)" }}
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

      {/* Sağ Roket */}
      <motion.div
        style={{
          position: "fixed",
          zIndex: 1000,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)"
        }}
        variants={rightRocketVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          width={size}
          height={size * 1.5}
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(-90deg)" }}
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
    </>
  );
};

export default Rocket1; 