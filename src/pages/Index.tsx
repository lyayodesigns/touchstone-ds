import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/components/Home/HomePage';
import AboutPage from '@/components/About/AboutPage';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HomePage />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default Index;
