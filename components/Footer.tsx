import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUp,
  Check,
  Send
} from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-4 pb-8 pt-12">
      <div className="max-w-[85rem] mx-auto relative">
        
        {/* Main Footer Card */}
        <div className="bg-[#0f0503] border border-orange-900/50 rounded-[2.5rem] p-8 md:p-12 lg:px-16 lg:py-14 relative overflow-hidden shadow-2xl shadow-orange-900/10">
            
            {/* Background Glow Effects */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10">
            
            {/* Column 1: Brand (Span 5) */}
            <div className="lg:col-span-5 space-y-6 pr-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden border border-white/10">
                   <Logo className="w-full h-full" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide leading-tight">
                  AgriDry Pro
                </h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Revolutionizing harvest preservation with IoT-enabled smart drying technology. Designed for efficiency, built for durability, connected for peace of mind.
              </p>
              
              {/* Social Icons Row */}
              <div className="flex items-center gap-3 pt-4">
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Linkedin} />
                {/* Custom VK Icon */}
                <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center text-white hover:text-orange-400 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M15.07 2H8.93C5.1 2 2 5.1 2 8.93V15.07C2 18.9 5.1 22 8.93 22H15.07C18.9 22 22 18.9 22 15.07V8.93C22 5.1 18.9 2 15.07 2Z" fill="none"/>
                        <path d="M12.8 12.8H15.1V16.5H12.8V12.8ZM12.8 8.3H13.7V12.8H12.8V8.3Z" fill="none"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.16 7.42C21.16 7.42 21.16 7.42 21.16 7.42C20.98 6.55 20.25 5.92 19.36 5.92H17.5C17.06 5.92 16.65 6.13 16.38 6.48C15.86 7.15 15.22 8.24 14.71 9.07C14.47 8.95 14.28 8.76 14.28 8.3V6.5C14.28 6.18 14.02 5.92 13.7 5.92H11.5C11.33 5.92 11.22 6.09 11.3 6.24C11.38 6.38 11.55 6.5 11.75 6.5C12.16 6.5 12.5 6.84 12.5 7.25V9.93C12.5 10.16 12.28 10.33 12.06 10.28C11.12 10.07 10.13 8.38 9.53 7.22C9.35 6.88 9 6.67 8.62 6.67H6.75C6.27 6.67 5.94 7.15 6.13 7.57C7.14 9.77 9.17 13.06 11.96 13.06H12.8C12.8 13.06 12.8 13.06 12.8 13.06V11.5C12.8 11.5 14.36 11.5 15.13 12.27C15.65 12.79 16.03 13.56 16.14 13.82C16.22 14.03 16.42 14.17 16.65 14.17H18.5C18.98 14.17 19.29 13.62 19.04 13.23C18.66 12.63 17.89 11.71 16.92 11.21C17.85 10.74 18.8 9.68 19.16 8.75C19.29 8.42 19.21 8.04 18.95 7.79C18.88 7.72 18.81 7.66 18.73 7.61L21.16 7.42Z" fill="white"/>
                    </svg>
                </a>
                <SocialIcon Icon={Twitter} /> {/* X icon */}
                <SocialIcon Icon={Youtube} />
              </div>
            </div>

            {/* Column 2: Links 1 (Span 2) */}
            <div className="lg:col-span-2 pt-2">
               <ul className="space-y-4">
                  {['About Us', 'Warranty Policy', 'Terms of Service', 'Career', 'Blog', 'Contact Us'].map((item) => (
                      <FooterLink key={item} text={item} />
                  ))}
               </ul>
            </div>

            {/* Column 3: Links 2 (Span 2) */}
            <div className="lg:col-span-2 pt-2">
              <ul className="space-y-4">
                  {['AgriDry Pro Specs', 'Accessories', 'User Manuals', 'Firmware Updates', 'Distributors', 'Support'].map((item) => (
                      <FooterLink key={item} text={item} />
                  ))}
               </ul>
            </div>

            {/* Column 4: Contact (Span 3) */}
            <div className="lg:col-span-3 space-y-6 pt-2">
               <ContactItem 
                 icon={<MapPin size={20} className="text-white" />} 
                 text="Green Valley Tech Park, Sector 4, Agri-Zone" 
               />
               <ContactItem 
                 icon={<Phone size={20} className="text-white" />} 
                 text="+91 98765 43210" 
               />
               <ContactItem 
                 icon={<Send size={20} className="text-white" />} 
                 text="support@agridrypro.in" 
               />
               <ContactItem 
                 icon={<Clock size={20} className="text-white" />} 
                 text="Monday – Saturday : 8:00 AM – 6:00 PM" 
               />
            </div>

          </div>

          {/* Floating Action Button */}
          <button 
            onClick={scrollToTop}
            className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/40 hover:scale-110 transition-transform duration-300 z-20 group"
          >
             <ArrowUp size={24} />
             {/* Faint Magnifying Glass background effect as per image */}
             <div className="absolute inset-0 -z-10 bg-white/5 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

        </div>
        
        {/* Copyright Text - Outside the container */}
        <div className="text-center mt-6">
            <p className="text-gray-400 text-sm font-medium">
                © AgriDry Pro, All Rights Reserved.
            </p>
        </div>

      </div>
    </footer>
  );
};

// Helper Components
const SocialIcon: React.FC<{ Icon: any }> = ({ Icon }) => (
  <a href="#" className="w-9 h-9 flex items-center justify-center text-white hover:text-amber-400 transition-all duration-300">
    <Icon size={22} strokeWidth={1.5} />
  </a>
);

const FooterLink: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-3 text-gray-300 text-[15px] hover:text-white transition-colors cursor-pointer group">
    <div className="w-5 h-5 rounded-full bg-orange-700/50 flex items-center justify-center flex-shrink-0">
        <Check size={12} className="text-orange-400" strokeWidth={3} />
    </div>
    <span className="group-hover:translate-x-1 transition-transform">{text}</span>
  </li>
);

const ContactItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex gap-4 items-start group">
    <div className="mt-0.5 flex-shrink-0">
      {icon}
    </div>
    <span className="text-gray-300 text-[15px] leading-snug group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default Footer;