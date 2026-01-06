import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Building2, ShoppingBag, User, Briefcase, Store } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

export type AuthType = 'user' | 'enterprise' | 'ecommerce';

interface AuthPageProps {
  type: AuthType;
  onBack: () => void;
  onLogin: (data: { name: string; email: string }) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ type, onBack, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // If logging in without a name entered, derive a placeholder from email
      const finalName = name || email.split('@')[0]; 
      onLogin({ name: finalName, email }); 
    }, 1500);
  };

  const getConfig = () => {
    switch (type) {
      case 'enterprise':
        return {
          title: 'Enterprise Portal',
          icon: <Building2 className="w-8 h-8 text-rose-400" />,
          color: 'text-rose-400',
          gradient: 'from-rose-500 to-orange-600',
          extraField: 'Company Name'
        };
      case 'ecommerce':
        return {
          title: 'Agri-Market Dashboard',
          icon: <ShoppingBag className="w-8 h-8 text-amber-400" />,
          color: 'text-amber-400',
          gradient: 'from-amber-500 to-orange-500',
          extraField: 'Store Name'
        };
      default:
        return {
          title: 'User Login',
          icon: <User className="w-8 h-8 text-orange-400" />,
          color: 'text-orange-400',
          gradient: 'from-orange-500 to-amber-600',
          extraField: 'Full Name'
        };
    }
  };

  const config = getConfig();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative z-20">
      {/* Back Navigation */}
      <button 
        onClick={onBack} 
        className="absolute top-6 left-6 md:top-10 md:left-10 text-gray-400 hover:text-white flex items-center gap-2 transition-colors px-4 py-2 rounded-full hover:bg-white/5"
      >
         <ArrowLeft size={20} />
         <span className="font-medium">Back to Home</span>
      </button>

      <div className="w-full max-w-[440px] animate-fade-in-up">
        {/* Card Container */}
        <div className="bg-[#0f0503]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-orange-900/20 relative overflow-hidden">
          
          {/* Top colored line */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />

          {/* Header */}
          <div className="text-center mb-8">
            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10 shadow-inner`}>
              {config.icon}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{config.title}</h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Welcome back! Please enter your details.' : 'Create an account to get started.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Field - Visible primarily during Sign Up, or if needed */}
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">
                  {config.extraField || 'Full Name'}
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {type === 'enterprise' ? <Briefcase size={18} className="text-gray-500 group-focus-within:text-white transition-colors" /> : 
                     type === 'ecommerce' ? <Store size={18} className="text-gray-500 group-focus-within:text-white transition-colors" /> :
                     <User size={18} className="text-gray-500 group-focus-within:text-white transition-colors" />}
                  </div>
                  <input
                    type="text"
                    required={!isLogin}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0a0201] border border-white/10 text-white text-sm rounded-xl block pl-11 p-3.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder={`Enter ${config.extraField || 'your name'}`}
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500 group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0a0201] border border-white/10 text-white text-sm rounded-xl block pl-11 p-3.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500 group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0201] border border-white/10 text-white text-sm rounded-xl block pl-11 p-3.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-orange-600 focus:ring-orange-500" />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">Remember me</label>
                </div>
                <a href="#" className="text-sm font-medium text-orange-400 hover:text-orange-300">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-medium rounded-xl text-sm px-5 py-4 text-center transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              style={{
                background: `linear-gradient(to right, ${type === 'user' ? '#f97316, #ea580c' : type === 'enterprise' ? '#fb7185, #e11d48' : '#eab308, #d97706'})`
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Processing...
                </span>
              ) : (
                isLogin ? 'Sign in' : 'Create account'
              )}
            </button>
          </form>

          {/* Footer toggle */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              {isLogin ? "Don't have an account yet?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className={`font-semibold hover:underline ${config.color}`}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>

        </div>
        
        {/* Secure badge */}
        <div className="text-center mt-8 opacity-60 flex items-center justify-center gap-2 text-xs text-gray-500">
           <Lock size={12} />
           <span>256-bit SSL Secure Connection</span>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;