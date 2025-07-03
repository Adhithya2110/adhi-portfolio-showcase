
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-300 text-lg">Building innovative AI solutions in the industry</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <div>
                  <CardTitle className="text-white text-xl">AI/ML Engineer</CardTitle>
                  <p className="text-blue-400 font-semibold">Shellkode Pvt. Ltd</p>
                  <p className="text-gray-400">July 2024 – Dec 2024</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-semibold mb-2">🏆 Honoured with Sprout of the Year (2024 – 2025) in Shellkode Annual Awards</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Image Sequencing Pipeline:</strong> Developed for product listings across Nykaa, Amazon, Myntra, and Flipkart to enhance visual consistency.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>AI Model for Zepto:</strong> Built to predict the number of bags, items, and defective items in warehouse images using object detection and classification.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Content Moderation Model:</strong> Designed and deployed for IndiaMART to flag inappropriate or non-compliant listings.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Computer Vision</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Object Detection</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Content Moderation</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Image Processing</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
