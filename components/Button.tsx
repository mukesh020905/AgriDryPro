import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-200 text-sm";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    gradient: "bg-gradient-to-r from-orange-400 to-rose-500 text-white hover:opacity-90 shadow-lg shadow-orange-500/20",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;