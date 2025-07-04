
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            AI/ML Engineer & Data Science Graduate
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate AI/ML Engineer with expertise in Computer Vision, Machine Learning, and Cloud Platforms. 
                  Currently pursuing my M.Sc. in Data Science with a strong CGPA of 7.47, I love building intelligent solutions 
                  that solve real-world problems.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My experience spans from developing AI-powered applications at Shellkode to working with object detection, 
                  content moderation, and fashion attribute extraction systems. I'm particularly interested in the intersection 
                  of AI and practical applications that can make a meaningful impact in e-commerce and warehouse automation.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  With hands-on experience in YOLOv8, Vision Transformers, AWS cloud services, and LLM analytics, 
                  I'm passionate about creating innovative solutions that bridge the gap between cutting-edge AI research 
                  and real-world business applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
