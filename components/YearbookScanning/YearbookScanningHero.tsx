"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  school: z.string().min(2, { message: 'School/Organization name must be at least 2 characters.' }),
  requestType: z.enum(['consultation', 'sample', 'both']).default('both')
});

type YearbookScanningFormValues = z.infer<typeof formSchema>;

const YearbookScanningHero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<YearbookScanningFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      school: '',
      requestType: 'both'
    }
  });

  const onSubmit = async (values: YearbookScanningFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('school', values.school);
      formData.append('requestType', values.requestType);
      formData.append('_subject', 'New Yearbook Scanning Request');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      
      const response = await fetch('https://formsubmit.co/d6494e93d993a930e148f6e40a07ad0b', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <section 
        className="relative pt-6 min-h-[110svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-0 sm:pt-8 sm:pb-0 md:pt-16 md:pb-0"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        {/* Background with animated gradient */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Decorative elements - hidden on small screens */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                Yearbook Scanning
              </span>
            </motion.h1>
            
            <motion.div
              className="relative mb-4 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
                Preserve Every Page. Protect Every Memory.
              </p>
              
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-4">
                Touchstone has partnered with Yearbook Scanning Service, the nation's leading yearbook digitization provider, to help schools protect their history, safeguard memories, and make archives accessible for alumni and future students.
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-semibold">
                Protect fragile yearbooks. Prevent loss. Preserve your legacy.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6 md:gap-8 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <img 
                src="/logo/logo-midnight.png" 
                alt="Touchstone Digital Solutions" 
                className="h-10 md:h-12 w-auto object-contain"
              />
              
              <div className="flex items-center justify-center">
                <svg className="w-10 h-10 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              
              <img 
                src="/Yearbook%20Scanning/boundbook%20scanning-3.png" 
                alt="Yearbook Scanning Service" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="mt-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-background/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-foreground/10 shadow-xl relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-4 text-green-500">
                      <CheckCircle className="h-6 w-6 flex-shrink-0" />
                      <p className="font-medium">Your request has been submitted! We'll be in touch shortly to discuss your yearbook scanning project.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-4 text-red-500">
                      <AlertCircle className="h-6 w-6 flex-shrink-0" />
                      <p className="font-medium">There was an error submitting your request. Please try again later.</p>
                    </div>
                  )}
                  
                  <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                        <FormField
                          control={form.control}
                          name="school"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-foreground/90 font-medium">School/Organization</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your school or organization" 
                                  {...field} 
                                  name="school" 
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
                        name="requestType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-foreground/90 font-medium">I'm interested in:</FormLabel>
                            <FormControl>
                              <div className="flex flex-wrap gap-3">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="consultation"
                                    checked={field.value === 'consultation'}
                                    onChange={() => field.onChange('consultation')}
                                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                                  />
                                  <span className="text-foreground/80">Schedule a Consultation</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="sample"
                                    checked={field.value === 'sample'}
                                    onChange={() => field.onChange('sample')}
                                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                                  />
                                  <span className="text-foreground/80">Request Free Sample Scan</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="both"
                                    checked={field.value === 'both'}
                                    onChange={() => field.onChange('both')}
                                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                                  />
                                  <span className="text-foreground/80">Both</span>
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 text-white font-medium py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Get Started Today
                          </>
                        )}
                      </Button>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
  );
};

export default YearbookScanningHero;
