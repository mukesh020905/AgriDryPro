import React from 'react';
import { Lock, Building2, ShoppingBag, Wifi, Activity } from 'lucide-react';
import { AuthType } from './AuthPage';

interface FeaturesProps {
  onNavigate?: (type: AuthType) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  
  const handleCardClick = (type: AuthType) => {
    if (onNavigate) {
      onNavigate(type);
    }
  };

  return (
    <section className="relative pb-24 px-4" id="product">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Access Portal</h2>
            <p className="text-gray-400">Manage your AgriDry Pro devices, fleet, or purchases.</p>
        </div>

        {/* Cards container mimicking the bottom of Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: User Login - Peach (Growth/Farmers) */}
            <div 
              onClick={() => handleCardClick('user')}
              className="glass-card rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] hover:border-orange-500/30"
            >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-300 transition-colors">User Login</h3>
                <p className="text-gray-400 text-sm mb-4">Remote control your AgriDry Pro. Check humidity & temp logs.</p>
                <div className="mt-4 rounded-lg overflow-hidden h-32 bg-gradient-to-br from-orange-900/40 to-transparent border border-white/5 relative flex flex-col items-center justify-center p-4 group-hover:bg-orange-900/20 transition-colors">
                     {/* Abstract Device Status visualization */}
                     <div className="w-3/4 h-8 bg-white/5 rounded border border-white/10 mb-2 flex items-center justify-between px-3">
                        <span className="text-[10px] text-gray-400">Temp</span>
                        <div className="flex items-center gap-1">
                             <div className="w-10 h-1 bg-white/10 rounded-full">
                                 <div className="w-3/4 h-full bg-orange-400 rounded-full"></div>
                             </div>
                        </div>
                     </div>
                     <div className="w-3/4 h-8 bg-white/5 rounded border border-white/10 mb-3 flex items-center justify-between px-3">
                        <span className="text-[10px] text-gray-400">Moisture</span>
                         <div className="flex items-center gap-1">
                             <div className="w-10 h-1 bg-white/10 rounded-full">
                                 <div className="w-1/2 h-full bg-blue-400 rounded-full animate-pulse"></div>
                             </div>
                        </div>
                     </div>
                     <div className="absolute bottom-2 right-2 flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></div>
                     </div>
                </div>
            </div>

            {/* Card 2: Enterprises Login - Rose (Technology/Corporate) */}
            <div 
              onClick={() => handleCardClick('enterprise')}
              className="glass-card rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_30px_rgba(251,113,133,0.15)] hover:border-rose-500/30"
            >
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4 text-rose-400 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-300 transition-colors">Enterprises Login</h3>
                <p className="text-gray-400 text-sm mb-4">Manage fleet of industrial dryers. Data analytics & maintenance.</p>
                <div className="mt-4 rounded-lg overflow-hidden h-32 bg-gradient-to-br from-rose-900/40 to-transparent border border-white/5 relative flex items-center justify-center flex-col p-4 group-hover:bg-rose-900/20 transition-colors">
                    {/* Abstract Enterprise Dashboard/ID */}
                    <div className="w-2/3 h-20 bg-white/5 rounded-lg border border-white/10 p-3 flex flex-col gap-2">
                         <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded bg-rose-500/30 flex items-center justify-center">
                                 <Activity size={14} className="text-rose-300" />
                             </div>
                             <div className="space-y-1">
                                 <div className="w-16 h-1.5 bg-white/20 rounded-full group-hover:w-20 transition-all duration-700"></div>
                                 <div className="w-10 h-1.5 bg-white/10 rounded-full"></div>
                             </div>
                         </div>
                         <div className="flex gap-1 mt-auto">
                            <div className="w-full h-8 bg-rose-500/10 rounded-sm flex items-end pb-1 justify-center"><div className="w-1 h-3 bg-rose-500"></div></div>
                            <div className="w-full h-8 bg-rose-500/10 rounded-sm flex items-end pb-1 justify-center"><div className="w-1 h-5 bg-rose-500"></div></div>
                            <div className="w-full h-8 bg-rose-500/10 rounded-sm flex items-end pb-1 justify-center"><div className="w-1 h-4 bg-rose-500"></div></div>
                         </div>
                    </div>
                </div>
            </div>

             {/* Card 3: E-commerce Login - Amber/Yellow (Harvest/Market) */}
             <div 
               onClick={() => handleCardClick('ecommerce')}
               className="glass-card rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_30px_rgba(252,211,77,0.15)] hover:border-amber-500/30"
             >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-300 transition-colors">E-commerce Login</h3>
                <p className="text-gray-400 text-sm mb-4">Buy AgriDry Pro units, spare parts, and accessories.</p>
                <div className="mt-4 rounded-lg overflow-hidden h-32 bg-gradient-to-br from-amber-900/40 to-transparent border border-white/5 relative flex items-center justify-center p-4 group-hover:bg-amber-900/20 transition-colors">
                     {/* Abstract Product/Cart visual */}
                     <div className="relative w-24 h-20 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center border-2 border-[#1e293b] shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            <span className="text-xs font-bold text-black">1</span>
                        </div>
                        <ShoppingBag size={24} className="text-amber-300/50 group-hover:text-amber-300 transition-colors" />
                        <span className="text-[10px] text-gray-400">Order Spares</span>
                     </div>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Features;