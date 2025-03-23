
import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-md shadow-xl max-w-xs p-4 z-50 animate-slide-in-right">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-sm text-gray-800">This website uses cookies</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close cookie notice"
        >
          <X size={16} />
        </button>
      </div>
      
      <p className="text-xs text-gray-600 mb-4">
        This website uses cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By using our website, you consent to our use of cookies.
      </p>
      
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => setIsVisible(false)}
          className="w-full bg-slack-purple text-white text-xs font-bold py-2 px-4 rounded hover:bg-slack-lightPurple transition-colors"
        >
          ACCEPT ALL COOKIES
        </button>
        
        <div className="mt-1 flex items-center text-xs text-gray-600">
          <div className="mr-2 bg-gray-100 text-gray-600 p-2 rounded-md flex-grow">
            <span className="block">Keep on typing to start a chat with something cool.</span>
          </div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            👍
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
