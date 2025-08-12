import { Lightbulb, ArrowRightLeft, Award, Handshake, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function KeyObjectives() {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Стимулирование инноваций",
      description: "Поддержка разработок в области ИИ, IoT, больших данных и автоматизации",
      color: "text-mining-orange"
    },
    {
      icon: ArrowRightLeft,
      title: "Обмен знаниями",
      description: "Создание площадки для обмена опытом и проведения образовательных программ",
      color: "text-mining-gold"
    },
    {
      icon: Award,
      title: "Стандартизация",
      description: "Разработка единых стандартов и лучших практик цифровизации",
      color: "text-mining-orange"
    },
    {
      icon: Handshake,
      title: "Партнерство",
      description: "Содействие созданию совместных проектов и стратегических альянсов",
      color: "text-mining-gold"
    },
    {
      icon: TrendingUp,
      title: "Привлечение инвестиций",
      description: "Поддержка цифровых проектов и инновационных стартапов",
      color: "text-mining-orange"
    },
    {
      icon: Shield,
      title: "Представительство",
      description: "Защита интересов участников на государственном и международном уровнях",
      color: "text-mining-gold"
    }
  ];

  return (
    <section className="py-20 bg-mining-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ключевые <span className="text-gradient">Цели</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <Card key={index} className="bg-mining-gray/30 border-mining-gray/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <IconComponent className={`${objective.color} text-4xl mb-4 h-10 w-10 mx-auto`} />
                  <h3 className="text-xl font-semibold mb-3 text-white">{objective.title}</h3>
                  <p className="text-gray-400">{objective.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
