import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import RocketBackground from './components/Rocket';
import Rocket1 from './components/Rocket1';
import './styles/App.css';

// Sayfa geçişlerinde scroll'u en üste al
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Sayfa geçiş animasyonları için wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      minHeight: '100%'
    },
    animate: {
      opacity: 1,
      y: 0,
      position: 'relative',
      width: '100%',
      top: 0,
      left: 0,
      minHeight: '100%'
    },
    exit: {
      opacity: 0,
      y: -20,
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      minHeight: '100%'
    }
  };

  const pageTransition = {
    type: "tween",
    duration: 0.5,
    ease: "anticipate"
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <About />
          </motion.div>
        } />
        <Route path="/services" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Services />
          </motion.div>
        } />
        <Route path="/portfolio" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Portfolio />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Contact />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <RocketBackground />
        <Rocket1 />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    <Footer />
    </Router>
  );
}

export default App;
