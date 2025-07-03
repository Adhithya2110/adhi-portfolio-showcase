
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adhithyagp7878@gmail.com",
      href: "mailto:adhithyagp7878@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7010959050",
      href: "tel:+917010959050"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, India",
      href: "https://maps.google.com/?q=Coimbatore,India"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative AI/ML projects or discuss opportunities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                    <a href={info.href} target={info.label === "Location" ? "_blank" : "_self"} rel={info.label === "Location" ? "noopener noreferrer" : ""} className="text-white hover:text-blue-400 transition-colors">
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-8">
                <div className="text-center">
                  <p className="text-gray-300 mb-6">Connect with me on social platforms</p>
                  <div className="flex justify-center gap-4">
                    <Button asChild className="bg-[#0077B5] hover:bg-[#005582]">
                      <a href="https://www.linkedin.com/in/adhithya77/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild className="bg-gray-800 hover:bg-gray-700">
                      <a href="https://github.com/Adhithya2110" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-400">
          © 2024 Adhithya G P. Built with passion for AI and innovation.
        </p>
      </div>
    </section>
  );
};

export default Contact;
