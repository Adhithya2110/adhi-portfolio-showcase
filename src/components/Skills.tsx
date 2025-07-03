
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
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expertise in cutting-edge AI/ML technologies and cloud platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-white/20">
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
