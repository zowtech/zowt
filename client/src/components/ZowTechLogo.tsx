interface ZowTechLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'icon' | 'full';
}

export function ZowTechLogo({ className = '', size = 'md', variant = 'horizontal' }: ZowTechLogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto', 
    lg: 'h-12 w-auto',
    xl: 'h-16 w-auto'
  };

  if (variant === 'icon') {
    return (
      <svg 
        className={`${sizeClasses[size]} ${className}`}
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle cx="20" cy="20" r="20" fill="url(#gradient1)" />
        
        {/* Z Shape */}
        <path 
          d="M12 14h12l-8 8h8v2H12l8-8H12v-2z" 
          fill="white" 
          stroke="none"
        />
        
        {/* Tech Elements */}
        <circle cx="16" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="24" cy="30" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="30" cy="16" r="0.5" fill="rgba(255,255,255,0.4)" />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg 
          className={sizeClasses[size]}
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="url(#gradient2)" />
          <path 
            d="M12 14h12l-8 8h8v2H12l8-8H12v-2z" 
            fill="white" 
            stroke="none"
          />
          <circle cx="16" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
          <circle cx="24" cy="30" r="1" fill="rgba(255,255,255,0.6)" />
          <circle cx="30" cy="16" r="0.5" fill="rgba(255,255,255,0.4)" />
          
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg leading-none">ZowTech</span>
          <span className="text-bright-blue text-xs font-mono leading-none">CYBER FORENSICS</span>
        </div>
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        className={size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : size === 'xl' ? 'h-12 w-12' : 'h-8 w-8'}
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="url(#gradient3)" />
        <path 
          d="M12 14h12l-8 8h8v2H12l8-8H12v-2z" 
          fill="white" 
          stroke="none"
        />
        <circle cx="16" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="24" cy="30" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="30" cy="16" r="0.5" fill="rgba(255,255,255,0.4)" />
        
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-white font-bold text-xl font-mono">ZowTech</span>
    </div>
  );
}