
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "National Gold Medalist - Yoga Championship",
      description: "46th National Yogasana Championship at Ranchi, Jharkhand",
      date: "October 2021",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Medal,
      title: "State Gold Medalist - Yoga Championship", 
      description: "34th State Yogasana Championship, Madurai",
      date: "2021",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Cricket 1st Division Player",
      description: "Winners in Covai Ties and CIT Alumni Trophy at CIT college",
      date: "March 2023",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Honors & Achievements</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg px-2">Excellence beyond academics in sports and competitions</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <CardTitle className="text-white text-sm sm:text-base md:text-lg leading-tight">{achievement.title}</CardTitle>
                <p className="text-gray-400 text-xs sm:text-sm">{achievement.date}</p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-gray-300 text-center text-xs sm:text-sm">{achievement.description}</p>
                {index === 2 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs sm:text-sm text-blue-300">🏆 Best Bowler of the Tournament - Covai Ties</p>
                    <p className="text-xs sm:text-sm text-green-300">🌟 Player of the Tournament - CIT Alumni Trophy</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
