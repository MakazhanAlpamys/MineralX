import { Server, BarChart3, Satellite, Settings, Lock, QrCode, ShoppingCart, Building, Database, Cpu, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MemberCompanies() {
  const companies = [
    {
      name: "Wintel",
      description: "Комплексные IT-решения, облачные технологии и кибербезопасность",
      icon: Server,
      color: "text-mining-orange"
    },
    {
      name: "Win X",
      description: "Анализ данных, оптимизация процессов и системы управления производством",
      icon: BarChart3,
      color: "text-mining-gold"
    },
    {
      name: "Turan Telematika",
      description: "Телематические системы и мониторинг транспорта и оборудования",
      icon: Satellite,
      color: "text-mining-orange"
    },
    {
      name: "Core24",
      description: "Управление активами, производственное планирование и диспетчеризация",
      icon: Settings,
      color: "text-mining-gold"
    },
    {
      name: "CyberX",
      description: "Кибербезопасность промышленных систем и защита критической инфраструктуры",
      icon: Lock,
      color: "text-mining-orange"
    },
    {
      name: "QR Systems",
      description: "Автоматизация учета и логистики с использованием QR и RFID технологий",
      icon: QrCode,
      color: "text-mining-gold"
    },
    {
      name: "Mitwork",
      description: "Платформа управления закупками для горнодобывающей индустрии",
      icon: ShoppingCart,
      color: "text-mining-orange"
    },
    {
      name: "МЭК-Астана",
      description: "Инжиниринг, проектирование и модернизация промышленных объектов",
      icon: Building,
      color: "text-mining-gold"
    },
    {
      name: "Akashi Data Center",
      description: "Хранение, обработка и управление большими данными",
      icon: Database,
      color: "text-mining-orange"
    },
    {
      name: "Redline Digital",
      description: "Электронное оборудование для шахт, сенсоры и системы автоматизации",
      icon: Cpu,
      color: "text-mining-gold"
    },
    {
      name: "Nazarbayev University",
      description: "Международный исследовательский университет с обучением на английском языке",
      icon: Book,
      color: "text-mining-blue"
    }
  ];

  return (
    <section id="members" className="py-20 bg-mining-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Компании <span className="text-gradient">Участники</span>
          </h2>
          <p className="text-xl text-gray-400">Ведущие технологические компании, объединенные общей целью</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <Card key={index} className="bg-mining-charcoal border-mining-gray/50 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`${company.color} text-2xl mr-3 h-6 w-6`} />
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{company.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
