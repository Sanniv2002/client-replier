import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
}

function StatusMessage({ type, message }: StatusMessageProps) {
  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />
  };

  const styles = {
    success: 'bg-green-50 text-green-700',
    error: 'bg-red-50 text-red-700'
  };

  return (
    <div className={`mt-4 p-4 rounded-md flex items-center gap-2 animate-slideIn ${styles[type]}`}>
      {icons[type]}
      <p>{message}</p>
    </div>
  );
}

export default StatusMessage;