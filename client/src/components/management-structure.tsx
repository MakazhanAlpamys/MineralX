import { Users2, Target, Shield, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ManagementStructure() {
  const workingGroups = [
    {
      icon: Target,
      title: "ИИ и аналитика данных",
      description: "Развитие решений искусственного интеллекта для горной отрасли",
      color: "text-mining-orange"
    },
    {
      icon: Users2,
      title: "IoT и автоматизация",
      description: "Внедрение интернета вещей и автономных систем",
      color: "text-mining-gold"
    },
    {
      icon: Shield,
      title: "Кибербезопасность",
      description: "Защита критической инфраструктуры и промышленных систем",
      color: "text-mining-orange"
    },
    {
      icon: Leaf,
      title: "Устойчивое развитие",
      description: "Экологически ответственные цифровые решения",
      color: "text-mining-gold"
    }
  ];

  return (
    <section className="py-20 bg-mining-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Рабочие Группы</h3>
          <p className="text-lg text-gray-400">Специализированные команды по ключевым направлениям развития</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <Card key={index} className="bg-mining-charcoal/50 border-mining-gray/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <IconComponent className={`${group.color} text-3xl mb-4 h-8 w-8 mx-auto`} />
                  <h4 className="text-lg font-semibold mb-3 text-white">{group.title}</h4>
                  <p className="text-gray-400 text-sm">{group.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}