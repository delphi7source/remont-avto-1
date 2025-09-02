import React from 'react';
import { 
  Circle, 
  CheckCircle, 
  Phone,
  Gauge,
  Wrench,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TireService = () => {
  const tireServices = [
    {
      icon: <Circle className="w-8 h-8 text-gray-600" />,
      title: "Шиномонтаж",
      description: "Замена и ремонт шин",
      price: "от 500 ₽",
      includes: ["Снятие/установка колес", "Балансировка", "Проверка давления", "Визуальный осмотр"]
    },
    {
      icon: <Gauge className="w-8 h-8 text-gray-600" />,
      title: "Балансировка колес",
      description: "Устранение вибрации",
      price: "от 300 ₽",
      includes: ["Статическая балансировка", "Динамическая балансировка", "Проверка дисков", "Установка грузиков"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-600" />,
      title: "Ремонт шин",
      description: "Устранение проколов и порезов",
      price: "от 200 ₽",
      includes: ["Поиск повреждений", "Ремонт проколов", "Установка заплаток", "Проверка герметичности"]
    }
  ];

  const seasonalOffers = [
    {
      season: "Зимние шины",
      description: "Подготовка к зимнему сезону",
      offer: "Скидка 15% на установку зимних шин",
      period: "Октябрь - Декабрь"
    },
    {
      season: "Летние шины", 
      description: "Переход на летнюю резину",
      offer: "Бесплатная балансировка при замене",
      period: "Март - Май"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Circle className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Шиномонтаж
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Профессиональный шиномонтаж и балансировка колес
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Записаться на шиномонтаж
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги шиномонтажа
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tireServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-gray-600 mt-4">{service.price}</div>
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

      {/* Seasonal Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сезонные предложения
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{offer.season}</CardTitle>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="text-orange-800 font-semibold">{offer.offer}</p>
                  </div>
                  <p className="text-gray-600">Период: {offer.period}</p>
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

export default TireService;