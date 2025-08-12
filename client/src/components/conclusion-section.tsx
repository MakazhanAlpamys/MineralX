import { Rocket, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ConclusionSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-mining-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Катализатор <span className="text-gradient">Цифрового Прогресса</span>
          </h2>
          <div className="w-24 h-1 gradient-mining mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ассоциация MineralX - Digital Mining & Metallurgy призвана стать катализатором 
            цифрового прогресса в горнодобывающей и металлургической отраслях
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-mining-charcoal to-mining-gray border-mining-gray hover-lift">
            <CardContent className="p-8 text-center">
              <div className="bg-mining-orange p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-black h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Объединение Усилий</h3>
              <p className="text-gray-300 leading-relaxed">
                Объединяем ведущие технологические компании и промышленные предприятия 
                для создания синергетического эффекта
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-mining-charcoal to-mining-gray border-mining-gray hover-lift">
            <CardContent className="p-8 text-center">
              <div className="bg-mining-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="text-black h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Платформа Инноваций</h3>
              <p className="text-gray-300 leading-relaxed">
                Создаем мощную платформу для инноваций, обмена знаниями и 
                разработки передовых решений
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-mining-charcoal to-mining-gray border-mining-gray hover-lift">
            <CardContent className="p-8 text-center">
              <div className="bg-mining-orange p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Rocket className="text-black h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Устойчивый Рост</h3>
              <p className="text-gray-300 leading-relaxed">
                Обеспечиваем достижение устойчивого роста в эпоху 
                цифровой трансформации отрасли
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-mining-dark/80 to-mining-charcoal/80 border-mining-orange/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Будущее горной отрасли начинается сегодня
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                MineralX создает экосистему, где передовые технологии встречаются с 
                промышленным опытом, формируя новую эру цифровой добычи и металлургии
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="gradient-mining text-black px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all mining-glow"
                >
                  Присоединиться к ассоциации
                </Button>
                <Button 
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  variant="outline" 
                  className="border-2 border-mining-orange text-mining-orange px-8 py-4 text-lg font-semibold hover:bg-mining-orange hover:text-black transition-all"
                >
                  Узнать больше
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}