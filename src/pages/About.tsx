import React from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Star,
  Target,
  Heart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { number: "15+", label: "лет на рынке", icon: <Clock className="w-8 h-8 text-blue-600" /> },
    { number: "5000+", label: "довольных клиентов", icon: <Users className="w-8 h-8 text-blue-600" /> },
    { number: "50+", label: "марок автомобилей", icon: <Award className="w-8 h-8 text-blue-600" /> },
    { number: "99%", label: "положительных отзывов", icon: <Star className="w-8 h-8 text-blue-600" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Качество",
      description: "Используем только оригинальные запчасти и современное оборудование"
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Забота",
      description: "Относимся к каждому автомобилю как к своему собственному"
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Точность",
      description: "Точная диагностика и профессиональное выполнение работ"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: "Надежность",
      description: "Гарантируем качество и несем ответственность за результат"
    }
  ];

  const achievements = [
    "Сертифицированный партнер ведущих производителей запчастей",
    "Лауреат премии 'Лучший автосервис Москвы 2023'",
    "Член ассоциации автосервисов России",
    "ISO 9001:2015 - система менеджмента качества",
    "Более 100 положительных отзывов на Яндекс.Картах",
    "Рейтинг 4.9/5 на всех площадках отзывов"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              О нашей компании
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              15 лет опыта в автомобильном сервисе. Профессионализм, качество, надежность.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Компания "АвтоСервис" была основана в 2009 году группой энтузиастов автомобильного дела. 
                Начав с небольшой мастерской, мы постепенно развивались, расширяли спектр услуг и 
                совершенствовали качество обслуживания.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Сегодня мы - один из ведущих автосервисов Москвы, оснащенный современным оборудованием 
                и укомплектованный высококвалифицированными специалистами. Наша команда состоит из 
                мастеров с многолетним опытом работы, регулярно проходящих обучение и сертификацию.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Мы гордимся тем, что за годы работы заслужили доверие тысяч автовладельцев. 
                Наша миссия - обеспечить безопасность и надежность вашего автомобиля, 
                предоставляя услуги высочайшего качества по справедливым ценам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Наши достижения
              </h2>
              <p className="text-xl text-gray-600">
                Признание профессионального сообщества и клиентов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-800">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Наша миссия
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Обеспечить каждому автовладельцу доступ к качественному и честному автосервису. 
              Мы стремимся сделать обслуживание автомобилей максимально прозрачным, удобным и надежным, 
              используя передовые технологии и лучшие практики отрасли.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;