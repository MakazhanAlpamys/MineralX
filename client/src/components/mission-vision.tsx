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
          
          {/* Right side - Abstract visual representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-mining-charcoal to-mining-dark rounded-2xl p-12 shadow-2xl border border-mining-gray/30">
              {/* Central element */}
              <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-mining-orange/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-mining-gold/20"></div>
                
                {/* Central icon */}
                <div className="w-20 h-20 bg-gradient-mining rounded-full flex items-center justify-center shadow-xl">
                  <Target className="h-10 w-10 text-black" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-mining-orange rounded-full flex items-center justify-center animate-float">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-mining-gold rounded-full flex items-center justify-center animate-float-delayed">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-mining-orange rounded-full flex items-center justify-center animate-float">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-mining-gold rounded-full flex items-center justify-center animate-float-delayed">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              
              {/* Connection lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full opacity-20" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#FFA500" strokeWidth="1" strokeDasharray="5,5" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,3" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#FFA500" strokeWidth="1" strokeDasharray="2,2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
