import React from 'react';
import { 
  Cog, 
  CheckCircle, 
  Clock, 
  Phone,
  AlertTriangle,
  Wrench,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Transmission = () => {
  const transmissionTypes = [
    {
      title: "МКПП",
      description: "Механическая коробка передач",
      services: [
        "Замена сцепления",
        "Ремонт синхронизаторов", 
        "Замена масла",
        "Регулировка привода"
      ],
      price: "от 8 000 ₽"
    },
    {
      title: "АКПП",
      description: "Автоматическая коробка передач",
      services: [
        "Замена масла и фильтра",
        "Ремонт гидроблока",
        "Замена соленоидов",
        "Адаптация"
      ],
      price: "от 15 000 ₽"
    },
    {
      title: "Вариатор",
      description: "Бесступенчатая трансмиссия",
      services: [
        "Замена ремня/цепи",
        "Ремонт конусов",
        "Замена масла",
        "Калибровка"
      ],
      price: "от 20 000 ₽"
    }
  ];

  const commonProblems = [
    {
      problem: "Пробуксовка сцепления",
      symptoms: ["Двигатель ревет, а машина не едет", "Запах гари", "Высокие обороты"],
      solution: "Замена диска сцепления"
    },
    {
      problem: "Толчки при переключении",
      symptoms: ["Рывки при смене передач", "Задержка включения", "Странные звуки"],
      solution: "Замена масла или ремонт АКПП"
    },
    {
      problem: "Не включаются передачи",
      symptoms: ["Передача не включается", "Хруст при переключении", "Выбивает передачу"],
      solution: "Ремонт синхронизаторов или сцепления"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cog className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ремонт трансмиссии
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Профессиональный ремонт МКПП, АКПП, вариаторов и сцепления
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Записаться на диагностику
            </Button>
          </div>
        </div>
      </section>

      {/* Transmission Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Типы трансмиссий
            </h2>
            <p className="text-xl text-gray-600">
              Работаем со всеми типами коробок передач
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transmissionTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Cog className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                  <div className="text-2xl font-bold text-purple-600 mt-4">{type.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {type.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Заказать ремонт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Процесс обслуживания
            </h2>
          </div>
          
          <Tabs defaultValue="diagnosis" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="diagnosis">Диагностика</TabsTrigger>
              <TabsTrigger value="disassembly">Разборка</TabsTrigger>
              <TabsTrigger value="repair">Ремонт</TabsTrigger>
              <TabsTrigger value="assembly">Сборка</TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagnosis" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-purple-600" />
                    Диагностика трансмиссии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Компьютерная диагностика блоков управления</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Проверка уровня и состояния масла</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Тест-драйв с анализом переключений</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Проверка сцепления (для МКПП)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="disassembly" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="w-6 h-6 mr-3 text-purple-600" />
                    Разборка и дефектовка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Аккуратная разборка с маркировкой деталей</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Дефектовка всех компонентов</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Составление списка необходимых запчастей</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Согласование стоимости ремонта</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="repair" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cog className="w-6 h-6 mr-3 text-purple-600" />
                    Ремонт и замена деталей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Замена изношенных деталей</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Восстановление рабочих поверхностей</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Замена уплотнений и прокладок</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Использование оригинальных запчастей</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assembly" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-purple-600" />
                    Сборка и настройка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Сборка с соблюдением моментов затяжки</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Заливка нового масла</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Адаптация и калибровка (для АКПП)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Контрольный тест-драйв</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы трансмиссии
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commonProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                    {problem.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Симптомы:</h4>
                    <ul className="space-y-1">
                      {problem.symptoms.map((symptom, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium text-sm">
                      Решение: {problem.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Проблемы с коробкой передач?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Не откладывайте ремонт - это может привести к серьезным поломкам
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Записаться на диагностику
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transmission;