import React from 'react';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Phone,
  Battery,
  Lightbulb,
  Radio
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Electrical = () => {
  const electricalServices = [
    {
      icon: <Battery className="w-8 h-8 text-yellow-600" />,
      title: "Генератор и стартер",
      description: "Ремонт и замена",
      price: "от 3 000 ₽",
      services: ["Диагностика", "Замена щеток", "Перемотка", "Замена подшипников"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Электропроводка",
      description: "Поиск и устранение неисправностей",
      price: "от 1 500 ₽",
      services: ["Поиск обрывов", "Замена проводки", "Пайка контактов", "Изоляция"]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Освещение",
      description: "Фары, габариты, поворотники",
      price: "от 500 ₽",
      services: ["Замена ламп", "Регулировка фар", "Ремонт блоков", "Полировка фар"]
    },
    {
      icon: <Radio className="w-8 h-8 text-yellow-600" />,
      title: "Мультимедиа",
      description: "Магнитолы, навигация, камеры",
      price: "от 2 000 ₽",
      services: ["Установка магнитол", "Подключение камер", "Настройка", "Ремонт"]
    }
  ];

  const electricalProblems = [
    {
      problem: "Не заводится двигатель",
      symptoms: ["Стартер не крутит", "Щелчки при повороте ключа", "Тусклый свет приборов"],
      urgency: "Высокая"
    },
    {
      problem: "Разряжается аккумулятор",
      symptoms: ["Быстрый разряд", "Тусклый свет фар", "Слабый звук сигнала"],
      urgency: "Средняя"
    },
    {
      problem: "Не работает освещение",
      symptoms: ["Перегорают лампы", "Мигают фары", "Не работают габариты"],
      urgency: "Высокая"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Автоэлектрика
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              Диагностика и ремонт электрооборудования автомобиля
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Вызвать электрика
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги автоэлектрика
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {electricalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-xl font-bold text-yellow-600 mt-4">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="sm">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Частые электрические проблемы
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {electricalProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{problem.problem}</CardTitle>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      problem.urgency === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {problem.urgency}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Симптомы:</h4>
                    <ul className="space-y-1">
                      {problem.symptoms.map((symptom, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Проблемы с электрикой?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Наши электрики быстро найдут и устранят любую неисправность
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Вызвать автоэлектрика
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electrical;