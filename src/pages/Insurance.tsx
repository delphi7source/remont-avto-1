import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  Phone,
  FileText,
  Car,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Insurance = () => {
  const insuranceServices = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "ОСАГО",
      description: "Обязательное страхование",
      price: "от 3 500 ₽",
      includes: ["Оформление полиса", "Расчет стоимости", "Помощь с документами", "Консультации"]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "КАСКО",
      description: "Добровольное страхование",
      price: "от 25 000 ₽",
      includes: ["Полное покрытие", "Ремонт у дилера", "Эвакуатор", "Техпомощь"]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Страхование жизни",
      description: "Защита водителя и пассажиров",
      price: "от 2 000 ₽",
      includes: ["Медицинские расходы", "Компенсации", "Реабилитация", "Поддержка семьи"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Страхование автомобилей
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Защитите свой автомобиль и себя с помощью надежного страхования
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {insuranceServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-4">{service.price}</div>
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
                    Оформить
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

export default Insurance;