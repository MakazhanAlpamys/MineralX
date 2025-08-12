import { useState } from "react";
import { Users, Rocket, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  company_name: string;
  contact_person: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    company_name: "",
    contact_person: "",
    email: "",
    message: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Заявка отправлена!",
        description: data.message,
      });
      setFormData({
        company_name: "",
        contact_person: "",
        email: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Ошибка",
        description: error.message || "Произошла ошибка при отправке заявки",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.company_name || !formData.contact_person || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email адрес",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-mining-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Присоединяйтесь к <span className="text-gradient">MineralX</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Станьте частью экосистемы цифровых инноваций в горнодобывающей и металлургической промышленности
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Users className="text-mining-orange text-2xl mr-4 h-8 w-8" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Расширение сети</h4>
                  <p className="text-gray-400">Доступ к ведущим технологическим компаниям</p>
                </div>
              </div>
              <div className="flex items-center">
                <Rocket className="text-mining-gold text-2xl mr-4 h-8 w-8" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Инновации</h4>
                  <p className="text-gray-400">Участие в передовых цифровых проектах</p>
                </div>
              </div>
              <div className="flex items-center">
                <Trophy className="text-mining-orange text-2xl mr-4 h-8 w-8" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Конкурентоспособность</h4>
                  <p className="text-gray-400">Повышение рыночной стоимости компании</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-mining-gray/30 border-mining-gray/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Название компании"
                    value={formData.company_name}
                    onChange={(e) => handleInputChange("company_name", e.target.value)}
                    className="bg-mining-dark border-mining-gray/50 text-white placeholder:text-gray-400 focus:border-mining-orange"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Контактное лицо"
                    value={formData.contact_person}
                    onChange={(e) => handleInputChange("contact_person", e.target.value)}
                    className="bg-mining-dark border-mining-gray/50 text-white placeholder:text-gray-400 focus:border-mining-orange"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-mining-dark border-mining-gray/50 text-white placeholder:text-gray-400 focus:border-mining-orange"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-mining-dark border-mining-gray/50 text-white placeholder:text-gray-400 focus:border-mining-orange resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={submitContactForm.isPending}
                  className="w-full gradient-mining text-black font-semibold hover:opacity-90 transition-all mining-glow"
                >
                  {submitContactForm.isPending ? "Отправляется..." : "Отправить заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
