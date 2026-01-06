import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Button from './Button';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-12">
      
      {/* Header */}
      <section className="px-4 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
            <MessageSquare size={14} />
            <span>We'd love to hear from you</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a question about AgriDry Pro? Need technical support or a custom quote? Our team is ready to help you optimize your harvest.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Contact Information Column */}
        <div className="space-y-6 lg:col-span-1">
            
            {/* Address Card */}
            <div className="bg-[#0f0503] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Head Office</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Green Valley Tech Park, Sector 4<br />
                    Agri-Zone, Karnataka 560001<br />
                    India
                </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#0f0503] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <Phone size={16} className="text-rose-500" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <Mail size={16} className="text-rose-500" />
                        <span>support@agridrypro.in</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <Mail size={16} className="text-rose-500" />
                        <span>sales@agridrypro.in</span>
                    </div>
                </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#0f0503] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-gray-400 text-sm mb-1">Monday – Saturday</p>
                <p className="text-white font-medium">8:00 AM – 6:00 PM</p>
                <p className="text-gray-500 text-xs mt-2">Closed on Sundays & Public Holidays</p>
            </div>

        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-2">
            <div className="bg-[#0f0503] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <h2 className="text-2xl font-bold mb-6 relative z-10">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0a0201] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0a0201] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                        <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-[#0a0201] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm"
                        >
                            <option value="" disabled>Select a topic</option>
                            <option value="sales">Sales Inquiry / Quote</option>
                            <option value="support">Technical Support</option>
                            <option value="partnership">Partnership / Distribution</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full bg-[#0a0201] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 resize-none"
                            placeholder="How can we help you today?"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <Button variant="gradient" fullWidth className="py-4 text-base font-semibold group">
                            <span className="flex items-center gap-2">
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>

      </div>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
         <div className="w-full h-96 bg-[#0f0503] border border-white/10 rounded-3xl overflow-hidden relative flex items-center justify-center group">
            {/* Placeholder for map */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0201] to-transparent"></div>
            
            <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-600/40 animate-bounce">
                    <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Find us on the map</h3>
                <p className="text-gray-400 mt-2">Green Valley Tech Park, Bangalore</p>
                <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors text-sm">
                    Open in Google Maps
                </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ContactUs;