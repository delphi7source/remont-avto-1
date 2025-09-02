import React from 'react';
import { 
  Package, 
  CheckCircle, 
  Phone,
  Search,
  Truck,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Parts = () => {
  const partCategories = [
    {
      title: "Двигатель",
      items: ["Поршни", "Кольца", "Прокладки", "Ремни", "Фильтры"],
      brands: ["Mahle", "Febi", "Gates"]
    },
    {
      title: "Трансмиссия", 
      items: ["Сцепление", "Масла", "Фильтры", "Синхронизаторы"],
      brands: ["LuK", "Sachs", "ZF"]
    },
    {
      title: "Подвеска",
      items: ["Амортизаторы", "Пружины", "Сайлентблоки", "Шаровые"],
      brands: ["Monroe", "KYB", "Lemforder"]
    },
    {
      title: "Тормоза",
      items: ["Колодки", "Диски", "Суппорты", "Жидкости"],
      brands: ["Brembo", "ATE", "Bosch"]
    },
    {
      title: "Электрика",
      items: ["Аккумуляторы", "Генераторы", "Стартеры", "Лампы"],
      brands: ["Bosch", "Valeo", "Hella"]
    },
    {
      title: "Расходники",
      items: ["Масла", "Фильтры", "Свечи", "Жидкости"],
      brands: ["Castrol", "Mobil", "NGK"]
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Оригинальные запчасти",
      description: "Работаем только с официальными поставщиками"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Быстрая доставка",
      description: "Доставка в день заказа или на следующий день"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Гарантия качества",
      description: "Гарантия на все запчасти от 6 месяцев до 2 лет"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Package className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Запчасти для автомобилей
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Оригинальные запчасти для всех марок автомобилей
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                placeholder="Поиск запчастей..." 
                className="bg-white text-gray-900"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Категории запчастей
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Запчасти:</h4>
                    <ul className="space-y-1">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Бренды:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map((brand, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">
                    Посмотреть каталог
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {advantage.description}
                  </CardDescription>
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
            Нужны запчасти?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Поможем подобрать и доставим в кратчайшие сроки
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="w-5 h-5 mr-2" />
            Заказать запчасти
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parts;