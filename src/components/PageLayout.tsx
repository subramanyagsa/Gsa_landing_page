import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

const PageLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default PageLayout;