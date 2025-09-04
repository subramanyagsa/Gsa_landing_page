import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#261428]">
      {/* Background Gradient & Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#3E004F,#261428)]"></div>
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(252,70,255,0.4),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-30%] right-[-20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(62,0,79,0.5),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;