import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({ 
  children, 
  isLoading, 
  icon, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 disabled:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={20} />
      ) : icon}
      {children}
    </button>
  );
}

export default Button;