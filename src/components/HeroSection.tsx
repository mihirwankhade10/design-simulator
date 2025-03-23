
import React from 'react';
import SlackInterface from './SlackInterface';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="slack-container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Slack is where the future works
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Transform the way you work with one place for everyone and everything you need to get stuff done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button className="slack-button-primary uppercase text-sm">Try for free</button>
              <button className="slack-button-secondary text-sm flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                Sign up with Google
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SlackInterface />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
