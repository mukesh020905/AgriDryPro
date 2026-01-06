import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Agridrypro Logo"
    >
      <circle cx="100" cy="100" r="100" fill="white"/>
      
      {/* Decorative Arc/Crescent */}
      <path 
        d="M 50 100 A 50 50 0 0 0 150 100" 
        fill="none" 
        stroke="black" 
        strokeWidth="4" 
        strokeLinecap="round"
        opacity="0.1"
      />

      {/* Stylized A Monogram */}
      <path 
        d="M 100 45 L 60 135 L 75 135 L 100 80 L 125 135 L 140 135 L 100 45 Z" 
        fill="black"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path 
         d="M 80 120 L 120 120"
         stroke="white"
         strokeWidth="4"
         strokeLinecap="round"
      />

      {/* Text Elements */}
      <text x="100" y="40" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="24" letterSpacing="4">AGRI</text>
      <text x="100" y="165" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="22" letterSpacing="1">DRYPRO</text>
      <text x="100" y="185" textAnchor="middle" fontFamily="sans-serif" fontWeight="500" fontSize="12" letterSpacing="2">.IN</text>
    </svg>
  );
};

export default Logo;