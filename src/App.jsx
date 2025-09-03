import './App.css'
import './i18n';

// Components
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About";
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';

//library
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001
  })

  return (
    <div>
      <motion.div className='progress-bar' style={{ scaleX }}/>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
