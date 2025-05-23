import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'Как долго занимает настройка рекламной кампании?',
    answer: 'Базовая настройка рекламной кампании занимает от 3 до 5 рабочих дней в зависимости от сложности проекта и объема работ. Перед запуском мы проводим анализ конкурентов, подбираем ключевые слова и составляем объявления. После запуска кампании требуется около 2 недель для первичной оптимизации и сбора данных.'
  },
  {
    question: 'Даете ли вы гарантии результата?',
    answer: 'Я не даю обещаний о конкретных показателях до начала работы, так как результат зависит от множества факторов, включая конкурентность ниши, качество сайта и уникальность предложения. Однако, я гарантирую прозрачность работы, регулярную отчетность и постоянную оптимизацию кампаний для достижения максимальной эффективности. Большинство клиентов видят положительную динамику уже через 2-4 недели после запуска.'
  },
  {
    question: 'Какой минимальный бюджет нужен для контекстной рекламы?',
    answer: 'Минимальный рекомендуемый бюджет зависит от конкурентности ниши, географии и целей рекламной кампании. Для локального бизнеса это может быть от 30 000 рублей в месяц, для конкурентных ниш в крупных городах – от 100 000 рублей. На первой консультации мы проведем оценку и подберем оптимальный бюджет для вашего случая.'
  },
  {
    question: 'Как происходит оплата услуг?',
    answer: 'Оплата услуг происходит по предоплатной системе. 50% стоимости оплачивается перед началом работ, оставшиеся 50% – после запуска рекламной кампании. Рекламный бюджет оплачивается отдельно напрямую на счета рекламных систем. Я работаю как с физическими лицами, так и с юридическими лицами по договору.'
  },
  {
    question: 'Как измеряется эффективность рекламы?',
    answer: 'Для измерения эффективности рекламы используется комплексный подход. Мы устанавливаем системы аналитики (Яндекс.Метрика, Google Analytics) и настраиваем отслеживание конверсий. В еженедельных отчетах вы получаете данные о ключевых показателях: количество кликов, стоимость клика, конверсии, стоимость привлечения клиента, ROI и другие метрики в зависимости от специфики вашего бизнеса.'
  },
  {
    question: 'Работаете ли вы с определенными нишами?',
    answer: 'Я работаю с большинством ниш, включая e-commerce, услуги, B2B и локальный бизнес. Однако не беру проекты, связанные с запрещенными товарами и услугами, а также с явно недобросовестными предложениями. За 10+ лет практики я накопил опыт в различных отраслях, что позволяет быстро адаптироваться к особенностям вашего бизнеса.'
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о контекстной рекламе и нашем сотрудничестве
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                openItem === index ? 'shadow-lg' : ''
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-bold text-gray-900">{item.question}</h3>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openItem === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Остались вопросы? Свяжитесь со мной для получения более подробной информации.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Задать вопрос
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;