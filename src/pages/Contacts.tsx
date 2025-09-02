import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Car,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Телефон",
      primary: "+7 (495) 123-45-67",
      secondary: "Круглосуточно",
      description: "Основной номер для записи и консультаций"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Экстренная помощь",
      primary: "+7 (495) 987-65-43",
      secondary: "24/7",
      description: "Эвакуатор и выездная диагностика"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email",
      primary: "info@autoservice.ru",
      secondary: "Ответим в течение часа",
      description: "Для вопросов и предложений"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Адрес",
      primary: "Москва, ул. Автомобильная, 123",
      secondary: "м. Автозаводская (5 мин пешком)",
      description: "Удобная парковка на 20 мест"
    }
  ];

  const workingHours = [
    { day: "Понедельник", hours: "8:00 - 20:00" },
    { day: "Вторник", hours: "8:00 - 20:00" },
    { day: "Среда", hours: "8:00 - 20:00" },
    { day: "Четверг", hours: "8:00 - 20:00" },
    { day: "Пятница", hours: "8:00 - 20:00" },
    { day: "Суббота", hours: "9:00 - 18:00" },
    { day: "Воскресенье", hours: "9:00 - 18:00" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Контакты
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg text-gray-900 mb-1">{contact.primary}</p>
                  <p className="text-sm text-gray-600 mb-3">{contact.secondary}</p>
                  <p className="text-gray-700">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Написать нам
                </CardTitle>
                <CardDescription>
                  Оставьте сообщение, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Тема сообщения" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Ваше сообщение..." 
                      rows={5}
                    />
                  </div>
                  <Button className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-blue-600" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-700">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      Экстренная помощь и эвакуатор - круглосуточно!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* How to Find Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="w-6 h-6 mr-3 text-blue-600" />
                    Как нас найти
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">На общественном транспорте:</h4>
                      <p className="text-gray-700">
                        Метро "Автозаводская", выход №2, далее 5 минут пешком по ул. Автомобильная
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">На автомобиле:</h4>
                      <p className="text-gray-700">
                        Бесплатная парковка на 20 мест. Въезд с ул. Автомобильная, дом 123
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                      <Car className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-800 text-sm">
                        Удобный подъезд для любых типов автомобилей
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Мы на карте
            </h2>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-500" />
              <p className="text-gray-600 text-lg">
                Интерактивная карта
              </p>
              <p className="text-gray-500">
                Москва, ул. Автомобильная, 123
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Экстренная помощь на дороге
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Если ваш автомобиль сломался - мы приедем и поможем!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Вызвать эвакуатор
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
              Выездная диагностика
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;