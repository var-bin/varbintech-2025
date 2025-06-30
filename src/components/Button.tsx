import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700 shadow-sm',
    outline: 'bg-transparent border border-neutral-900 text-neutral-900 hover:bg-neutral-50',
    text: 'bg-transparent text-neutral-900 hover:text-neutral-700 hover:bg-neutral-50',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 space-x-1.5',
    md: 'text-sm px-4 py-2 space-x-2',
    lg: 'text-base px-6 py-3 space-x-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href && !onClick) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};