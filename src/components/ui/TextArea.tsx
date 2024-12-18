import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
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

export default TextArea;