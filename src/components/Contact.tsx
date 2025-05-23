import React, { FormEvent, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      
      const position = { lat: 55.757989, lng: 37.614242 }; // Coordinates for Tverskaya St, 1
      
      const map = new Map(mapRef.current!, {
        center: position,
        zoom: 16,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      new google.maps.Marker({
        position,
        map,
        title: 'Игорь Каменев'
      });
    };

    if (mapRef.current) {
      initMap();
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = `Заявка с сайта: ${formData.get('subject')}`;
    const body = `
Имя: ${formData.get('name')}
Email: ${formData.get('email')}
Телефон: ${formData.get('phone')}
Тема: ${formData.get('subject')}
Сообщение: ${formData.get('message')}
    `;
    
    window.location.href = `mailto:ikam2000@yandex.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Связаться со мной</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готов ответить на ваши вопросы и обсудить возможное сотрудничество
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Отправить сообщение</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                <select 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Выберите тему</option>
                  <option value="consultation">Консультация</option>
                  <option value="cooperation">Сотрудничество</option>
                  <option value="question">Вопрос</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Ваше сообщение..."
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  Я согласен на обработку персональных данных
                </label>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                <Send className="h-4 w-4 mr-2" /> Отправить сообщение
              </button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-blue-700 text-white rounded-lg shadow-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Телефон</p>
                    <a href="tel:+7XXXXXXXXXX" className="text-blue-100 hover:text-white transition-colors">
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:ikam2000@yandex.ru" className="text-blue-100 hover:text-white transition-colors">
                      ikam2000@yandex.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Адрес</p>
                    <address className="text-blue-100 not-italic">
                      г. Москва, ул. Тверская, 1
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex-grow">
              <h3 className="text-xl font-bold text-gray-900 p-4">Моё расположение</h3>
              <div ref={mapRef} className="w-full h-[400px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;