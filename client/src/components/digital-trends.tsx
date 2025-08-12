import { Bot, Brain, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DigitalTrends() {
  return (
    <section id="trends" className="py-20 bg-mining-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Цифровые <span className="text-gradient">Тренды</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Два ключевых направления, которые будут определять будущее отрасли в ближайшие 5 лет
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-mining-charcoal to-mining-gray border-mining-gray hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-mining-orange p-4 rounded-full mr-6">
                  <Bot className="text-black text-2xl h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Автономные Системы</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ускоренное внедрение беспилотных карьерных самосвалов, автоматизированных буровых установок и роботизированных складских операций обеспечит работу 24/7 и повысит безопасность
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-mining-orange mr-3 h-5 w-5" />
                  <span className="text-sm text-gray-300">Повышение эффективности</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-mining-orange mr-3 h-5 w-5" />
                  <span className="text-sm text-gray-300">Минимизация рисков</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-mining-orange mr-3 h-5 w-5" />
                  <span className="text-sm text-gray-300">Снижение отходов</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-mining-charcoal to-mining-gray border-mining-gray hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-mining-gold p-4 rounded-full mr-6">
                  <Brain className="text-black text-2xl h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">ИИ и Аналитика</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Массовое применение искусственного интеллекта для предиктивного обслуживания, оптимизации процессов в реальном времени и улучшения геологоразведки
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-mining-gold mr-3 h-5 w-5" />
                  <span className="text-sm text-gray-300">Предиктивное обслуживание</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-mining-gold mr-3 h-5 w-5" />
                  <span className="text-sm text-gray-300">Оптимизация ресурсов</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-mining-gold mr-3 h-5 w-5" />
                  <span className="text-sm text-gray-300">Прогнозирование рисков</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
