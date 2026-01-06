import React from 'react';
import { Leaf, Users, Globe, Award, Target, Heart, Sprout, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Header Section */}
      <section className="relative px-4 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
            <Leaf size={14} />
            <span>Cultivating the Future</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Agriculture with <br />
            <span className="bg-gradient-to-r from-orange-400 to-rose-400 text-transparent bg-clip-text">Smart Technology</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            AgriDry Pro is on a mission to reduce post-harvest losses through innovative IoT drying solutions, ensuring every grain harvested reaches its full potential.
          </p>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
                { label: 'Farmers Impacted', value: '10,000+', icon: Users, color: 'text-orange-400' },
                { label: 'Crops Saved', value: '50,000 Tons', icon: Sprout, color: 'text-amber-400' },
                { label: 'Energy Saved', value: '2.5 GWh', icon: Leaf, color: 'text-rose-400' },
                { label: 'Countries', value: '12+', icon: Globe, color: 'text-orange-500' },
            ].map((stat, idx) => (
                <div key={idx} className="bg-[#0f0503] border border-white/10 rounded-2xl p-6 text-center group hover:border-orange-500/30 transition-all">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${stat.color}`}>
                        <stat.icon size={24} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
            ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#0f0503] to-[#0a0201] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                        <Target size={24} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        To democratize access to advanced post-harvest technology for farmers of all scales. We believe that efficient drying is the key to food security and economic stability for agricultural communities.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Reduce food waste by 40%
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Increase farmer income through quality preservation
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Promote sustainable, solar-hybrid energy use
                        </li>
                    </ul>
                </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#0f0503] to-[#0a0201] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Globe size={120} className="text-rose-500" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 mb-6">
                        <Globe size={24} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        A world where no harvest is lost to spoilage. We envision a connected global agricultural network where data drives decisions, and technology works in harmony with nature.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Global standard for smart drying
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Zero-carbon drying footprint
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Empowering next-gen agri-tech entrepreneurs
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </section>

      {/* Our Story / Values */}
      <section className="px-4 mb-20">
        <div className="max-w-5xl mx-auto bg-[#0f0503] border border-orange-900/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why AgriDry Pro?</h2>
                <p className="text-gray-400">Built on a foundation of trust, innovation, and sustainability.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-orange-400 mb-4 border border-white/10">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                    <p className="text-sm text-gray-400">
                        Industrial-grade components designed to withstand harsh agricultural environments.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-orange-400 mb-4 border border-white/10">
                        <Award size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                    <p className="text-sm text-gray-400">
                        Patented airflow technology and AI-driven moisture sensing for precise control.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-orange-400 mb-4 border border-white/10">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Farmer First</h3>
                    <p className="text-sm text-gray-400">
                        Designed with direct feedback from the community. Simple, effective, and affordable.
                    </p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;