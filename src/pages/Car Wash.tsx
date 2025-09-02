import React from 'react';
import { 
  Droplets, 
  CheckCircle, 
  Phone,
  Sparkles,
  Car,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CarWash = () => {
  const washServices = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Стандартная мойка",
      description: "Наружная мойка кузова",
      price: "от 800 ₽",
      duration: "30 мин",
      includes: ["Мойка кузова", "Сушка", "Мойка дисков", "Протирка стекол"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Комплексная мойка",
      description: "Наружная и внутренняя мойка",
      price: "от 1 500 ₽",
      duration: "1 час",
      includes: ["Все из стандартной", "Химчистка салона", "Мойка ковриков", "Ароматизация"]
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Детейлинг",
      description: "Профессиональная обработка",
      price: "от 5 000 ₽",
      duration: "3-4 часа",
      includes: ["Полировка кузова", "Защитные покрытия", "Детейлинг салона", "Обработка кожи"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Droplets className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Автомойка
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Профессиональная мойка и детейлинг автомобилей
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Записаться на мойку
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {washServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-4">{service.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
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

export default CarWash;