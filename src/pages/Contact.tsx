import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="py-2 sm:py-12 md:py-16 lg:py-24 w-full bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg mb-6">
            Get in touch with our team to learn more about Touchstone DS and how we can help you with your school's success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Email</h2>
              <p className="text-lg">
                <a href="mailto:info@touchstoneds.com" className="text-primary">
                  info@touchstoneds.com
                </a>
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Phone</h2>
              <p className="text-lg">
                <a href="tel:+1234567890" className="text-primary">
                  (123) 456-7890
                </a>
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Address</h2>
              <p className="text-lg">
                1234 School Street, City, State, ZIP
              </p>
            </div>
          </div>
        </div>
      </section>
     
      
      <Footer />
    </div>
  );
};

export default Contact;