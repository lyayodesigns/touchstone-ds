import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Handle form submission
  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Using environment variables for EmailJS credentials
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
        
        {/* Hero content */}
        <div className="container px-4 z-10 flex flex-col items-center">
          <motion.div 
            className="text-center max-w-4xl mx-auto py-12 md:py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block mb-4 p-2 px-4 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-blue-400 font-medium">We're here to help</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Let's Connect</span>
            </motion.h1>
            
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Have questions about our digital recognition solutions? Our team is ready to create an unforgettable experience for your institution.  
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact-form" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
              <a 
                href="tel:6033617541" 
                className="px-8 py-4 bg-blue-600 backdrop-blur-md border border-blue-700 rounded-full text-white hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto" id="contact-form">
          {/* Section title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Get in Touch</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.</p>
          </div>
          
          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-background/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-xl relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </span>
                  Send Us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-4 text-green-500">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <p className="font-medium">Your message has been sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-4 text-red-500">
                    <AlertCircle className="h-6 w-6 flex-shrink-0" />
                    <p className="font-medium">There was an error sending your message. Please try again later.</p>
                  </div>
                )}
                
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-foreground/90 font-medium">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                name="name" 
                                className="bg-background/50 border-foreground/20 rounded-xl py-6 px-4 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-foreground/90 font-medium">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email address" 
                                {...field} 
                                name="email" 
                                className="bg-background/50 border-foreground/20 rounded-xl py-6 px-4 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-foreground/90 font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What's this about?" 
                              {...field} 
                              name="subject" 
                              className="bg-background/50 border-foreground/20 rounded-xl py-6 px-4 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-foreground/90 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us how we can help you..." 
                              className="min-h-[180px] resize-y bg-background/50 border-foreground/20 rounded-xl py-4 px-4 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                              {...field}
                              name="message"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-background/80 backdrop-blur-md p-8 rounded-3xl border border-foreground/10 shadow-xl relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-md mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Email</h3>
                        <a href="mailto:info@touchstone-ds.com" className="text-foreground/70 hover:text-blue-500 transition-colors duration-200 block">info@touchstone-ds.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-md mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Phone</h3>
                        <a href="tel:6033617541" className="text-foreground/70 hover:text-blue-500 transition-colors duration-200">(603) 361-7541</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-md mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Location</h3>
                        <p className="text-foreground/70">Bedford, NH</p>
                        <p className="text-foreground/70">United States</p>
                        <p className="text-foreground/70">New Hampshire</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Hours Card */}
              <div className="bg-background/80 backdrop-blur-md p-8 rounded-3xl border border-foreground/10 shadow-xl relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-white" />
                    </span>
                    Business Hours
                  </h2>
                  
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-3 border-b border-foreground/10">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">7:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center pb-3 border-b border-foreground/10">
                      <span className="font-medium">Saturday:</span>
                      <span className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Sunday:</span>
                      <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-sm font-medium">Available if needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;