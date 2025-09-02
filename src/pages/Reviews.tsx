import React from 'react';
import { 
  Star, 
  User, 
  Phone,
  MessageCircle,
  ThumbsUp,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      date: "15 января 2025",
      service: "Ремонт двигателя",
      text: "Отличный сервис! Быстро диагностировали проблему, объяснили что нужно делать. Ремонт выполнили качественно, в срок. Рекомендую!",
      car: "BMW X5 2018"
    },
    {
      name: "Мария К.",
      rating: 5,
      date: "12 января 2025", 
      service: "ТО",
      text: "Прохожу ТО только здесь уже 3 года. Всегда довольна качеством работ и отношением персонала. Цены адекватные.",
      car: "Toyota Camry 2020"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      date: "8 января 2025",
      service: "Кузовной ремонт",
      text: "После ДТП обратился сюда по рекомендации. Восстановили машину идеально, даже лучше чем было. Спасибо мастерам!",
      car: "Audi A4 2019"
    },
    {
      name: "Елена С.",
      rating: 4,
      date: "5 января 2025",
      service: "Диагностика",
      text: "Быстро нашли причину странных звуков. Диагностика заняла всего час. Объяснили все понятно, дали рекомендации.",
      car: "Hyundai Solaris 2021"
    },
    {
      name: "Игорь В.",
      rating: 5,
      date: "2 января 2025",
      service: "Замена тормозов",
      text: "Заменили колодки и диски. Работу выполнили аккуратно, убрали за собой. Тормоза работают отлично!",
      car: "Volkswagen Polo 2017"
    },
    {
      name: "Анна Л.",
      rating: 5,
      date: "28 декабря 2024",
      service: "Ремонт подвески",
      text: "Машина стала ездить как новая! Заменили амортизаторы и сделали развал-схождение. Очень довольна результатом.",
      car: "Kia Rio 2019"
    }
  ];

  const stats = [
    { number: "4.9", label: "Средняя оценка", icon: <Star className="w-8 h-8 text-yellow-500" /> },
    { number: "500+", label: "Отзывов", icon: <MessageCircle className="w-8 h-8 text-blue-600" /> },
    { number: "98%", label: "Рекомендуют", icon: <ThumbsUp className="w-8 h-8 text-green-600" /> }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Отзывы клиентов
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Мнения наших клиентов - лучшая реклама нашей работы
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Последние отзывы
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-8 h-8 text-gray-400" />
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.car}</CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{review.date}</span>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {review.service}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Станьте нашим довольным клиентом
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Присоединяйтесь к сотням довольных автовладельцев
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться на обслуживание
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;