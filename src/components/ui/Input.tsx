import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-md 
          transition-all duration-200 ease-in-out
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-500' : ''}
          ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 animate-slideIn">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;