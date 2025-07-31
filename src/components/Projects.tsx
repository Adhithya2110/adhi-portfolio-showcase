
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Innovative AI/ML solutions showcasing expertise in computer vision and LLM applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                <CardTitle className="text-white text-lg sm:text-xl mb-2">{project.title}</CardTitle>
                <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-gray-300 text-xs sm:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
