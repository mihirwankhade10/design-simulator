
import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 bg-white border-b border-gray-200">
      <div className="slack-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <svg className="h-8 w-auto" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0" />
                  <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D" />
                  <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E" />
                  <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A" />
                </g>
              </svg>
              <span className="ml-2 text-xl font-bold text-slack-gray">slack</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <div className="group relative">
                <button className="text-slate-700 font-medium group-hover:text-slack-blue">Product</button>
                <span className="absolute h-1 w-0 bg-slate-700 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
              </div>
              <div className="group relative">
                <button className="text-slate-700 font-medium group-hover:text-slack-blue">Enterprise</button>
                <span className="absolute h-1 w-0 bg-slate-700 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
              </div>
              <div className="group relative">
                <button className="text-slate-700 font-medium group-hover:text-slack-blue">Resources</button>
                <span className="absolute h-1 w-0 bg-slate-700 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
              </div>
              <div className="group relative">
                <button className="text-slate-700 font-medium group-hover:text-slack-blue">Pricing</button>
                <span className="absolute h-1 w-0 bg-slate-700 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-slate-700">
              <Search size={20} />
            </button>
            <a href="#" className="hidden md:block text-slate-700 font-medium hover:text-slack-blue transition-colors">Sign in</a>
            <a href="#" className="hidden sm:block text-white bg-slack-purple px-3 py-1.5 rounded text-sm font-medium hover:bg-slack-lightPurple transition-colors">TALK TO SALES</a>
            <a href="#" className="text-white bg-slack-purple px-3 py-1.5 rounded text-sm font-medium hover:bg-slack-lightPurple transition-colors">TRY FOR FREE</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
