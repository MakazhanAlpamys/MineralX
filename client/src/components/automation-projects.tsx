import { Bot, Thermometer, ScanLine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AutomationProjects() {
  const projects = [
    {
      title: "Взрывозащищенный робот для мониторинга производственных зон повышенной опасности",
      relevance: "Интеллектуальный контроль опасных производственных зон, пунктов сбора легковоспламеняющихся, взрывоопасных, токсичных и опасных веществ, производственные транспортные пути, химические предприятия, складские помещения, подземные помещения и шахты.",
      solution: "Инфракрасное измерение температуры оборудования. Обнаружение утечек вещества. Мониторинг загазованности и запыленности. Система рельсов позволяет роботу перемещаться по контролируемой зоне и обеспечивать полный охват всех объектов без участия человека 24 на 7.",
      icon: Bot,
      color: "text-mining-orange"
    },
    {
      title: "Тепловизионная система предотвращения порыва конвейерной ленты",
      relevance: "Все без исключения существующие на сегодня технологии контроля продольного порыва работают с эффективностью ~20-30%. В том числе самые передовые на основе ИИ и компьютерного зрения. Один порыв конвейерной ленты это десятки миллионов ущерба от простоя.",
      solution: "Использование технологии непрерывного тепловизионного сканирования. Технология полностью внедрена в виде программно-аппаратного комплекса на территории РФ. Технология подтвердила свою эффективность и неприхотливость в реальных условиях эксплуатации.",
      icon: Thermometer,
      color: "text-mining-gold"
    },
    {
      title: "Сканер для бесконтактной оценки состояния футеровки и наполняемости сталь-ковшей",
      relevance: "Для оценки состояния футеровки и наполняемости сталь ковшей в 99% случаев используется ручная инспекция. Ручная инспекция = простои и убытки.",
      solution: "Использование технологии непрерывного сканирования (раз в 8 секунд) для online измерения состояния футеровки на базе лидара и технологий машинного зрения. Использование портативной подвесной конструкции для установки над траекторией движения ковша для мониторинга наполненности.",
      icon: ScanLine,
      color: "text-mining-orange"
    }
  ];

  return (
    <section className="py-20 bg-mining-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Потенциальные проекты <span className="text-gradient">автоматизации</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Горно-металлургической отрасли Казахстана
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="bg-mining-dark border-mining-gray/50 hover-lift">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                      <div className="bg-mining-charcoal/50 p-4 rounded-2xl">
                        <IconComponent className={`${project.color} h-8 w-8`} />
                      </div>
                    </div>
                    
                    <div className="lg:col-span-11">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        {project.title}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-mining-gold mb-3">
                            Актуальность
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {project.relevance}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-mining-orange mb-3">
                            Решение
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
