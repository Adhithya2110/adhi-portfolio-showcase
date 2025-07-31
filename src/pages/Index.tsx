
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">Adhithya G P</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">About</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Skills</a>
              <a href="#experience" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Experience</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors py-2">Home</a>
                <a href="#about" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors py-2">About</a>
                <a href="#skills" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors py-2">Skills</a>
                <a href="#experience" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors py-2">Experience</a>
                <a href="#projects" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors py-2">Projects</a>
                <a href="#contact" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors py-2">Contact</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
