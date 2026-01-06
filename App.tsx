import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import AuthPage, { AuthType } from './components/AuthPage';
import Dashboard from './components/Dashboard';
import About from './components/About';
import ProductPage from './components/ProductPage';
import ContactUs from './components/ContactUs';

// Extended view state to include public pages
type ViewState = 'landing' | 'about' | 'product' | 'services' | 'contact' | AuthType;

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<AuthType>('user');
  const [userData, setUserData] = useState<{name: string, email: string} | null>(null);

  const handleNavigate = (view: string) => {
    // Handle specific auth views
    if (['user', 'enterprise', 'ecommerce'].includes(view)) {
        setUserType(view as AuthType);
        setCurrentView(view as AuthType);
    } else {
        // Handle public pages
        setCurrentView(view as ViewState);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentView('landing');
  };

  const handleLogin = (data: { name: string, email: string }) => {
    setUserData(data);
    setIsLoggedIn(true);
    // When logged in, we stay on the current view type but render Dashboard instead
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentView('landing');
  };

  // If logged in, show Dashboard
  if (isLoggedIn) {
    return (
       <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
          <Dashboard type={userType} onLogout={handleLogout} userData={userData} />
       </div>
    );
  }

  // Check if the current view is an auth page (no navbar/footer)
  const isAuthPage = ['user', 'enterprise', 'ecommerce'].includes(currentView);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden selection:bg-orange-500 selection:text-white flex flex-col">
      <div className="fixed inset-0 z-[-1]">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#431407_1px,transparent_1px),linear-gradient(to_bottom,#431407_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* Navbar - Visible on non-auth pages */}
      {!isAuthPage && <Navbar onNavigate={handleNavigate} />}

      {/* Main Content Area */}
      {isAuthPage ? (
          <AuthPage type={currentView as AuthType} onBack={handleBack} onLogin={handleLogin} />
      ) : (
          <main className="flex-grow">
            {currentView === 'landing' && (
                <>
                  <Hero />
                  <Features onNavigate={(type) => handleNavigate(type)} />
                </>
            )}
            
            {currentView === 'about' && <About />}
            {currentView === 'product' && <ProductPage />}
            {currentView === 'contact' && <ContactUs />}
            
            {/* Placeholder for Services if needed in future, redirects to landing currently if not implemented */}
            {currentView === 'services' && (
                <div className="pt-40 pb-20 text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                    <p className="text-gray-400">The Services page is currently under development.</p>
                    <button 
                        onClick={() => handleNavigate('landing')}
                        className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                        Return Home
                    </button>
                </div>
            )}
          </main>
      )}

      {/* Footer - Visible on non-auth pages */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;