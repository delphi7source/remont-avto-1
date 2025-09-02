import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  Phone,
  Clock,
  FileText,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Warranty = () => {
  const warrantyTypes = [
    {
      title: "Гарантия на работы",
      duration: "до 24 месяцев",
      description: "На все виды ремонтных работ",
      coverage: [
        "Качество выполненных работ",
        "Правильность сборки/разборки",
        "Соблюдение технологии",
        "Настройки и регулировки"
      ]
    },
    {
      title: "Гарантия на запчасти",
      duration: "от 6 до 36 месяцев",
      description: "В зависимости от производителя",
      coverage: [
        "Заводские дефекты",
        "Преждевременный износ",
        "Несоответствие характеристикам",
        "Брак материалов"
      ]
    },
    {
      title: "Расширенная гарантия",
      duration: "до 60 месяцев",
      description: "Для премиум-клиентов",
      coverage: [
        "Все виды работ и запчастей",
        "Приоритетное обслуживание",
        "Бесплатная диагностика",
        "Скидки на дополнительные услуги"
      ]
    }
  ];

  const warrantyConditions = [
    "Соблюдение регламента технического обслуживания",
    "Использование рекомендованных масел и жидкостей",
    "Своевременное обращение при появлении проблем",
    "Сохранение гарантийных документов",
    "Обслуживание только в нашем сервисе в гарантийный период"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Гарантийные обязательства
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Мы гарантируем качество всех выполненных работ и установленных запчастей
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды гарантий
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${index === 2 ? 'ring-2 ring-green-500' : ''}`}>
                {index === 2 && (
                  <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
                    Премиум
                  </div>
                )}
                <CardHeader className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <CardTitle className="text-2xl">{warranty.title}</CardTitle>
                  <div className="text-2xl font-bold text-green-600">{warranty.duration}</div>
                  <CardDescription className="text-base">{warranty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Покрывает:</h4>
                  <ul className="space-y-2">
                    {warranty.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Условия гарантии
              </h2>
              <p className="text-xl text-gray-600">
                Для сохранения гарантии необходимо соблюдать следующие условия
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-green-600" />
                  Гарантийные условия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {warrantyConditions.map((condition, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Важно знать:</h4>
                      <p className="text-yellow-700">
                        Гарантия не распространяется на повреждения, вызванные неправильной эксплуатацией, 
                        ДТП, воздействием внешних факторов или самостоятельным ремонтом.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Вопросы по гарантии?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Наши специалисты проконсультируют по всем гарантийным вопросам
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Консультация по гарантии
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;