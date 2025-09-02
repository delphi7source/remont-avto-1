import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  CheckCircle, 
  Clock, 
  Shield, 
  Phone,
  ArrowRight,
  AlertTriangle,
  Gauge
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EngineRepair = () => {
  const repairTypes = [
    {
      title: "Капитальный ремонт",
      description: "Полная разборка и восстановление двигателя",
      price: "от 80 000 ₽",
      duration: "7-14 дней",
      includes: [
        "Замена поршневой группы",
        "Шлифовка коленвала",
        "Ремонт ГБЦ",
        "Замена всех прокладок",
        "Регулировка клапанов",
        "Балансировка"
      ]
    },
    {
      title: "Текущий ремонт",
      description: "Устранение конкретных неисправностей",
      price: "от 15 000 ₽",
      duration: "1-3 дня",
      includes: [
        "Замена прокладок",
        "Ремонт системы охлаждения",
        "Замена ремня ГРМ",
        "Регулировка клапанов",
        "Замена масла и фильтров"
      ]
    },
    {
      title: "Диагностика двигателя",
      description: "Комплексная проверка состояния",
      price: "от 2 000 ₽",
      duration: "2-4 часа",
      includes: [
        "Компьютерная диагностика",
        "Измерение компрессии",
        "Проверка системы зажигания",
        "Анализ выхлопных газов",
        "Эндоскопия цилиндров"
      ]
    }
  ];

  const commonProblems = [
    {
      problem: "Перегрев двигателя",
      symptoms: ["Высокая температура", "Пар из-под капота", "Потеря охлаждающей жидкости"],
      urgency: "Критично"
    },
    {
      problem: "Стук в двигателе",
      symptoms: ["Металлический стук", "Снижение мощности", "Повышенный расход масла"],
      urgency: "Высокая"
    },
    {
      problem: "Дымление",
      symptoms: ["Синий дым", "Белый дым", "Черный дым"],
      urgency: "Средняя"
    },
    {
      problem: "Нестабильная работа",
      symptoms: ["Троение", "Плавающие обороты", "Глохнет на холостых"],
      urgency: "Средняя"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ремонт двигателей
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Профессиональный ремонт двигателей любой сложности. 
              Гарантия качества и надежности.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Записаться на диагностику
            </Button>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды ремонта двигателя
            </h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий тип обслуживания
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {repairTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{type.title}</CardTitle>
                  <CardDescription className="text-center text-base">
                    {type.description}
                  </CardDescription>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{type.price}</div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {type.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы двигателя
            </h2>
            <p className="text-xl text-gray-600">
              Признаки неисправностей и их срочность
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonProblems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.problem}</CardTitle>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.urgency === 'Критично' ? 'bg-red-100 text-red-800' :
                      item.urgency === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.urgency}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                    Симптомы:
                  </h4>
                  <ul className="space-y-2">
                    {item.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Процесс ремонта
            </h2>
          </div>
          
          <Tabs defaultValue="diagnosis" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="diagnosis">Диагностика</TabsTrigger>
              <TabsTrigger value="estimate">Смета</TabsTrigger>
              <TabsTrigger value="repair">Ремонт</TabsTrigger>
              <TabsTrigger value="testing">Тестирование</TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagnosis" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="w-6 h-6 mr-3 text-blue-600" />
                    Комплексная диагностика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Проводим полную диагностику двигателя с использованием современного оборудования:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Компьютерная диагностика ошибок</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Измерение компрессии в цилиндрах</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Проверка системы зажигания</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Анализ состояния масла</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="estimate" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-600" />
                    Прозрачная смета
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    После диагностики составляем детальную смету с указанием:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Стоимости работ по каждой позиции</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Цен на необходимые запчасти</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Сроков выполнения работ</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Гарантийных обязательств</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="repair" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="w-6 h-6 mr-3 text-blue-600" />
                    Качественный ремонт
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Выполняем ремонт с соблюдением всех технологических требований:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Использование оригинальных запчастей</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Соблюдение моментов затяжки</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Контроль качества на каждом этапе</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Фотоотчет о проделанной работе</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="testing" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="w-6 h-6 mr-3 text-blue-600" />
                    Контрольное тестирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    После ремонта проводим полное тестирование двигателя:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Проверка на холостом ходу</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Тест-драйв</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Контроль температурного режима</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Финальная диагностика</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Стоимость услуг
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {repairTypes.map((type, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">{type.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{type.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {type.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
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

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Экстренный ремонт двигателя
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Если двигатель заглох или работает нестабильно - звоните немедленно!
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Экстренный вызов: +7 (495) 123-45-67
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngineRepair;