import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

const Newsletter = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here would go actual newsletter signup logic
      setTimeout(() => {
        setIsPopupOpen(false);
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  // Simulate popup appearing after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-md w-full shadow-2xl rounded-lg bg-white overflow-hidden transition-all duration-300 animate-slideUp">
      <div className="p-6">
        <button 
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Спасибо за подписку!</h3>
            <p className="text-gray-600">
              Чек-лист отправлен на вашу почту. Проверьте папку "Входящие".
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Получите бесплатный чек-лист
              </h3>
              <p className="text-gray-600">
                7 шагов к эффективной рекламе, которые помогли уже более 1000 клиентам.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" /> Получить бесплатно
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              Подписываясь, вы соглашаетесь получать полезные материалы.
              Вы можете отписаться в любой момент.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;