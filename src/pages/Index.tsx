import React from 'react';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#3E004F]">
      {/* Custom gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3E004F] via-[#FC46FF] to-[#261428]"></div>
      
      {/* Glowing gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FC46FF] rounded-full filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3E004F] rounded-full filter blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Logo at top center */}
      <div className="relative z-10 flex justify-center pt-8">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
      </div>
      
      {/* Frosted-glass card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl shadow-[#FC46FF]/20 p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Large rectangle on the left */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[500px]"></div>
            
            {/* Two stacked rectangles on the right */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-64"></div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-64"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;