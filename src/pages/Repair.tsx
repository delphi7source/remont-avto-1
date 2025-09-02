import React from 'react';
import { 
  Wrench, 
  CheckCircle, 
  Phone,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Repair = () => {
  const repairServices = [
    {
      title: "Экспресс-ремонт",
      description: "Быстрое устранение мелких неисправностей",
      price: "от 1 000 ₽",
      duration: "30 мин - 2 часа",
      examples: ["Замена лампочек", "Замена предохранителей", "Мелкий ремонт проводки"]
    },
    {
      title: "Плановый ремонт",
      description: "Замена изношенных деталей",
      price: "от 5 000 ₽", 
      duration: "1-3 дня",
      examples: ["Замена тормозных колодок", "Ремонт подвески", "Замена ремней"]
    },
    {
      title: "Капитальный ремонт",
      description: "Серьезные поломки и восстановление",
      price: "от 25 000 ₽",
      duration: "5-14 дней",
      examples: ["Ремонт двигателя", "Ремонт АКПП", "Кузовной ремонт"]
    }
  ];

  const guarantees = [
    "Гарантия на работы до 2 лет",
    "Гарантия на запчасти от производителя", 
    "Бесплатное устранение дефектов",
    "Страхование ответственности",
    "Возврат денег при неудовлетворительном результате"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ремонт автомобилей
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Профессиональный ремонт любой сложности с гарантией качества
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды ремонта
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-4">{service.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Примеры работ:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{example}</span>
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

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши гарантии
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужен качественный ремонт?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Доверьте свой автомобиль профессионалам
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться сейчас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Repair;