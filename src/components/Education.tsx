
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg px-2">Academic foundation in Data Science and Analytics</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-white text-lg sm:text-xl">MSc Data Science (5 Years Integrated)</CardTitle>
                  <p className="text-blue-400 font-semibold text-sm sm:text-base">Coimbatore Institute of Technology</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">2021 – Present</span>
                  </div>
                </div>
                <div className="text-center sm:text-right self-start sm:self-center">
                  <p className="text-green-400 font-bold text-base sm:text-lg">7.47/10</p>
                  <p className="text-gray-400 text-xs sm:text-sm">CGPA (Up to 7th Sem)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-gray-300 text-sm sm:text-base">
                Comprehensive program covering statistical analysis, machine learning, data visualization, 
                and advanced AI techniques with hands-on experience in real-world data science projects.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-white text-lg sm:text-xl">Higher Secondary Education</CardTitle>
                  <p className="text-purple-400 font-semibold text-sm sm:text-base">GRD Matric Higher Secondary School</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">2019 – 2021</span>
                  </div>
                </div>
                <div className="text-center sm:text-right self-start sm:self-center">
                  <p className="text-green-400 font-bold text-base sm:text-lg">90.26%</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Percentage</p>
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
