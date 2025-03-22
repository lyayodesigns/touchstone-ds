
import React from 'react';
import { LineChart, BarChart } from 'recharts';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from 'recharts';

const revenueData = [
  { name: 'Mar 26', value: 10 },
  { name: 'Mar 30', value: 12 },
  { name: 'Aug 4', value: 14 },
  { name: 'Aug 8', value: 13 },
  { name: 'Aug 12', value: 15 },
  { name: 'Aug 16', value: 18 },
  { name: 'Aug 20', value: 20 },
  { name: 'Aug 24', value: 18 },
  { name: 'Aug 28', value: 17 },
];

const stageData = [
  { name: 'Prospecting', value: 0.05 },
  { name: 'Qualification', value: 0.6 },
  { name: 'Presentation', value: 0.38 },
  { name: 'Negotiation', value: 0.45 },
  { name: 'Closing', value: 0.15 },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-glass text-purple-400 font-medium text-sm rounded-full px-6 py-2 inline-block mb-4 animate-fade-in">
            Unlock Actionable Data with Interactive Analytics and AI-Driven Reports
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in [animation-delay:200ms]">
            <span className="text-purple-400">Interactive & Customizable</span>
            <br />
            <span className="text-white">Sales Insights</span>
          </h2>
          
          <p className="text-white/70 text-lg animate-fade-in [animation-delay:400ms]">
            Seamlessly track and manage external DealRoom activities with Michael,
            ensuring complete visibility and control over every stage of the sales process
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Sales Performance Tracking</h3>
              <p className="text-white/70">
                Gain deeper visibility into your sales operations with interactive charts that
                showcase deal performance, rep activity, and overall pipeline health. These
                dynamic visualizations allow sales teams to analyze trends, identify opportunities,
                and track key performance metrics in real time.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Customizable AI-Driven Reporting</h3>
              <p className="text-white/70">
                Tailor your sales reports to match different roles and business needs with fully
                customizable reporting features. AI-powered recommendations are embedded
                directly into reports, offering actionable insights that help sales leaders and reps
                make data-driven decisions with confidence.
              </p>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-card rounded-xl p-4 border border-white/10">
              <div className="p-2 flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-white/70">Revenue & number of deals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white/70">Daily</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-1">
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={10} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ background: 'rgba(22, 22, 26, 0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 py-2 px-4 bg-white/5 rounded-md text-center">
                <div className="text-xs text-white/70">Aug 10, 2023</div>
                <div className="text-sm font-medium">25D - 1800.0$</div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-4 border border-white/10">
              <div className="p-2 flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-white/70">Stage And number of deals</span>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={10} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ background: 'rgba(22, 22, 26, 0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 py-2 px-4 bg-white/5 rounded-md text-center">
                <div className="text-sm text-white/70">0.5 Normalized number of deals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
