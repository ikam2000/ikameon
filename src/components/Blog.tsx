import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 ошибок в Яндекс.Директ, которые съедают ваш бюджет',
    excerpt: 'Разбираем типичные ошибки, которые допускают рекламодатели и как их избежать для экономии бюджета и повышения эффективности.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '10 мая 2024',
    readTime: '7 мин'
  },
  {
    id: 2,
    title: 'Как правильно считать ROI контекстной рекламы',
    excerpt: 'Прозрачная методика расчета окупаемости инвестиций в рекламу, которая позволит вам точно оценить эффективность ваших кампаний.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '25 апреля 2024',
    readTime: '10 мин'
  },
  {
    id: 3,
    title: 'Google Ads vs Яндекс.Директ: что выбрать в 2024',
    excerpt: 'Сравнение двух главных платформ контекстной рекламы. Особенности, преимущества и недостатки каждой для разных типов бизнеса.',
    image: 'https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '12 апреля 2024',
    readTime: '9 мин'
  }
];

const guides = [
  {
    title: 'Базовая настройка Яндекс.Директ',
    downloads: 450
  },
  {
    title: 'Чек-лист эффективной рекламы',
    downloads: 670
  },
  {
    title: 'Гайд по A/B тестированию объявлений',
    downloads: 320
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Блог</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные материалы о контекстной рекламе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800"
                >
                  Читать полностью <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 md:p-10">
          <div className="md:flex items-center">
            <div className="md:w-2/3 md:pr-10 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Получите бесплатный чек-лист 
                <span className="text-blue-700"> "7 шагов к эффективной рекламе"</span>
              </h3>
              <p className="text-gray-700 mb-6">
                Скачайте подробный гайд с практическими рекомендациями, которые можно применить прямо сейчас. 
                Уже более 1000+ маркетологов используют эти приемы.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-grow px-4 py-3 rounded-md border focus:ring-blue-500 focus:border-blue-500" 
                />
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap"
                >
                  Скачать бесплатно
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-3">
                Подписываясь, вы соглашаетесь получать полезные материалы о контекстной рекламе.
                Вы можете отписаться в любой момент.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-900 mb-4">Популярные гайды</h4>
                <ul className="space-y-4">
                  {guides.map((guide, index) => (
                    <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{guide.title}</span>
                        <span className="text-sm text-gray-500">{guide.downloads}+ скачиваний</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;