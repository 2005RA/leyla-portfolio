import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WebDev from './components/WebDev';
import Contact from './components/Contact';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <LanguageProvider>
      <Router basename="/leyla-portfolio"> {/* THIS MUST BE HERE */}
        <ScrollToTop />
        <div className="relative bg-cream min-h-screen">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Experience /> 
                <Projects /> 
                <WebDev />
                <Contact />
                <footer className="py-8 text-center text-lightgray text-sm bg-slate border-t border-white/10">
                  <p>&copy; {new Date().getFullYear()} Leyla Agatalibova. Designed & built with care.</p>
                </footer>
              </>
            } />
            <Route path="/projects" element={
              <>
                <Navbar />
                <ProjectsPage />
                <footer className="py-8 text-center text-lightgray text-sm bg-slate border-t border-white/10">
                  <p>&copy; {new Date().getFullYear()} Leyla Agatalibova. Designed & built with care.</p>
                </footer>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;