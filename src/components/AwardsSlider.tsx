import React from 'react';

const AwardItem = ({ type, color, label, year }: { type: string; color: string; label: string; year?: string }) => {
  if (type === 'circle') {
    return (
      <div className="flex flex-col items-center mx-16">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1">
          <div className={`w-full h-full ${color} rounded-full flex items-center justify-center p-1`}>
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-center px-1">{label}</span>
            </div>
          </div>
        </div>
        {year && <span className="text-xs mt-2 font-medium">{year}</span>}
      </div>
    );
  }
  
  if (type === 'square') {
    return (
      <div className="flex flex-col items-center mx-16">
        <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center p-1">
          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-1">
            <div className="w-full h-full bg-teal-500 rounded-lg flex flex-col items-center justify-center">
              <span className="text-white font-bold text-xs">{label}</span>
            </div>
          </div>
        </div>
        {year && <span className="text-xs mt-2 font-medium">{year}</span>}
      </div>
    );
  }
  
  if (type === 'diamond') {
    return (
      <div className="flex flex-col items-center mx-16">
        <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 transform rotate-45 flex items-center justify-center p-1">
          <div className="w-full h-full bg-white flex items-center justify-center p-1">
            <div className="w-full h-full bg-orange-400 flex items-center justify-center transform -rotate-45">
              <span className="text-white font-bold text-xs">{label}</span>
            </div>
          </div>
        </div>
        {year && <span className="text-xs mt-2 font-medium">{year}</span>}
      </div>
    );
  }
  
  return null;
};

const AwardsSlider: React.FC = () => {
  const awards = [
    { type: 'circle', color: 'bg-gradient-to-r from-purple-500 to-blue-500', label: 'HIGH PERFORMER', year: 'FALL 2024' },
    { type: 'square', color: '', label: 'TOP PERFORMER', year: 'WINTER 2024' },
    { type: 'diamond', color: '', label: 'USERS CHOICE', year: 'WINTER 2024' },
    { type: 'circle', color: 'bg-gradient-to-r from-red-500 to-orange-500', label: 'HIGH PERFORMER', year: '2024' },
  ];

  return (
    <div className="w-full py-7 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {/* First set */}
          {awards.map((award, index) => (
            <AwardItem key={`award-1-${index}`} {...award} />
          ))}
          
          {/* Second set (duplicate) */}
          {awards.map((award, index) => (
            <AwardItem key={`award-2-${index}`} {...award} />
          ))}
          
          {/* Third set (duplicate) */}
          {awards.map((award, index) => (
            <AwardItem key={`award-3-${index}`} {...award} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSlider;
