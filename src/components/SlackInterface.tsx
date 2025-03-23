
import React from 'react';

const SlackInterface = () => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Browser chrome for the UI */}
      <div className="bg-[#1E1A25] rounded-t-lg p-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      {/* Slack UI */}
      <div className="bg-[#1E1A25] rounded-b-lg shadow-xl overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-[#361236] w-32 text-white p-2">
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium opacity-80">Channels</span>
                <span className="text-white text-xs bg-white/20 w-5 h-5 flex items-center justify-center rounded-full">+</span>
              </div>
              
              <div className="flex items-center mb-2 bg-[#4A1D54] rounded p-1">
                <span className="text-white opacity-80 text-xs"># project-unicorn</span>
              </div>
            </div>
          </div>
          
          {/* Main chat area */}
          <div className="flex-1 bg-[#1E1A25]">
            <div className="border-b border-white/10 p-2">
              <div className="flex items-center">
                <span className="mr-1 text-xs text-white">#</span>
                <span className="text-white text-sm font-bold">project-unicorn</span>
                <div className="ml-2 flex">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-5 h-5 rounded-full border-2 border-[#1E1A25]" alt="User" />
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-5 h-5 rounded-full border-2 border-[#1E1A25] -ml-1" alt="User" />
                  <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-5 h-5 rounded-full border-2 border-[#1E1A25] -ml-1" alt="User" />
                  <div className="w-5 h-5 rounded-full bg-[#4A1D54] text-white text-xs flex items-center justify-center border-2 border-[#1E1A25] -ml-1">+3</div>
                </div>
              </div>
            </div>
            
            <div className="p-3">
              {/* Chat messages */}
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <div className="flex items-center mb-2">
                  <img src="https://randomuser.me/api/portraits/women/4.jpg" className="w-8 h-8 rounded" alt="User" />
                  <div className="ml-2">
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">Zoe Maxwell</span>
                    </div>
                    <p className="text-xs text-gray-500">Are we ready for launch?</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center mb-2">
                  <img src="https://randomuser.me/api/portraits/men/5.jpg" className="w-8 h-8 rounded" alt="User" />
                  <div className="ml-2">
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">Matt Brewer</span>
                    </div>
                    <p className="text-xs text-gray-500">Here's the run of show:</p>
                  </div>
                </div>
                <div className="flex justify-center bg-gray-50 rounded py-3 text-gray-500 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Document
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Number indicators in colorful circles */}
      <div className="absolute -top-4 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold shadow-md">3</div>
      <div className="absolute bottom-10 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold shadow-md">8</div>
      <div className="absolute bottom-32 right-0 w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold shadow-md">6</div>
    </div>
  );
};

export default SlackInterface;
