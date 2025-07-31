
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "OpenCV", "Machine Learning", "SQL"]
    },
    {
      title: "AI/ML Frameworks",
      skills: ["YOLOv8", "Vision Transformer (ViT)", "FAISS", "LangChain", "Object Detection"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Amazon S3", "EC2", "CloudWatch", "Streamlit", "Boto3"]
    },
    {
      title: "Specialized",
      skills: ["LLM Analytics", "Computer Vision", "Content Moderation", "Image Processing"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Expertise in cutting-edge AI/ML technologies and cloud platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-base sm:text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-white/30 hover:from-blue-500/40 hover:to-purple-500/40 transition-all text-xs sm:text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
