import React from 'react';
import { 
  Gauge, 
  CheckCircle, 
  Clock, 
  Shield, 
  Phone,
  Laptop,
  Search,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Diagnostics = () => {
  const diagnosticTypes = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "Компьютерная диагностика",
      description: "Считывание ошибок из блоков управления",
      price: "1 500 ₽",
      duration: "30 мин",
      includes: ["Сканирование всех блоков", "Расшифровка ошибок", "Рекомендации по устранению"]
    },
    {
      icon: <Gauge className="w-8 h-8 text-blue-600" />,
      title: "Диагностика двигателя",
      description: "Проверка компрессии и работы цилиндров",
      price: "2 000 ₽",
      duration: "1 час",
      includes: ["Измерение компрессии", "Проверка свечей", "Анализ выхлопа"]
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Комплексная диагностика",
      description: "Полная проверка всех систем автомобиля",
      price: "3 500 ₽",
      duration: "2-3 часа",
      includes: ["Все системы", "Подробный отчет", "План ремонта"]
    }
  ];

  const systems = [
    "Двигатель и система впрыска",
    "Трансмиссия и сцепление",
    "Тормозная система",
    "Подвеска и рулевое управление",
    "Электрооборудование",
    "Система кондиционирования",
    "Выхлопная система",
    "Система безопасности"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Gauge className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Компьютерная диагностика
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Точная диагностика - основа качественного ремонта. 
              Современное оборудование и опытные специалисты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="w-5 h-5 mr-2" />
                Записаться на диагностику
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-700">
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды диагностики
            </h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий тип диагностики для вашего автомобиля
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {diagnosticTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-4">{type.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{type.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {type.includes.map((item, idx) => (
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

      {/* Systems We Check */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Диагностируемые системы
            </h2>
            <p className="text-xl text-gray-600">
              Проверяем все основные системы вашего автомобиля
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Преимущества нашей диагностики
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-600" />
                    Точность результатов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Используем профессиональное оборудование ведущих мировых производителей. 
                    Точность диагностики составляет 99%.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-blue-600" />
                    Быстрое выполнение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Экспресс-диагностика за 30 минут. Комплексная проверка - до 3 часов. 
                    Результаты сразу после завершения.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
                    Подробный отчет
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Получите детальный отчет с описанием всех найденных проблем, 
                    рекомендациями по ремонту и примерной стоимостью.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                    Бесплатная при ремонте
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    При заказе ремонта на сумму от 10 000 рублей диагностика 
                    предоставляется бесплатно.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Запишитесь на диагностику сегодня
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Выявим все проблемы и предложим оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Онлайн запись
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diagnostics;