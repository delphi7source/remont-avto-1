import React from 'react';
import { 
  Users, 
  Award, 
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Александр Петров",
      position: "Главный механик",
      experience: "15 лет",
      specialization: "Двигатели, диагностика",
      achievements: ["Сертификат BMW", "Мастер года 2023"],
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Михаил Сидоров", 
      position: "Автоэлектрик",
      experience: "12 лет",
      specialization: "Электрооборудование, мультимедиа",
      achievements: ["Сертификат Bosch", "Эксперт по электрике"],
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Дмитрий Козлов",
      position: "Специалист по подвеске",
      experience: "10 лет", 
      specialization: "Ходовая часть, развал-схождение",
      achievements: ["Сертификат Monroe", "Лучший мастер 2022"],
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Сергей Волков",
      position: "Мастер по кузову",
      experience: "8 лет",
      specialization: "Кузовной ремонт, покраска",
      achievements: ["Сертификат PPG", "Мастер покраски"],
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const stats = [
    { number: "20+", label: "специалистов" },
    { number: "150+", label: "лет общего опыта" },
    { number: "50+", label: "сертификатов" },
    { number: "5000+", label: "довольных клиентов" }
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
              Наша команда
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Профессиональные мастера с многолетним опытом работы
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
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ключевые специалисты
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-blue-600">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Опыт: </span>
                      <span className="text-gray-700">{member.experience}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Специализация: </span>
                      <span className="text-gray-700">{member.specialization}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Достижения:</span>
                      <ul className="mt-2 space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            Доверьте свой автомобиль профессионалам
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Наша команда готова решить любые проблемы с вашим автомобилем
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Связаться с мастером
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;