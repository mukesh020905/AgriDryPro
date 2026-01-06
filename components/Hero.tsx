import React from 'react';
import { Star, Wifi, Thermometer, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-500/30 bg-[#150a0a]/50 backdrop-blur-md mb-10 shadow-[0_0_15px_rgba(251,146,60,0.3)] animate-fade-in-up">
          <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
          <span className="text-sm font-medium text-gray-200">
            India's #1 IoT Smart Drying Solution
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          <span className="block text-white drop-shadow-2xl">Preserve Quality. Minimize Loss.</span>
          <span className="block mt-2 bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400 text-transparent bg-clip-text">
             AgriDry Pro
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          The ultimate solar-hybrid IoT dryer. Monitor moisture levels in real-time, automate temperature control, and manage your drying cycles from your smartphone.
        </p>

        {/* Product Highlights / Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 opacity-80">
            <div className="flex items-center gap-2 text-gray-300">
                <Wifi className="text-orange-500" size={20} />
                <span className="font-medium">Remote Connectivity</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
                <Thermometer className="text-orange-500" size={20} />
                <span className="font-medium">Precision Heat Control</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
                <Smartphone className="text-orange-500" size={20} />
                <span className="font-medium">Mobile App Alerts</span>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] transition-all duration-300 w-full sm:w-auto transform hover:scale-105">
            Pre-Order Now
          </button>
          <button className="px-10 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium w-full sm:w-auto hover:border-orange-500/30">
            View Product Specs
          </button>
        </div>

      </div>
      
      {/* Background decoration matching the glow in image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;