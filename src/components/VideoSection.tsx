
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="slack-container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/600x400/f3f3f3/cccccc')" }}>
                  <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                    <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-slack-purple">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">FUTURE</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Now is your moment to build a better tomorrow</h2>
            <p className="text-lg text-gray-700 mb-8">
              We've seen what the future can be. Now it's time to decide what it will be.
            </p>
            <button className="slack-button-primary uppercase text-sm">Watch video</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
