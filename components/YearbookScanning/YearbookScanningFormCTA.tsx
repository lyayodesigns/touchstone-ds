"use client"
import React, { useState } from 'react';
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

const YearbookScanningFormCTA = () => {
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

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-xl relative overflow-hidden w-full">
            {/* Background gradient */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <img 
                  src="/Yearbook%20Scanning/boundbook%20scanning-2.png" 
                  alt="Yearbook Scanning" 
                  className="w-16 h-16 object-contain mr-3"
                />
                Ready to Protect and Modernize Your Yearbooks?
              </h2>
              <div className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Phone: <a href="tel:+18455980467" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">(845) 598-0467</a></span>
              </div>
              <p className="mb-6 text-lg text-foreground/80">
                If you are ready to preserve decades of school history and finally provide a clear answer when people ask "can you view high school yearbooks online?" Touchstone Digital Solutions is ready to help. In partnership with Yearbook Scanning Service, your institution gets premium non‑destructive yearbook scanning, searchable digital files, and a clear path to building a modern digital yearbook archive. Also explore our <a href="/digital-yearbooks/" className="text-blue-600 hover:text-purple-600 underline font-medium transition-colors">Digital Yearbooks</a> for creating interactive modern yearbooks.
              </p>
              
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
        </div>
      </div>
    </section>
  );
};

export default YearbookScanningFormCTA;
