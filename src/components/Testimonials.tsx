import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Алексей Смирнов',
    company: 'ООО "Техно-Мир"',
    position: 'Директор по маркетингу',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Работа с Игорем полностью изменила наше представление о контекстной рекламе. Раньше мы тратили огромный бюджет с минимальной отдачей. За три месяца сотрудничества мы снизили стоимость привлечения клиента вдвое и увеличили конверсию на 75%.',
    rating: 5,
    video: 'https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Елена Петрова',
    company: 'Клиника "ДентаПлюс"',
    position: 'Владелец',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Игорь помог нам наладить стабильный поток новых пациентов через Яндекс.Директ. Особенно ценно, что он глубоко погрузился в специфику нашей сферы и смог сделать объявления, которые действительно привлекают целевую аудиторию.',
    rating: 5,
    video: 'https://images.pexels.com/photos/8941790/pexels-photo-8941790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Михаил Козлов',
    company: 'Юридическая фирма "Правовой Стандарт"',
    position: 'Управляющий партнер',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Уже второй год работаем с Игорем. Благодаря его подходу мы получаем не просто трафик, а реальных клиентов, готовых к сотрудничеству. Ценю прозрачность в работе и регулярную отчетность, которая позволяет видеть реальную эффективность рекламы.',
    rating: 5,
    video: 'https://images.pexels.com/photos/8942455/pexels-photo-8942455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const companyLogos = [
  'https://images.pexels.com/photos/13867871/pexels-photo-13867871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13867904/pexels-photo-13867904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13867888/pexels-photo-13867888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13867883/pexels-photo-13867883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13867906/pexels-photo-13867906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13867869/pexels-photo-13867869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят клиенты о работе со мной
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-blue-700 font-medium mb-4">
                  {testimonials[currentTestimonial].company}
                </p>
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <button 
                  className="mt-6 flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
                  onClick={() => openVideoModal(testimonials[currentTestimonial].video)}
                >
                  <Play className="h-4 w-4 mr-2" /> Смотреть видео
                </button>
              </div>
              
              <div className="md:w-2/3">
                <div className="h-full flex flex-col justify-center">
                  <svg className="h-10 w-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-700 transition-colors md:block hidden"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-700 transition-colors md:block hidden"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Среди моих клиентов</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyLogos.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Company logo"
                  className="h-12 md:h-16 w-auto object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-white rounded-lg shadow-xl p-2 w-full max-w-3xl">
            <div className="aspect-video bg-gray-200 rounded mb-4">
              <img 
                src={currentVideo} 
                alt="Video testimonial"
                className="w-full h-full object-cover rounded" 
              />
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;