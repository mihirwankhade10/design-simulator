
import React, { useState } from 'react';
import { X } from 'lucide-react';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-slack-blue text-white py-3 relative animate-fade-in">
      <div className="slack-container">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center md:text-left pr-6">
            <p className="font-medium flex flex-wrap justify-center md:justify-start">
              Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.{' '}
              <a href="#" className="flex items-center text-white underline hover:text-slate-200 transition-colors ml-1">
                Let's go <span className="inline-block ml-1 transform rotate-90">→</span>
              </a>
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute right-4 top-3 text-white hover:text-slate-200 transition-colors"
            aria-label="Close banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
