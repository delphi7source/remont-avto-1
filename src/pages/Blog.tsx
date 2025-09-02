import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  User,
  ArrowRight,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "Как подготовить автомобиль к зиме",
      excerpt: "Полное руководство по подготовке автомобиля к зимнему сезону. Что нужно проверить и заменить.",
      date: "15 января 2025",
      author: "Александр Петров",
      category: "Советы",
      readTime: "5 мин",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Признаки износа тормозных колодок",
      excerpt: "Как понять, что пора менять тормозные колодки. Основные признаки и рекомендации по замене.",
      date: "12 января 2025",
      author: "Михаил Сидоров",
      category: "Безопасность",
      readTime: "3 мин",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Экономия топлива: практические советы",
      excerpt: "Простые способы снизить расход топлива без ущерба для комфорта и безопасности.",
      date: "10 января 2025",
      author: "Дмитрий Козлов",
      category: "Экономия",
      readTime: "4 мин",
      image: "https://images.pexels.com/photos/4480464/pexels-photo-4480464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Диагностика двигателя: что нужно знать",
      excerpt: "Основы компьютерной диагностики двигателя. Как читать коды ошибок и что они означают.",
      date: "8 января 2025",
      author: "Сергей Волков",
      category: "Диагностика",
      readTime: "6 мин",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Уход за кондиционером автомобиля",
      excerpt: "Как правильно обслуживать кондиционер, чтобы он служил долго и эффективно.",
      date: "5 января 2025",
      author: "Александр Петров",
      category: "Обслуживание",
      readTime: "4 мин",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Выбор моторного масла: гид покупателя",
      excerpt: "Как выбрать правильное моторное масло для вашего автомобиля. Типы масел и их особенности.",
      date: "2 января 2025",
      author: "Михаил Сидоров",
      category: "Советы",
      readTime: "7 мин",
      image: "https://images.pexels.com/photos/4480464/pexels-photo-4480464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const categories = ["Все", "Советы", "Безопасность", "Экономия", "Диагностика", "Обслуживание"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Блог автосервиса
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Полезные советы, рекомендации и новости из мира автомобилей
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${index + 1}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-purple-600" />
                      <span className="text-purple-600 text-sm">{post.category}</span>
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="w-full mt-4">
                    <Link to={`/blog/${index + 1}`}>
                      Читать далее <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Подпишитесь на наш блог
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Получайте полезные советы и новости прямо на почту
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Ваш email..."
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;