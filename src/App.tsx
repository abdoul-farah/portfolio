import './App.css';
import { useMediaQuery } from 'react-responsive';

// import section
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import DesktopMenu from './components/Navbar/DesktopMenu';
import MobileMenu from './components/Navbar/MobileMenu';
import Home from './components/Home/Home';

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });
  return (
    <>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
