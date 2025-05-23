import React, { useState } from 'react';
import { TrendingUp, Award, Users, FileText } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Увеличиваю продажи через Яндекс.Директ и Google Ads: 
              <span className="text-blue-700"> ваша реклама окупится уже через 30 дней</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Игорь Каменев, сертифицированный специалист Яндекс.Директ. Более 10 лет настраиваю рекламу, которая приносит прибыль, а не трафик.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Бесплатная консультация
              </button>
              <a 
                href="#cases" 
                className="bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 px-6 py-3 rounded-md font-medium text-lg text-center transition-colors"
              >
                Посмотреть кейсы
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900">Опыт 10+ лет</h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <Award className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900">Сертификаты Яндекс + Google</h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900">92% клиентов возвращаются</h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <FileText className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900">Прозрачная отчетность 24/7</h3>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-white rounded-lg shadow-xl p-8 transform transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Рост бизнеса через рекламу"
                className="w-full h-auto rounded-lg" 
              />
              <div className="mt-6 flex justify-between">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-700">150%</p>
                  <p className="text-gray-600">Средний рост ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-700">-30%</p>
                  <p className="text-gray-600">Снижение стоимости лида</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-700">230+</p>
                  <p className="text-gray-600">Довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Получить бесплатную консультацию</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Опишите ваш запрос"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button 
                  type="button" 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  Отмена
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;