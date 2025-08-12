import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import logoImage from "@assets/image_1755021177876.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-mining-dark border-t border-mining-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="MineralX Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gradient">MineralX</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ассоциация цифровой трансформации горнодобывающей и металлургической промышленности
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="hover:text-mining-orange transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="hover:text-mining-orange transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("trends")} 
                  className="hover:text-mining-orange transition-colors"
                >
                  Тренды
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("members")} 
                  className="hover:text-mining-orange transition-colors"
                >
                  Участники
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-mining-orange transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="mr-2 text-mining-orange h-4 w-4" />
                Kuat@telematika.kz
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-mining-orange h-4 w-4" />
                +7 771 022 88 88
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-mining-orange h-4 w-4" />
                Астана, Казахстан
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mining-gray mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MineralX - Digital Mining & Metallurgy Association. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
