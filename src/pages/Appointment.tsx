import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Car, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    carModel: '',
    year: '',
    service: '',
    date: '',
    time: '',
    description: ''
  });

  const services = [
    "Диагностика",
    "Ремонт двигателя",
    "Ремонт трансмиссии",
    "Ремонт подвески",
    "Тормозная система",
    "Электрооборудование",
    "Кондиционер",
    "ТО",
    "Кузовной ремонт",
    "Другое"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Запись на обслуживание
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Выберите удобное время и запишитесь на ремонт или диагностику
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Форма записи</CardTitle>
                    <CardDescription>
                      Заполните форму, и мы свяжемся с вами для подтверждения записи
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Ваше имя"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+7 (___) ___-__-__"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Car Info */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="carMake">Марка авто *</Label>
                          <Input
                            id="carMake"
                            value={formData.carMake}
                            onChange={(e) => setFormData({...formData, carMake: e.target.value})}
                            placeholder="Toyota, BMW, Lada..."
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="carModel">Модель *</Label>
                          <Input
                            id="carModel"
                            value={formData.carModel}
                            onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                            placeholder="Camry, X5, Granta..."
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="year">Год выпуска</Label>
                          <Input
                            id="year"
                            value={formData.year}
                            onChange={(e) => setFormData({...formData, year: e.target.value})}
                            placeholder="2020"
                          />
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <Label htmlFor="service">Тип услуги *</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Date and Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Предпочтительная дата *</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Время</Label>
                          <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <Label htmlFor="description">Описание проблемы</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          placeholder="Опишите симптомы или проблемы с автомобилем..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      Контакты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-blue-600">+7 (495) 123-45-67</p>
                    </div>
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-blue-600">info@autoservice.ru</p>
                    </div>
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p>Москва, ул. Автомобильная, 123</p>
                    </div>
                    <div>
                      <p className="font-semibold">Режим работы:</p>
                      <p>Пн-Пт: 8:00-20:00</p>
                      <p>Сб-Вс: 9:00-18:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      Время ожидания
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Мы перезвоним вам в течение 15 минут для подтверждения записи 
                      и уточнения деталей.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="w-5 h-5 mr-2 text-blue-600" />
                      Что взять с собой
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Документы на автомобиль</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Водительское удостоверение</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Сервисную книжку (если есть)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;