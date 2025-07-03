
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Jewelry Image Matching System",
      description: "AI-based jewelry recognition system using YOLOv8 and Vision Transformer for duplicate detection and image matching.",
      features: [
        "Trained YOLOv8 model on 2,500 labeled images for jewelry detection",
        "Extracted visual features using Vision Transformer (google/vit-base-patch16-224-in21k)",
        "Built feature-based matching engine with orientation invariance",
        "Designed efficient retrieval pipeline using FAISS and pickle"
      ],
      tech: ["YOLOv8", "Vision Transformer", "FAISS", "Python", "Computer Vision"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Fashion Attribute Extraction",
      description: "Scalable web application using AWS Bedrock and LLM for extracting fashion product attributes from images and metadata.",
      features: [
        "Built Streamlit web app with Anthropic's Claude LLM on AWS Bedrock",
        "Dynamic batch-processing pipeline for large CSV/Excel files",
        "Real-time inference with confidence scoring",
        "Image preprocessing and multimodal request handling"
      ],
      tech: ["AWS Bedrock", "Streamlit", "Claude LLM", "Python", "Boto3"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Innovative AI/ML solutions showcasing expertise in computer vision and LLM applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <p className="text-gray-300">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90`}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
