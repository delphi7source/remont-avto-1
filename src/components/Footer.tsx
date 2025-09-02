import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">АвтоСервис</h3>
                <p className="text-gray-400 text-sm">Профессиональный ремонт</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Более 15 лет опыта в ремонте и обслуживании автомобилей. 
              Качественный сервис и гарантия на все работы.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li><Link to="/engine-repair" className="text-gray-400 hover:text-white transition-colors">Ремонт двигателя</Link></li>
              <li><Link to="/transmission" className="text-gray-400 hover:text-white transition-colors">Трансмиссия</Link></li>
              <li><Link to="/brake-system" className="text-gray-400 hover:text-white transition-colors">Тормозная система</Link></li>
              <li><Link to="/suspension" className="text-gray-400 hover:text-white transition-colors">Подвеска</Link></li>
              <li><Link to="/electrical" className="text-gray-400 hover:text-white transition-colors">Электрика</Link></li>
              <li><Link to="/air-conditioning" className="text-gray-400 hover:text-white transition-colors">Кондиционер</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Информация</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Наша команда</Link></li>
              <li><Link to="/certificates" className="text-gray-400 hover:text-white transition-colors">Сертификаты</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-white transition-colors">Гарантия</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white">+7 (495) 123-45-67</p>
                  <p className="text-gray-400 text-sm">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white">info@autoservice.ru</p>
                  <p className="text-gray-400 text-sm">Ответим в течение часа</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white">Москва, ул. Автомобильная, 123</p>
                  <p className="text-gray-400 text-sm">Рядом с метро</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white">Пн-Пт: 8:00-20:00</p>
                  <p className="text-gray-400 text-sm">Сб-Вс: 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 АвтоСервис. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;