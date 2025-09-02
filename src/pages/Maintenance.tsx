import React from 'react';
import { 
  Settings, 
  CheckCircle, 
  Phone,
  Calendar,
  Clock,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Maintenance = () => {
  const maintenancePackages = [
    {
      title: "ТО-1 (Базовое)",
      description: "Каждые 10 000 км или 6 месяцев",
      price: "от 3 500 ₽",
      duration: "2-3 часа",
      includes: [
        "Замена моторного масла",
        "Замена масляного фильтра", 
        "Проверка уровней жидкостей",
        "Визуальный осмотр",
        "Диагностика ошибок"
      ]
    },
    {
      title: "ТО-2 (Расширенное)",
      description: "Каждые 20 000 км или 12 месяцев",
      price: "от 6 500 ₽",
      duration: "4-5 часов",
      includes: [
        "Все работы ТО-1",
        "Замена воздушного фильтра",
        "Замена салонного фильтра",
        "Проверка тормозной системы",
        "Проверка подвески",
        "Диагностика электрики"
      ]
    },
    {
      title: "ТО-3 (Полное)",
      description: "Каждые 40 000 км или 24 месяца",
      price: "от 12 000 ₽",
      duration: "6-8 часов",
      includes: [
        "Все работы ТО-2",
        "Замена свечей зажигания",
        "Замена топливного фильтра",
        "Проверка ремня ГРМ",
        "Замена тормозной жидкости",
        "Развал-схождение"
      ]
    }
  ];

  const benefits = [
    "Продление срока службы автомобиля",
    "Снижение расхода топлива",
    "Предотвращение серьезных поломок",
    "Сохранение гарантии производителя",
    "Безопасность на дороге",
    "Поддержание стоимости авто"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Settings className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Техническое обслуживание
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Регулярное ТО - залог долгой и безопасной эксплуатации автомобиля
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Calendar className="w-5 h-5 mr-2" />
              Записаться на ТО
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Пакеты технического обслуживания
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {maintenancePackages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${index === 1 ? 'ring-2 ring-green-500' : ''}`}>
                {index === 1 && (
                  <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
                    Рекомендуемый
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-green-600 mt-4">{pkg.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Преимущества регулярного ТО
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Пора на техобслуживание?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Не откладывайте ТО - это экономит ваши деньги в долгосрочной перспективе
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться на ТО
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;