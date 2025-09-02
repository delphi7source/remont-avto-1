import React from 'react';
import { 
  Thermometer, 
  CheckCircle, 
  Phone,
  Snowflake,
  Wind,
  Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AirConditioning = () => {
  const acServices = [
    {
      icon: <Snowflake className="w-8 h-8 text-blue-600" />,
      title: "Заправка кондиционера",
      description: "Заправка фреоном R134a и R1234yf",
      price: "от 2 000 ₽",
      includes: ["Проверка герметичности", "Вакуумирование", "Заправка фреоном", "Проверка работы"]
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-600" />,
      title: "Чистка системы",
      description: "Антибактериальная обработка",
      price: "от 1 500 ₽",
      includes: ["Замена салонного фильтра", "Чистка испарителя", "Дезинфекция", "Устранение запахов"]
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Ремонт системы",
      description: "Устранение утечек и поломок",
      price: "от 3 000 ₽",
      includes: ["Поиск утечек", "Замена уплотнений", "Ремонт компрессора", "Замена радиатора"]
    }
  ];

  const seasonalTips = [
    {
      season: "Весна",
      tips: [
        "Проверьте работу кондиционера после зимы",
        "Замените салонный фильтр",
        "Проведите антибактериальную обработку",
        "Проверьте уровень фреона"
      ]
    },
    {
      season: "Лето", 
      tips: [
        "Регулярно используйте кондиционер",
        "Следите за температурой в салоне",
        "Проверяйте работу вентилятора",
        "Не перегружайте систему"
      ]
    },
    {
      season: "Осень",
      tips: [
        "Подготовьте систему к зиме",
        "Проверьте антифриз",
        "Очистите дренажные отверстия",
        "Проведите профилактику"
      ]
    },
    {
      season: "Зима",
      tips: [
        "Периодически включайте кондиционер",
        "Следите за обогревом салона",
        "Проверьте работу печки",
        "Не допускайте обледенения"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Thermometer className="w-16 h-16 mx-auto mb-6 text-cyan-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Кондиционер и климат-контроль
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Комфортная температура в любое время года
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Заправить кондиционер
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги по кондиционерам
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {acServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-cyan-600 mt-4">{service.price}</div>
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

      {/* Seasonal Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сезонные рекомендации
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalTips.map((season, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center text-xl">{season.season}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {season.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовимся к летнему сезону
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Заправка кондиционера со скидкой 20% до конца месяца
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться со скидкой
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirConditioning;