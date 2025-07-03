
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Adhithya G P</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            AI/ML Engineer & Data Science Graduate
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <MapPin className="w-5 h-5" />
            <span>Coimbatore, India</span>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate AI/ML Engineer with expertise in computer vision, LLMs, and cloud platforms. 
            Currently building innovative solutions at Shellkode with experience in object detection, 
            content moderation, and fashion attribute extraction.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/adhithyagp" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/adhithyagp" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:adhithyagp7878@gmail.com"
               className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
