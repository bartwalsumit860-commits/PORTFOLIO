import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useMousePosition } from './hooks/useMousePosition';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => {
  const { x, y } = useMousePosition();

  return (
    <ThemeProvider>
      <div className="bg-page min-h-screen">
        <div className="cursor-glow" style={{ left: x, top: y }} />
        <div className="background-orb orb1" />
        <div className="background-orb orb2" />

        <Header />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificate />
          <Contacts />
        </motion.main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
