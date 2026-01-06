import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Smartphone, 
  BarChart3, 
  Settings, 
  LogOut, 
  User, 
  Bell,
  CreditCard, 
  HelpCircle,
  FileText,
  ShoppingBag,
  Building2,
  Wifi,
  ChevronRight,
  Search,
  Menu,
  X,
  Globe,
  Thermometer,
  Droplets,
  Wind,
  Power,
  Download,
  MapPin,
  Signal,
  Server,
  ChevronDown,
  BookOpen,
  Wrench,
  AlertTriangle,
  MessageCircle,
  ChevronUp
} from 'lucide-react';
import { AuthType } from './AuthPage';
import Logo from './Logo';

interface DashboardProps {
  type: AuthType;
  onLogout: () => void;
  userData?: { name: string; email: string } | null;
}

type Tab = 'overview' | 'devices' | 'reports' | 'e-connect' | 'orders' | 'invoices' | 'products' | 'support' | 'fleet' | 'team' | 'settings';

const Dashboard: React.FC<DashboardProps> = ({ type, onLogout, userData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  // Close profile sidebar when window loses focus (user switches window/tab)
  useEffect(() => {
    const handleWindowBlur = () => {
      setIsProfileOpen(false);
    };

    window.addEventListener('blur', handleWindowBlur);
    return () => {
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  // Config based on user type
  const getUserConfig = () => {
    // Helper to get initials
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const displayName = userData?.name;
    const displayEmail = userData?.email;

    switch (type) {
      case 'enterprise':
        return {
          name: displayName || 'AgriCorp Ltd.',
          role: 'Administrator',
          email: displayEmail || 'admin@agricorp.com',
          initials: getInitials(displayName || 'AgriCorp Ltd.'),
          color: 'text-rose-400',
          bgColor: 'bg-rose-500/20',
          borderColor: 'border-rose-500/30',
          navItems: [
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'fleet', icon: Building2, label: 'Fleet' },
            { id: 'reports', icon: BarChart3, label: 'Analytics' },
            { id: 'team', icon: User, label: 'Team' },
            { id: 'settings', icon: Settings, label: 'Settings' },
            { id: 'support', icon: HelpCircle, label: 'Help' },
          ]
        };
      case 'ecommerce':
        return {
          name: displayName || 'Green Farms Store',
          role: 'Merchant',
          email: displayEmail || 'store@greenfarms.com',
          initials: getInitials(displayName || 'Green Farms'),
          color: 'text-amber-400',
          bgColor: 'bg-amber-500/20',
          borderColor: 'border-amber-500/30',
          navItems: [
            { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'orders', icon: ShoppingBag, label: 'Orders' },
            { id: 'invoices', icon: CreditCard, label: 'Invoices' },
            { id: 'products', icon: Smartphone, label: 'Products' },
            { id: 'support', icon: HelpCircle, label: 'Support' },
          ]
        };
      default: // user
        return {
          name: displayName || 'Siranjheevi C S',
          role: 'Standard User',
          email: displayEmail || 'siranjheevi@gmail.com',
          initials: getInitials(displayName || 'Siranjheevi C S'),
          color: 'text-orange-400',
          bgColor: 'bg-orange-500/20',
          borderColor: 'border-orange-500/30',
          navItems: [
            { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'devices', icon: Wifi, label: 'Devices' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'e-connect', icon: Globe, label: 'E-Connect' },
            { id: 'support', icon: HelpCircle, label: 'Support' },
          ]
        };
    }
  };

  const config = getUserConfig();
  const SummaryIcon = config.navItems[1].icon;

  const renderContent = () => {
    switch (activeTab) {
      case 'devices':
        return <DevicesView />;
      case 'reports':
        return <ReportsView />;
      case 'e-connect':
        return <EConnectView />;
      case 'support':
        return <HelpSupportView />;
      case 'overview':
      default:
        return (
          <>
               <h1 className="text-3xl font-bold mb-1">Welcome, {config.name.split(' ')[0]}.</h1>
               <p className="text-gray-400 mb-8">Here's what's happening with your {type === 'user' ? 'devices' : type === 'enterprise' ? 'fleet' : 'store'} today.</p>

               {/* Dashboard Widgets Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                   {/* Summary Card 1 */}
                   <div className="bg-[#150a0a] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                       <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${config.color}`}>
                           <SummaryIcon size={64} />
                       </div>
                       <h3 className="text-gray-400 text-sm font-medium mb-1">{type === 'user' ? 'Active Devices' : type === 'enterprise' ? 'Total Units' : 'New Orders'}</h3>
                       <div className="text-3xl font-bold text-white mb-2">{type === 'user' ? '4' : type === 'enterprise' ? '128' : '24'}</div>
                       <div className={`text-xs font-medium ${config.color} flex items-center gap-1`}>
                           +12% <span className="text-gray-500">from last month</span>
                       </div>
                   </div>

                   {/* Summary Card 2 */}
                   <div className="bg-[#150a0a] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                       <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${config.color}`}>
                           <ActivityIcon type={type} size={64} />
                       </div>
                       <h3 className="text-gray-400 text-sm font-medium mb-1">{type === 'user' ? 'Energy Saved' : type === 'enterprise' ? 'System Uptime' : 'Revenue'}</h3>
                       <div className="text-3xl font-bold text-white mb-2">{type === 'user' ? '145 kWh' : type === 'enterprise' ? '99.9%' : '₹45.2k'}</div>
                       <div className={`text-xs font-medium ${config.color} flex items-center gap-1`}>
                           +5% <span className="text-gray-500">efficiency</span>
                       </div>
                   </div>

                    {/* Action Card */}
                   <div className={`bg-gradient-to-br ${type === 'user' ? 'from-orange-900/40 to-orange-900/10' : type === 'enterprise' ? 'from-rose-900/40 to-rose-900/10' : 'from-amber-900/40 to-amber-900/10'} border border-white/10 rounded-2xl p-6 flex flex-col justify-between`}>
                       <div>
                           <h3 className="text-white font-semibold mb-1">Quick Action</h3>
                           <p className="text-gray-400 text-sm mb-4">
                               {type === 'user' ? 'Start a new drying cycle.' : type === 'enterprise' ? 'Generate monthly report.' : 'Add new product.'}
                           </p>
                       </div>
                       <button className={`w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/5`}>
                           {type === 'user' ? 'Start Cycle' : type === 'enterprise' ? 'Export CSV' : 'Add Item'}
                       </button>
                   </div>
               </div>

               {/* Activity Table */}
               <div className="bg-[#150a0a] border border-white/10 rounded-2xl overflow-hidden">
                   <div className="p-6 border-b border-white/10 flex items-center justify-between">
                       <h3 className="font-semibold text-lg">Recent Activity</h3>
                       <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">View all <ChevronRight size={14}/></button>
                   </div>
                   <div className="overflow-x-auto">
                       <table className="w-full text-left text-sm text-gray-400">
                           <thead className="bg-white/5 text-gray-200 font-medium">
                               <tr>
                                   <th className="px-6 py-4">Item/Event</th>
                                   <th className="px-6 py-4">Status</th>
                                   <th className="px-6 py-4">Date</th>
                                   <th className="px-6 py-4 text-right">Action</th>
                               </tr>
                           </thead>
                           <tbody className="divide-y divide-white/5">
                               {[1, 2, 3].map((i) => (
                                   <tr key={i} className="hover:bg-white/5 transition-colors">
                                       <td className="px-6 py-4 text-white font-medium">
                                           {type === 'user' ? `Drying Cycle #${2020+i}` : type === 'enterprise' ? `Server Maintenance ${i}` : `Order #${5520+i}`}
                                           <div className="text-xs text-gray-500 font-normal">Details about the specific event...</div>
                                       </td>
                                       <td className="px-6 py-4">
                                           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${i === 2 ? 'bg-red-500/10 text-red-400' : 'bg-orange-500/10 text-orange-400'}`}>
                                               {i === 2 ? 'Failed' : 'Completed'}
                                           </span>
                                       </td>
                                       <td className="px-6 py-4">Oct {18+i}, 2024</td>
                                       <td className="px-6 py-4 text-right">
                                           <button className="text-gray-400 hover:text-white">...</button>
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0504] text-white font-sans flex flex-col">
      {/* Top Header */}
      <header className="h-16 bg-[#150a0a]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 lg:px-8 fixed top-0 right-0 left-0 lg:left-64 z-30 transition-all duration-300">
        <div className="flex items-center gap-4">
           {/* Mobile Menu Toggle */}
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-1 text-gray-400 hover:text-white">
             {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
           </button>
           
           {/* Mobile Logo */}
           <div className="lg:hidden flex items-center gap-3">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-0.5">
               <Logo className="w-full h-full"/>
             </div>
             <span className="font-bold text-lg tracking-wide">AgriDry Pro</span>
           </div>

           {/* Breadcrumb / Title (Desktop) */}
           <div className="hidden lg:block text-gray-400 text-sm">
              Dashboard / <span className="text-white capitalize">{activeTab}</span>
           </div>
        </div>

        {/* Top Search / Actions */}
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-64 focus-within:ring-1 focus-within:ring-orange-500/50 transition-all">
                <Search size={16} className="text-gray-400 mr-2" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500 text-white"/>
            </div>
            
            <button className="p-2 text-gray-400 hover:text-white relative hover:bg-white/5 rounded-full transition-colors">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            
            <div className="h-8 w-px bg-white/10 mx-1 hidden md:block"></div>
            
            {/* User Profile Trigger */}
            <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 hover:bg-white/5 rounded-full pl-1.5 pr-3 py-1 transition-colors border border-transparent hover:border-white/10 focus:outline-none"
            >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${config.bgColor} ${config.color} font-bold text-xs border border-white/10`}>
                    {config.initials}
                </div>
                <span className="hidden md:block text-sm text-gray-300 font-medium">{config.name.split(' ')[0]}</span>
                <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 pt-16 min-h-screen relative">
        
        {/* Sidebar Navigation */}
        <aside className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#150a0a] border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col shadow-2xl lg:shadow-none`}>
           {/* Sidebar Logo */}
           <div className="h-16 flex items-center gap-3 px-6 border-b border-white/10 bg-[#0c0504]">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-0.5">
               <Logo className="w-full h-full"/>
             </div>
             <span className="font-bold text-lg tracking-wide text-white">AgriDry Pro</span>
           </div>

           <div className="p-4 space-y-1 overflow-y-auto flex-1 mt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">MENU</div>
              {config.navItems.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => {
                        setActiveTab(item.id as Tab);
                        setIsMobileMenuOpen(false);
                        setIsProfileOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === item.id 
                        ? `bg-white/5 text-white border-l-2 ${config.borderColor.replace('border-', 'border-l-')}` 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                      <item.icon size={18} className={activeTab === item.id ? config.color : ''} />
                      {item.label}
                  </button>
              ))}
           </div>
           
           <div className="mt-auto p-4 border-t border-white/10">
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
                  <LogOut size={18} />
                  Log out
              </button>
           </div>
        </aside>

        {/* Center Content Area */}
        <main className="flex-1 p-4 lg:p-8 bg-[#0c0504] overflow-visible w-full lg:ml-64">
           <div className="max-w-7xl mx-auto animate-fade-in-up">
              {renderContent()}
           </div>
        </main>

        {/* Right Sidebar - User Details - Toggleable Drawer */}
        <aside 
            className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-[#150a0a] border-l border-white/10 p-6 flex-shrink-0 z-40 transform transition-transform duration-300 ease-in-out shadow-[-10px_0_30px_rgba(0,0,0,0.5)] overflow-y-auto ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* User Profile Card */}
            <div className={`rounded-2xl p-6 text-center mb-8 ${config.bgColor} border ${config.borderColor} relative overflow-hidden`}>
                <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20">
                    {config.initials}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 ${config.color} mb-2`}>
                    {config.role}
                </div>
                <h2 className="text-lg font-bold text-white mb-1">{config.name}</h2>
                <p className="text-xs text-gray-400 mb-1">{config.email}</p>
                <p className="text-xs text-gray-500 mb-6">ID: 88349201</p>
                
                <button onClick={onLogout} className="text-sm font-medium text-white hover:underline flex items-center justify-center gap-1 mx-auto">
                    Sign out <LogOut size={14}/>
                </button>
            </div>

            {/* Payment / Shortcut Card */}
            <div className={`rounded-2xl p-6 mb-8 bg-[#1f1010] border border-white/10`}>
                <h3 className="text-sm font-semibold text-gray-300 mb-4">Payment Method</h3>
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-[-4px] opacity-80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                    </div>
                    <span className="text-sm text-gray-400">•••• 4242</span>
                </div>
                <div className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded inline-block">Valid</div>
            </div>

            {/* Shortcuts */}
            <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-4">Shortcuts</h3>
                <div className="grid grid-cols-3 gap-3">
                    <ShortcutButton 
                        icon={FileText} 
                        label="Invoices" 
                        onClick={() => {
                            setActiveTab('reports');
                            setIsProfileOpen(false);
                        }}
                    />
                    <ShortcutButton 
                        icon={HelpCircle} 
                        label="Support" 
                        onClick={() => {
                            setActiveTab('support');
                            setIsProfileOpen(false);
                        }}
                    />
                    <ShortcutButton 
                        icon={Settings} 
                        label="Config" 
                        onClick={() => {
                            setActiveTab('settings');
                            setIsProfileOpen(false);
                        }}
                    />
                </div>
            </div>

        </aside>
        
        {/* Overlay to close profile sidebar on mobile/desktop when clicking outside */}
        {isProfileOpen && (
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-30"
                onClick={() => setIsProfileOpen(false)}
            />
        )}

      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Sub-Views for Devices, Reports, E-Connect
// ----------------------------------------------------------------------

const DevicesView: React.FC = () => {
    const devices = [
        { id: 'AG-201', name: 'Solar Dryer Unit A1', status: 'Running', temp: '45°C', humidity: '12%', signal: 95 },
        { id: 'AG-202', name: 'Solar Dryer Unit A2', status: 'Idle', temp: '28°C', humidity: '45%', signal: 88 },
        { id: 'AG-203', name: 'Hybrid Dryer B1', status: 'Running', temp: '52°C', humidity: '18%', signal: 72 },
        { id: 'AG-204', name: 'Eco-Dry Mini', status: 'Maintenance', temp: '--', humidity: '--', signal: 0 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">My Devices</h2>
                    <p className="text-gray-400">Manage your connected AgriDry Pro units.</p>
                </div>
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    + Add New Device
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {devices.map(device => (
                    <div key={device.id} className="bg-[#150a0a] border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${device.status === 'Running' ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-gray-400'}`}>
                                    <Wifi size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{device.name}</h3>
                                    <p className="text-xs text-gray-500">ID: {device.id}</p>
                                </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                device.status === 'Running' ? 'bg-orange-500/10 text-orange-400' : 
                                device.status === 'Idle' ? 'bg-amber-500/10 text-amber-400' : 'bg-red-500/10 text-red-400'
                            }`}>
                                {device.status}
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="bg-white/5 rounded-lg p-2 text-center">
                                <div className="text-xs text-gray-500 mb-1 flex items-center justify-center gap-1"><Thermometer size={10}/> Temp</div>
                                <div className="font-semibold text-sm">{device.temp}</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-2 text-center">
                                <div className="text-xs text-gray-500 mb-1 flex items-center justify-center gap-1"><Droplets size={10}/> Moisture</div>
                                <div className="font-semibold text-sm">{device.humidity}</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-2 text-center">
                                <div className="text-xs text-gray-500 mb-1 flex items-center justify-center gap-1"><Signal size={10}/> Signal</div>
                                <div className="font-semibold text-sm">{device.signal > 0 ? `${device.signal}%` : '--'}</div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                             <button className="flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-sm font-medium text-gray-300 transition-colors flex items-center justify-center gap-2">
                                <Settings size={14} /> Configure
                             </button>
                             <button className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${device.status === 'Running' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-orange-500/10 text-orange-400 hover:bg-orange-500/20'}`}>
                                <Power size={14} /> {device.status === 'Running' ? 'Stop' : 'Start'}
                             </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ReportsView: React.FC = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Analytics & Reports</h2>
                <p className="text-gray-400">Visualize drying cycles and download logs.</p>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-[#150a0a] border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Moisture Reduction Efficiency</h3>
                    <select className="bg-white/5 border border-white/10 rounded-lg text-xs px-3 py-1.5 outline-none text-gray-300">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Year</option>
                    </select>
                </div>
                <div className="h-64 flex items-end justify-between px-2 gap-2">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 65, 90].map((h, i) => (
                        <div key={i} className="w-full bg-orange-900/20 rounded-t-sm relative group">
                            <div 
                                style={{ height: `${h}%` }} 
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm transition-all duration-500 group-hover:from-orange-500 group-hover:to-rose-300"
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500 px-2">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
            </div>

            {/* Reports List */}
            <div className="bg-[#150a0a] border border-white/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/10 bg-white/5">
                    <h3 className="font-semibold text-sm">Download Logs</h3>
                </div>
                <div className="divide-y divide-white/5">
                    {[
                        { name: 'October 2024 - Full Cycle Report', size: '2.4 MB', date: 'Oct 31, 2024' },
                        { name: 'September 2024 - Performance Audit', size: '1.8 MB', date: 'Sep 30, 2024' },
                        { name: 'August 2024 - Sensor Data Log', size: '3.2 MB', date: 'Aug 31, 2024' },
                    ].map((file, i) => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-200">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.date} • {file.size}</p>
                                </div>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/10">
                                <Download size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const EConnectView: React.FC = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">E-Connect Global Network</h2>
                <p className="text-gray-400">Monitor connection stability and server status.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map Placeholder */}
                <div className="lg:col-span-2 bg-[#150a0a] border border-white/10 rounded-xl p-6 h-80 relative overflow-hidden flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-80 bg-blend-overlay">
                     <div className="absolute inset-0 bg-[#0c0504]/80"></div>
                     <div className="relative z-10 text-center">
                        <Globe size={48} className="text-orange-500 mx-auto mb-2 opacity-50" />
                        <p className="text-gray-400 text-sm">Interactive Map Unavailable in Preview</p>
                     </div>
                     {/* Fake Pins */}
                     <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                     <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-orange-500 rounded-full"></div>
                     
                     <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-orange-500 rounded-full animate-ping delay-700"></div>
                     <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>

                {/* Status Cards */}
                <div className="space-y-4">
                    <div className="bg-[#150a0a] border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Server className="text-orange-400" size={20} />
                            <h3 className="font-semibold">Server Status</h3>
                        </div>
                        <div className="text-2xl font-bold text-orange-400 mb-1">Online</div>
                        <p className="text-xs text-gray-500">Latency: 24ms • Uptime: 99.99%</p>
                    </div>

                    <div className="bg-[#150a0a] border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Wifi className="text-rose-400" size={20} />
                            <h3 className="font-semibold">Network Strength</h3>
                        </div>
                        <div className="text-2xl font-bold text-rose-400 mb-1">Excellent</div>
                        <p className="text-xs text-gray-500">Signal: -65dBm • 4G LTE / WiFi</p>
                    </div>

                    <div className="bg-[#150a0a] border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <MapPin className="text-amber-400" size={20} />
                            <h3 className="font-semibold">GPS Sync</h3>
                        </div>
                        <div className="text-2xl font-bold text-amber-400 mb-1">Active</div>
                        <p className="text-xs text-gray-500">Last synced: 2 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HelpSupportView: React.FC = () => {
    return (
        <div className="space-y-8 pb-8">
            <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">Help & Support</h2>
                <p className="text-gray-400">
                    Get the most out of your AgriDry Pro system. Browse guides, troubleshooting tips, and FAQs.
                </p>
            </div>

            {/* User Guides Section */}
            <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                    <BookOpen size={20} /> User Guides
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: 'Quick Start Guide', desc: 'Set up your AgriDry Pro in 5 minutes.', icon: Wifi },
                        { title: 'Maintenance Manual', desc: 'Cleaning and sensor calibration tips.', icon: Wrench },
                        { title: 'App Connectivity', desc: 'Connecting to WiFi/4G networks.', icon: Signal },
                    ].map((guide, idx) => (
                        <div key={idx} className="bg-[#150a0a] border border-white/10 hover:border-orange-500/30 rounded-xl p-5 cursor-pointer group transition-all">
                            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors">
                                <guide.icon size={20} />
                            </div>
                            <h4 className="font-medium text-white mb-1 group-hover:text-orange-300 transition-colors">{guide.title}</h4>
                            <p className="text-xs text-gray-400">{guide.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs Section */}
            <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                    <HelpCircle size={20} /> Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                    {[
                        { q: 'How do I reset my AgriDry Pro unit?', a: 'Press and hold the power button for 10 seconds until the LED flashes blue.' },
                        { q: 'What is the optimal moisture level for paddy?', a: 'For long-term storage, 12-14% moisture content is recommended.' },
                        { q: 'Why is my device showing "Offline"?', a: 'Check your local network connection. If using 4G, ensure the SIM card has data.' },
                        { q: 'How often should I clean the air filters?', a: 'We recommend cleaning the intake filters after every 5 drying cycles.' },
                    ].map((faq, idx) => (
                        <details key={idx} className="group bg-[#150a0a] border border-white/10 rounded-xl overflow-hidden open:border-orange-500/30 transition-all">
                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 select-none">
                                <span className="font-medium text-sm md:text-base text-gray-200 group-hover:text-white">{faq.q}</span>
                                <ChevronDown size={16} className="text-gray-500 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-sm text-gray-400 border-t border-transparent group-open:border-white/5 group-open:pt-4">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-orange-900/20 to-rose-900/20 border border-orange-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                     <h4 className="text-lg font-semibold text-white mb-1">Still need help?</h4>
                     <p className="text-sm text-gray-400">Our support team is available Mon-Sat, 8am - 6pm.</p>
                 </div>
                 <div className="flex gap-3">
                     <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium transition-colors text-sm">
                         <MessageCircle size={18} /> Chat with Us
                     </button>
                     <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-sm">
                         <AlertTriangle size={18} /> Report Issue
                     </button>
                 </div>
            </div>
        </div>
    );
};

const ActivityIcon: React.FC<{type: string, size: number}> = ({type, size}) => {
    if (type === 'user') return <Wifi size={size} />;
    if (type === 'enterprise') return <Building2 size={size} />;
    return <CreditCard size={size} />;
}

const ShortcutButton: React.FC<{icon: any, label: string, onClick?: () => void}> = ({icon: Icon, label, onClick}) => (
    <button onClick={onClick} className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 cursor-pointer active:scale-95">
        <Icon size={20} className="text-gray-400" />
        <span className="text-xs text-gray-400">{label}</span>
    </button>
)

export default Dashboard;