import React from 'react';
import { 
  Car, 
  CheckCircle, 
  Phone,
  Palette,
  Shield,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BodyRepair = () => {
  const bodyServices = [
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Рихтовка",
      description: "Восстановление геометрии кузова",
      price: "от 5 000 ₽",
      includes: ["Оценка повреждений", "Рихтовочные работы", "Шпатлевание", "Грунтовка"]
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-600" />,
      title: "Покраска",
      description: "Полная и частичная покраска",
      price: "от 8 000 ₽",
      includes: ["Подбор краски", "Подготовка поверхности", "Покраска", "Полировка"]
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Антикоррозийная обработка",
      description: "Защита от ржавчины",
      price: "от 3 000 ₽",
      includes: ["Очистка от ржавчины", "Грунтовка", "Нанесение защиты", "Обработка скрытых полостей"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Car className="w-16 h-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Кузовной ремонт
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Восстановление после ДТП, покраска, антикоррозийная обработка
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Оценка повреждений
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Кузовные работы
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bodyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-orange-600 mt-4">{service.price}</div>
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

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужен кузовной ремонт?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Восстановим ваш автомобиль как новый
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться на ремонт
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BodyRepair;