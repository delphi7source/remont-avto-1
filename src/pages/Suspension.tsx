import React from 'react';
import { 
  Car, 
  CheckCircle, 
  AlertTriangle, 
  Phone,
  Wrench,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Suspension = () => {
  const suspensionServices = [
    {
      title: "Замена амортизаторов",
      description: "Передние и задние амортизаторы",
      price: "от 4 000 ₽",
      includes: ["Диагностика подвески", "Замена амортизаторов", "Проверка пружин", "Развал-схождение"]
    },
    {
      title: "Ремонт стоек",
      description: "Стойки MacPherson и многорычажка",
      price: "от 6 000 ₽",
      includes: ["Замена опорных подшипников", "Замена пыльников", "Замена отбойников", "Сборка стойки"]
    },
    {
      title: "Замена сайлентблоков",
      description: "Все элементы подвески",
      price: "от 2 000 ₽",
      includes: ["Диагностика люфтов", "Замена сайлентблоков", "Проверка геометрии", "Тест-драйв"]
    }
  ];

  const suspensionProblems = [
    {
      problem: "Стук в подвеске",
      symptoms: ["Стук на кочках", "Скрип при повороте", "Металлический звон"],
      causes: ["Износ амортизаторов", "Люфт в шаровых", "Износ сайлентблоков"]
    },
    {
      problem: "Увод автомобиля",
      symptoms: ["Машину ведет в сторону", "Неравномерный износ шин", "Руль стоит криво"],
      causes: ["Нарушение развал-схождения", "Деформация рычагов", "Износ рулевых тяг"]
    },
    {
      problem: "Жесткая подвеска",
      symptoms: ["Плохая амортизация", "Удары передаются в салон", "Подпрыгивание"],
      causes: ["Поломка амортизаторов", "Просадка пружин", "Износ отбойников"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Car className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ремонт подвески
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Комфорт и безопасность вашей поездки зависят от исправной подвески
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Диагностика подвески
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги по подвеске
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {suspensionServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-indigo-600 mt-4">{service.price}</div>
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

      {/* Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Проблемы подвески
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suspensionProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                    {problem.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Симптомы:</h4>
                    <ul className="space-y-1 mb-4">
                      {problem.symptoms.map((symptom, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Возможные причины:</h4>
                    <ul className="space-y-1">
                      {problem.causes.map((cause, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {cause}</li>
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
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Подвеска требует внимания?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Запишитесь на диагностику и обеспечьте комфорт и безопасность поездок
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться на ремонт
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suspension;