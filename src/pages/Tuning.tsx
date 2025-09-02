import React from 'react';
import { 
  Zap, 
  CheckCircle, 
  Phone,
  Gauge,
  Music,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tuning = () => {
  const tuningServices = [
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Чип-тюнинг",
      description: "Увеличение мощности двигателя",
      price: "от 15 000 ₽",
      includes: ["Диагностика ЭБУ", "Прошивка", "Тестирование", "Гарантия"]
    },
    {
      icon: <Music className="w-8 h-8 text-red-600" />,
      title: "Аудиосистемы",
      description: "Установка и настройка аудио",
      price: "от 10 000 ₽",
      includes: ["Подбор оборудования", "Установка", "Настройка", "Шумоизоляция"]
    },
    {
      icon: <Palette className="w-8 h-8 text-red-600" />,
      title: "Внешний тюнинг",
      description: "Изменение внешнего вида",
      price: "от 5 000 ₽",
      includes: ["Обвесы", "Спойлеры", "Тонировка", "Виниловые пленки"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Тюнинг автомобилей
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Улучшение характеристик и внешнего вида вашего автомобиля
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Консультация по тюнингу
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tuningServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-red-600 mt-4">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tuning;