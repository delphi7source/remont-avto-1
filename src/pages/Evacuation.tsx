import React from 'react';
import { 
  Truck, 
  CheckCircle, 
  Phone,
  Clock,
  MapPin,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Evacuation = () => {
  const evacuationServices = [
    {
      title: "Легковые автомобили",
      description: "Эвакуация легковых авто",
      price: "от 2 000 ₽",
      maxWeight: "до 3 тонн",
      includes: ["Погрузка", "Транспортировка", "Разгрузка", "Страховка"]
    },
    {
      title: "Внедорожники",
      description: "Эвакуация SUV и кроссоверов",
      price: "от 2 500 ₽",
      maxWeight: "до 4 тонн",
      includes: ["Специальное оборудование", "Безопасная погрузка", "Транспортировка", "Страховка"]
    },
    {
      title: "Коммерческий транспорт",
      description: "Эвакуация грузовиков и автобусов",
      price: "от 5 000 ₽",
      maxWeight: "до 10 тонн",
      includes: ["Тяжелый эвакуатор", "Специальная техника", "Опытные водители", "Страховка"]
    }
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "Позвоните нам",
      description: "Сообщите о поломке и местоположении"
    },
    {
      step: "2", 
      title: "Ожидайте эвакуатор",
      description: "Среднее время прибытия - 30 минут"
    },
    {
      step: "3",
      title: "Погрузка автомобиля",
      description: "Безопасная погрузка на эвакуатор"
    },
    {
      step: "4",
      title: "Доставка в сервис",
      description: "Транспортировка в наш автосервис"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="w-16 h-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Эвакуатор
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Круглосуточная эвакуация автомобилей по Москве и области
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              <Phone className="w-5 h-5 mr-2" />
              Вызвать эвакуатор: +7 (495) 987-65-43
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги эвакуации
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {evacuationServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-orange-600 mt-4">{service.price}</div>
                  <div className="text-gray-600">{service.maxWeight}</div>
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
                    Вызвать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна срочная эвакуация?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Звоните прямо сейчас! Приедем в течение 30 минут
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Экстренный вызов: +7 (495) 987-65-43
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evacuation;