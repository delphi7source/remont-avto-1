import React from 'react';
import { 
  Gauge, 
  CheckCircle, 
  AlertTriangle, 
  Phone,
  Shield,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BrakeSystem = () => {
  const brakeServices = [
    {
      title: "Замена тормозных колодок",
      description: "Передние и задние колодки",
      price: "от 2 500 ₽",
      duration: "1-2 часа",
      includes: ["Диагностика износа", "Замена колодок", "Проверка дисков", "Тест-драйв"]
    },
    {
      title: "Замена тормозных дисков",
      description: "Вентилируемые и обычные диски",
      price: "от 4 000 ₽", 
      duration: "2-3 часа",
      includes: ["Снятие колес", "Замена дисков", "Установка новых колодок", "Прокачка системы"]
    },
    {
      title: "Ремонт суппортов",
      description: "Восстановление тормозных суппортов",
      price: "от 3 500 ₽",
      duration: "3-4 часа", 
      includes: ["Разборка суппорта", "Замена поршней", "Замена пыльников", "Сборка и установка"]
    }
  ];

  const warningSignals = [
    {
      signal: "Скрип при торможении",
      danger: "Средняя",
      description: "Износ тормозных колодок, требуется замена"
    },
    {
      signal: "Вибрация педали тормоза",
      danger: "Высокая", 
      description: "Деформация тормозных дисков"
    },
    {
      signal: "Мягкая педаль тормоза",
      danger: "Критическая",
      description: "Возможна утечка тормозной жидкости"
    },
    {
      signal: "Увеличенный тормозной путь",
      danger: "Критическая",
      description: "Серьезные проблемы с тормозной системой"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Gauge className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Тормозная система
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Безопасность превыше всего. Профессиональное обслуживание тормозов.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Экстренная проверка тормозов
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги по тормозной системе
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brakeServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-red-600 mt-4">{service.price}</div>
                  <div className="text-gray-600">{service.duration}</div>
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

      {/* Warning Signals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Тревожные сигналы
            </h2>
            <p className="text-xl text-gray-600">
              Когда нужно срочно проверить тормоза
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warningSignals.map((warning, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{warning.signal}</CardTitle>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      warning.danger === 'Критическая' ? 'bg-red-100 text-red-800' :
                      warning.danger === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {warning.danger}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{warning.description}</p>
                  {warning.danger === 'Критическая' && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium text-sm">
                        ⚠️ Немедленно обратитесь в сервис!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Безопасность - наш приоритет
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Тормозная система - это ваша безопасность и безопасность других участников дорожного движения. 
              Не экономьте на тормозах!
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Проверить тормоза сейчас
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrakeSystem;