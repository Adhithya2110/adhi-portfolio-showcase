
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a dummy resume download - you can replace this with your actual resume file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Adhithya_GP_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Adhithya G P</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            AI/ML Engineer & Data Science Graduate
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6 sm:mb-8">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Coimbatore, India</span>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Passionate AI/ML Engineer with expertise in computer vision, LLMs, and cloud platforms. 
            Developed innovative solutions at Shellkode, with hands-on experience in object detection,
            content moderation, and fashion attribute extraction.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-sm sm:text-base">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-sm sm:text-base">
              <a href="#projects">View Projects</a>
            </Button>
            <Button onClick={handleDownloadResume} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-sm sm:text-base">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/adhithya77/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Adhithya2110" target="_blank" rel="noopener noreferrer"
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
