import { ChevronDown, Zap, Cpu, Database, Shield, Network, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/image_1755021177876.png";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-mining-dark via-mining-charcoal to-mining-dark overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFA500' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 text-mining-orange/20 animate-pulse">
          <Cpu className="h-16 w-16" />
        </div>
        <div className="absolute top-32 right-32 text-mining-gold/20 animate-pulse delay-1000">
          <Database className="h-12 w-12" />
        </div>
        <div className="absolute bottom-32 left-32 text-mining-orange/20 animate-pulse delay-2000">
          <Shield className="h-14 w-14" />
        </div>
        <div className="absolute bottom-40 right-20 text-mining-gold/20 animate-pulse delay-500">
          <Network className="h-10 w-10" />
        </div>
        <div className="absolute top-1/2 left-10 text-mining-orange/20 animate-pulse delay-1500">
          <Bot className="h-18 w-18" />
        </div>
        <div className="absolute top-1/3 right-10 text-mining-gold/20 animate-pulse delay-3000">
          <Zap className="h-12 w-12" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-relaxed mb-8">
            Цифровое
            <span className="text-gradient block py-2">Будущее</span>
            Горной Добычи
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Ассоциация MineralX объединяет лидеров цифровых технологий и промышленных гигантов для ускорения трансформации горнодобывающей и металлургической отраслей
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              className="border-2 border-mining-orange text-mining-orange px-8 py-4 text-lg font-semibold hover:bg-mining-orange hover:text-black transition-all"
            >
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Right side - Tech visualization */}
        <div className="hidden lg:block relative">
          <div className="relative w-96 h-96 mx-auto">
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-mining rounded-full flex items-center justify-center shadow-2xl pulse-glow animate-float">
              <Cpu className="h-12 w-12 text-black" />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 tech-orbit">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-mining-charcoal rounded-full flex items-center justify-center border-2 border-mining-orange">
                <Bot className="h-8 w-8 text-mining-orange" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-mining-charcoal rounded-full flex items-center justify-center border-2 border-mining-gold">
                <Database className="h-8 w-8 text-mining-gold" />
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-mining-charcoal rounded-full flex items-center justify-center border-2 border-mining-orange">
                <Shield className="h-8 w-8 text-mining-orange" />
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-mining-charcoal rounded-full flex items-center justify-center border-2 border-mining-gold">
                <Network className="h-8 w-8 text-mining-gold" />
              </div>
            </div>

            {/* Connection lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-mining-orange text-2xl h-8 w-8" />
      </div>
    </section>
  );
}
