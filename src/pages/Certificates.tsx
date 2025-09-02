import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Phone,
  Shield,
  Star,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Certificates = () => {
  const certificates = [
    {
      title: "ISO 9001:2015",
      description: "Система менеджмента качества",
      issuer: "Международная организация по стандартизации",
      year: "2023",
      validity: "До 2026 года"
    },
    {
      title: "Сертификат Bosch",
      description: "Авторизованный сервисный центр",
      issuer: "Robert Bosch GmbH",
      year: "2023",
      validity: "До 2025 года"
    },
    {
      title: "Партнер BMW",
      description: "Официальный партнер по обслуживанию",
      issuer: "BMW Group",
      year: "2022",
      validity: "До 2025 года"
    },
    {
      title: "Лицензия на ремонт",
      description: "Лицензия на техническое обслуживание",
      issuer: "Министерство транспорта РФ",
      year: "2023",
      validity: "Бессрочная"
    }
  ];

  const achievements = [
    {
      title: "Лучший автосервис Москвы 2023",
      organization: "Ассоциация автосервисов России",
      description: "Награда за высокое качество обслуживания клиентов"
    },
    {
      title: "Премия 'Доверие потребителей'",
      organization: "Роскачество",
      description: "За честность и прозрачность в работе с клиентами"
    },
    {
      title: "Сертификат экологической безопасности",
      organization: "Росприроднадзор",
      description: "За соблюдение экологических стандартов"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Сертификаты и лицензии
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              Официальные документы, подтверждающие нашу квалификацию
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сертификаты качества
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-yellow-600" />
                    <div>
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription className="text-base">{cert.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Выдан: </span>
                      <span className="text-gray-700">{cert.issuer}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Год получения: </span>
                      <span className="text-gray-700">{cert.year}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Действителен: </span>
                      <span className="text-gray-700">{cert.validity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Награды и достижения
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-blue-600">
                    {achievement.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificates;