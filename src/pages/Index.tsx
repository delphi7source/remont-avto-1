import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Car, 
  Shield, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт всех типов двигателей",
      link: "/engine-repair"
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Кузовной ремонт",
      description: "Восстановление после ДТП, покраска, рихтовка",
      link: "/body-repair"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля",
      link: "/diagnostics"
    }
  ];

  const infoSections = [
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Быстрое обслуживание",
      description: "Экспресс-диагностика за 30 минут. Большинство работ выполняем в день обращения.",
      stats: "Средний срок ремонта: 2-3 дня"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Опытные мастера",
      description: "Команда сертифицированных специалистов с опытом работы более 10 лет.",
      stats: "15+ лет на рынке"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ и используемые запчасти.",
      stats: "Гарантия до 2 лет"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: "Оригинальные запчасти",
      description: "Работаем только с проверенными поставщиками оригинальных запчастей.",
      stats: "1000+ наименований в наличии"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Высокие рейтинги",
      description: "Более 500 положительных отзывов от довольных клиентов.",
      stats: "4.9/5 средняя оценка"
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Все марки авто",
      description: "Обслуживаем автомобили всех марок: отечественные, европейские, азиатские.",
      stats: "50+ марок автомобилей"
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Современное оборудование",
      description: "Используем новейшее диагностическое и ремонтное оборудование.",
      stats: "Обновление оборудования каждый год"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Страхование работ",
      description: "Все работы застрахованы. Возмещение ущерба в случае нашей ошибки.",
      stats: "Страховое покрытие до 1 млн руб"
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: "Круглосуточная поддержка",
      description: "Консультации и экстренная помощь на дороге 24/7.",
      stats: "Выезд в течение 30 минут"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Удобный график",
      description: "Работаем без выходных. Возможность записи на удобное время.",
      stats: "Пн-Вс: 8:00-22:00"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Профессиональный автосервис в Москве
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Качественный ремонт и обслуживание автомобилей всех марок. 
              Гарантия на все работы. Опыт более 15 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/appointment">Записаться на ремонт</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-blue-900">
                <Link to="/diagnostics">Бесплатная диагностика</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Основные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>
                      Подробнее <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              10 причин доверить свой автомобиль нашему сервису
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {section.icon}
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {section.description}
                  </CardDescription>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-semibold text-sm">
                      {section.stats}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы доверить нам свой автомобиль?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Запишитесь на диагностику прямо сейчас и получите скидку 10%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить сейчас
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

export default Index;