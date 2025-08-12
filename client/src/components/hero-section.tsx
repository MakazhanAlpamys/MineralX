import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Mining operation with heavy machinery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mining-dark/90 to-mining-dark/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Цифровое
            <span className="text-gradient block">Будущее</span>
            Горной Добычи
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Ассоциация MineralX объединяет лидеров цифровых технологий и промышленных гигантов для ускорения трансформации горнодобывающей и металлургической отраслей
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="gradient-mining text-black px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all mining-glow"
            >
              Присоединиться
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              className="border-2 border-mining-orange text-mining-orange px-8 py-4 text-lg font-semibold hover:bg-mining-orange hover:text-black transition-all"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-mining-orange text-2xl h-8 w-8" />
      </div>
    </section>
  );
}
