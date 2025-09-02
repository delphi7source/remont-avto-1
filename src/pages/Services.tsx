import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Car, 
  Cog, 
  Zap, 
  Thermometer, 
  Gauge,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт двигателей всех типов",
      services: ["Замена поршневой группы", "Ремонт ГБЦ", "Замена прокладок", "Регулировка клапанов"],
      price: "от 15 000 ₽",
      link: "/engine-repair"
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-600" />,
      title: "Трансмиссия",
      description: "Ремонт и обслуживание коробок передач",
      services: ["МКПП", "АКПП", "Вариатор", "Сцепление"],
      price: "от 8 000 ₽",
      link: "/transmission"
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Подвеска",
      description: "Диагностика и ремонт ходовой части",
      services: ["Амортизаторы", "Пружины", "Стойки", "Сайлентблоки"],
      price: "от 3 000 ₽",
      link: "/suspension"
    },
    {
      icon: <Gauge className="w-12 h-12 text-blue-600" />,
      title: "Тормозная система",
      description: "Обслуживание и ремонт тормозов",
      services: ["Колодки", "Диски", "Суппорты", "Тормозная жидкость"],
      price: "от 2 500 ₽",
      link: "/brake-system"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Электрика",
      description: "Диагностика и ремонт электрооборудования",
      services: ["Генератор", "Стартер", "Проводка", "Сигнализация"],
      price: "от 1 500 ₽",
      link: "/electrical"
    },
    {
      icon: <Thermometer className="w-12 h-12 text-blue-600" />,
      title: "Кондиционер",
      description: "Обслуживание климатических систем",
      services: ["Заправка фреоном", "Чистка радиатора", "Замена фильтра", "Диагностика"],
      price: "от 2 000 ₽",
      link: "/air-conditioning"
    }
  ];

  const advantages = [
    "Гарантия на все работы до 2 лет",
    "Оригинальные запчасти",
    "Современное оборудование",
    "Опытные мастера",
    "Прозрачное ценообразование",
    "Бесплатная диагностика при ремонте"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Полный спектр автомобильных услуг
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              От диагностики до капитального ремонта - все под одной крышей
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {category.icon}
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <div className="text-2xl font-bold text-blue-600 mt-2">
                        {category.price}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={category.link}>
                      Подробнее <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Наши специалисты ответят на все вопросы и помогут выбрать оптимальное решение
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;