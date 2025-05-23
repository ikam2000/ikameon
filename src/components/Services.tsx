import React from 'react';
import { Check, Zap, LineChart, Star } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  icon: Icon
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105
      ${isPopular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}
    `}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
          Популярный
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-3">
            <Icon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== 'По запросу' && <span className="text-gray-600"> ₽/мес</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`
          w-full py-3 rounded-md font-medium transition-colors
          ${isPopular 
            ? 'bg-blue-700 hover:bg-blue-800 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-blue-700 border border-blue-700'}
        `}>
          Заказать
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Старт',
      price: '25 000',
      description: 'Настройка рекламной кампании «под ключ» для быстрого запуска.',
      icon: Zap,
      features: [
        'Анализ конкурентов',
        'Настройка Яндекс.Директ или Google Ads',
        'Создание объявлений (до 50 шт.)',
        'Базовая аналитика',
        'Отчет о результатах через 30 дней'
      ],
      isPopular: false
    },
    {
      title: 'Оптимизация',
      price: '45 000',
      description: 'Увеличение ROI существующей рекламы для максимального результата.',
      icon: LineChart,
      features: [
        'Полный аудит текущих кампаний',
        'Оптимизация ставок и ключевых слов',
        'A/B тестирование объявлений',
        'Расширенная аналитика конверсий',
        'Еженедельная отчетность',
        'Рекомендации по улучшению сайта'
      ],
      isPopular: true
    },
    {
      title: 'VIP',
      price: 'По запросу',
      description: 'Полное сопровождение и комплексная стратегия для достижения целей бизнеса.',
      icon: Star,
      features: [
        'Разработка рекламной стратегии',
        'Настройка всех рекламных каналов',
        'Ежедневная оптимизация',
        'Доступ к рекламному кабинету 24/7',
        'Интеграция с CRM',
        'Расширенная аналитика и дашборды',
        'Персональный менеджер'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тариф для достижения ваших бизнес-целей через контекстную рекламу
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 bg-blue-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Дополнительные услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">Аудит рекламных кампаний</h4>
              <p className="text-gray-600">Полный анализ эффективности ваших текущих рекламных кампаний</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">SEO-контекст</h4>
              <p className="text-gray-600">Комплексная стратегия для органического и платного трафика</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">Таргет B2B/B2C</h4>
              <p className="text-gray-600">Специализированные кампании для разных бизнес-моделей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;