
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-300 text-lg">Academic foundation in Data Science and Analytics</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <div className="flex-1">
                  <CardTitle className="text-white text-xl">MSc Data Science (5 Years Integrated)</CardTitle>
                  <p className="text-blue-400 font-semibold">Coimbatore Institute of Technology</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>2021 – Present</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold text-lg">7.47/10</p>
                  <p className="text-gray-400 text-sm">CGPA (Up to 7th Sem)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Comprehensive program covering statistical analysis, machine learning, data visualization, 
                and advanced AI techniques with hands-on experience in real-world data science projects.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <div className="flex-1">
                  <CardTitle className="text-white text-xl">Higher Secondary Education</CardTitle>
                  <p className="text-purple-400 font-semibold">GRD Matric Higher Secondary School</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>2019 – 2021</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold text-lg">90.26%</p>
                  <p className="text-gray-400 text-sm">Percentage</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
