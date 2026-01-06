import React from 'react';
import { Wifi, Sun, Wind, Smartphone, Cpu, Battery, CheckCircle, ArrowRight, Thermometer, Shield } from 'lucide-react';
import Button from './Button';

const ProductPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      
      {/* Product Hero */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Flagship Model Gen-3
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              AgriDry <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Pro</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              The world's first industrial-grade solar-hybrid IoT dryer. Designed to preserve nutrient value while reducing energy costs by up to 60%.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="gradient" className="px-8 py-4 text-lg">
                Request Quote
              </Button>
              <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2">
                Download Brochure <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Product Visual Abstract */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[100px] rounded-full -z-10" />
             
             {/* Abstract Device Representation */}
             <div className="relative bg-gradient-to-br from-[#2e1a1a] to-[#0f0503] border border-white/10 rounded-3xl p-8 shadow-2xl shadow-orange-900/40 aspect-[4/5] flex flex-col">
                {/* Header of Device */}
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-orange-500">SYSTEM: ONLINE</div>
                </div>

                {/* Main Chamber Visual */}
                <div className="flex-1 bg-black/40 rounded-xl border border-white/5 relative overflow-hidden mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,#000_1px)] bg-[size:100%_4px] opacity-20"></div>
                    
                    {/* Airflow Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-full flex justify-center gap-8 opacity-30">
                         <div className="w-16 h-full bg-gradient-to-t from-orange-500/20 to-transparent animate-pulse"></div>
                         <div className="w-16 h-full bg-gradient-to-t from-orange-500/20 to-transparent animate-pulse delay-75"></div>
                         <div className="w-16 h-full bg-gradient-to-t from-orange-500/20 to-transparent animate-pulse delay-150"></div>
                    </div>
                    
                    <div className="relative z-10 text-center">
                        <Thermometer size={48} className="mx-auto text-orange-400 mb-2" />
                        <div className="text-3xl font-bold text-white">45°C</div>
                        <div className="text-sm text-gray-500">Internal Temp</div>
                    </div>
                </div>

                {/* Control Panel */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="text-xs text-gray-500 mb-1">MOISTURE</div>
                        <div className="text-xl font-bold text-rose-400">12.4%</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="text-xs text-gray-500 mb-1">FAN SPEED</div>
                        <div className="text-xl font-bold text-amber-400">2400 RPM</div>
                    </div>
                </div>
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-[#0f0503] border border-orange-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
                    <Wifi size={24} />
                </div>
                <div>
                    <div className="text-sm font-bold text-white">IoT Connected</div>
                    <div className="text-xs text-orange-400">Live Sync Active</div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-4 py-20 bg-[#0f0503]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Engineered for Excellence</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Every component of the AgriDry Pro is built to maximize efficiency and longevity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={Sun}
                    title="Solar Hybrid Power"
                    desc="Automatically switches between solar and grid power to minimize electricity costs while ensuring 24/7 operation."
                />
                <FeatureCard 
                    icon={Cpu}
                    title="Smart Processors"
                    desc="Dual-core industrial microcontrollers analyze sensor data 100 times per second for precise climate control."
                />
                <FeatureCard 
                    icon={Wind}
                    title="Cyclonic Airflow"
                    desc="Patented 360° airflow design ensures every grain is dried uniformly, eliminating hot spots and spoilage."
                />
                <FeatureCard 
                    icon={Smartphone}
                    title="Remote Management"
                    desc="Monitor and control your drying cycles from anywhere in the world via the AgriDry mobile app."
                />
                <FeatureCard 
                    icon={Battery}
                    title="Power Backup"
                    desc="Integrated battery backup ensures control systems and sensors stay online during power outages."
                />
                <FeatureCard 
                    icon={Shield}
                    title="Rugged Build"
                    desc="IP65 rated enclosure built with galvanized steel to withstand extreme weather and dust."
                />
            </div>
         </div>
      </section>

      {/* Tech Specs */}
      <section className="px-4 py-20">
         <div className="max-w-6xl mx-auto bg-[#0f0503] border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                    <p className="text-gray-400 mb-8">
                        The AgriDry Pro comes in three standard sizes to fit your operational needs. Custom sizing available upon request.
                    </p>
                    <div className="space-y-6">
                         <div className="flex items-start gap-4">
                             <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                             <div>
                                 <h4 className="font-semibold text-white">Modular Design</h4>
                                 <p className="text-sm text-gray-400">Expandable capacity by connecting multiple units.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                             <div>
                                 <h4 className="font-semibold text-white">Multi-Crop Support</h4>
                                 <p className="text-sm text-gray-400">Presets for Paddy, Maize, Coffee, Spices, and more.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                             <div>
                                 <h4 className="font-semibold text-white">5-Year Warranty</h4>
                                 <p className="text-sm text-gray-400">Comprehensive coverage on motor and heating elements.</p>
                             </div>
                         </div>
                    </div>
                </div>
                
                <div className="bg-white/5 p-8 md:p-12">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr>
                                <th className="pb-4 text-gray-500 font-medium">SPECIFICATION</th>
                                <th className="pb-4 text-white font-medium">ADP-500 (Base)</th>
                                <th className="pb-4 text-white font-medium">ADP-1000 (Max)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-gray-300">
                            <tr>
                                <td className="py-3">Capacity (Batch)</td>
                                <td className="py-3">500 kg</td>
                                <td className="py-3">1000 kg</td>
                            </tr>
                            <tr>
                                <td className="py-3">Drying Time</td>
                                <td className="py-3">4-6 Hours</td>
                                <td className="py-3">4-6 Hours</td>
                            </tr>
                            <tr>
                                <td className="py-3">Power Rating</td>
                                <td className="py-3">1.5 kW</td>
                                <td className="py-3">3.0 kW</td>
                            </tr>
                            <tr>
                                <td className="py-3">Solar Input</td>
                                <td className="py-3">Supported</td>
                                <td className="py-3">Supported</td>
                            </tr>
                            <tr>
                                <td className="py-3">Connectivity</td>
                                <td className="py-3">WiFi / 4G</td>
                                <td className="py-3">WiFi / 4G / LoRa</td>
                            </tr>
                            <tr>
                                <td className="py-3">Dimensions</td>
                                <td className="py-3">2m x 1.5m</td>
                                <td className="py-3">3m x 2m</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
};

const FeatureCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
    <div className="bg-[#0f0503] border border-white/5 rounded-2xl p-6 hover:bg-white/5 transition-colors group">
        <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default ProductPage;