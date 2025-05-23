import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Интернет-магазин электроники',
    industry: 'E-commerce',
    challenge: 'Высокая стоимость привлечения клиента и низкая конверсия.',
    solution: 'Глубокий анализ пользовательского поведения, корректировка семантического ядра, настройка ремаркетинга.',
    results: [
      { label: 'Рост конверсии', value: '150%', icon: TrendingUp },
      { label: 'Снижение стоимости клика', value: '35%', icon: DollarSign },
      { label: 'Рост продаж', value: '87%', icon: Users }
    ],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    chartImage: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Стоматологическая клиника',
    industry: 'Медицина',
    challenge: 'Высокая конкуренция и стоимость заявки более 2000 рублей.',
    solution: 'Таргетирование по микрогео, создание убедительных офферов для разных процедур, точная настройка рекламы под время работы клиники.',
    results: [
      { label: 'Снижение стоимости заявки', value: '60%', icon: DollarSign },
      { label: 'Рост числа записей', value: '95%', icon: Users },
      { label: 'Улучшение конверсии сайта', value: '45%', icon: TrendingUp }
    ],
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    chartImage: 'https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Юридическая компания',
    industry: 'B2B услуги',
    challenge: 'Низкое качество лидов и высокие расходы на рекламу.',
    solution: 'Внедрение многоуровневой квалификации лидов, настройка узко-таргетированных кампаний для разных юридических услуг.',
    results: [
      { label: 'Улучшение качества лидов', value: '125%', icon: TrendingUp },
      { label: 'Снижение стоимости конверсии', value: '40%', icon: DollarSign },
      { label: 'Рост количества клиентов', value: '65%', icon: Users }
    ],
    image: 'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    chartImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(1);

  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Кейсы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные результаты моих клиентов с цифрами и фактами
          </p>
        </div>
        
        <div className="flex flex-wrap mb-8">
          {caseStudies.map((caseStudy) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCase(caseStudy.id)}
              className={`
                px-6 py-3 rounded-md mr-3 mb-3 font-medium transition-colors
                ${activeCase === caseStudy.id 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {caseStudy.title}
            </button>
          ))}
        </div>
        
        {caseStudies.map((caseStudy) => (
          activeCase === caseStudy.id && (
            <div 
              key={caseStudy.id} 
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 animate-fadeIn"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gray-200 relative overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-md">
                      {caseStudy.industry}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Задача:</h4>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Решение:</h4>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </div>
                  
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Результаты:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                          <result.icon className="h-6 w-6 text-blue-700" />
                        </div>
                        <p className="text-3xl font-bold text-blue-700">{result.value}</p>
                        <p className="text-sm text-gray-600">{result.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Динамика показателей:</h4>
                      <img 
                        src={caseStudy.chartImage} 
                        alt="Performance Chart" 
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <p className="text-xs text-gray-500 mt-2 italic">
                        * Все данные подтверждены статистикой рекламных кабинетов.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Хотите добиться похожих результатов для своего бизнеса?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;