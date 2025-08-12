import { Zap, Network, Award, TrendingUp, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MemberBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Доступ к передовым технологиям и инновациям",
      description: "Первоочередной доступ к новейшим разработкам в области цифровизации горной отрасли",
      color: "text-mining-orange"
    },
    {
      icon: Network,
      title: "Расширение деловых связей и создание новых партнерств",
      description: "Networking с ведущими компаниями отрасли и возможности для стратегических альянсов",
      color: "text-mining-gold"
    },
    {
      icon: Award,
      title: "Участие в формировании отраслевых стандартов",
      description: "Влияние на развитие стандартов и лучших практик цифровой трансформации",
      color: "text-mining-orange"
    },
    {
      icon: TrendingUp,
      title: "Повышение конкурентоспособности и рыночной стоимости",
      description: "Укрепление позиций на рынке через внедрение передовых цифровых решений",
      color: "text-mining-gold"
    },
    {
      icon: Puzzle,
      title: "Совместное решение сложных отраслевых задач",
      description: "Коллективный подход к решению технических и стратегических вызовов отрасли",
      color: "text-mining-orange"
    }
  ];

  return (
    <section className="py-20 bg-mining-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Преимущества для <span className="text-gradient">Участников</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Эксклюзивные возможности и привилегии для компаний-членов ассоциации
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-mining-gray/30 border-mining-gray/50 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-mining-dark/50 flex-shrink-0`}>
                      <IconComponent className={`${benefit.color} h-6 w-6`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-mining-orange/20 to-mining-gold/20 border-mining-orange/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Станьте частью цифрового будущего горной отрасли
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Присоединяйтесь к ведущим компаниям, которые формируют завтрашний день индустрии
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="gradient-mining text-black px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-all mining-glow"
              >
                Подать заявку на участие
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}