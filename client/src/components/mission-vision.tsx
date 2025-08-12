import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section id="about" className="py-20 bg-mining-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Миссия</span> и Видение
          </h2>
          <div className="w-24 h-1 gradient-mining mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-mining-gray/50 border-mining-gray/50 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-mining-orange text-3xl mr-4 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-white">Миссия</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Содействие всесторонней цифровизации горнодобывающей и металлургической промышленности посредством коллаборации, обмена знаниями и внедрения передовых решений
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-mining-gray/50 border-mining-gray/50 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="text-mining-gold text-3xl mr-4 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-white">Видение</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Стать ведущей платформой создания экосистемы цифровых инноваций для высокотехнологичной, безопасной и экологически ответственной отрасли будущего
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern metallurgy facility with digital displays" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-mining-dark/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
