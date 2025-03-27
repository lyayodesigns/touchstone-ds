import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutPage from '../components/AboutPage';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
