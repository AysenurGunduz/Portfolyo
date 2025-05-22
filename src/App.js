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

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/contact", element: <Contact /> }
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                {route.element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Rocket1 />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
