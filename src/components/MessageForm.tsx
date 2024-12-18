import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import { validateMessage } from '../utils/validation';
import { MessageData, MessageFormErrors, MessageStatus } from '../types/message';
import { env } from '../config/environment';

interface MessageFormProps {
  onSubmit: (data: MessageData) => Promise<void>;
  status: MessageStatus;
}

function MessageForm({ onSubmit, status }: MessageFormProps) {
  const [message, setMessage] = useState('');
  const [threadEmail, setThreadEmail] = useState('');
  const [errors, setErrors] = useState<MessageFormErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data: MessageData = {
      message: message.trim(),
      threadEmail: threadEmail.trim(),
    };

    const validationErrors = validateMessage(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    await onSubmit(data);
    if (status === 'success') {
      setMessage('');
      if (env.enableCustomThreadEmail) {
        setThreadEmail('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {env.enableCustomThreadEmail && (
        <Input
          label="Thread Email"
          id="threadEmail"
          type="email"
          value={threadEmail}
          onChange={(e) => setThreadEmail(e.target.value)}
          placeholder="Enter the Wellfound thread email"
          error={errors.threadEmail}
          required
        />
      )}

      <TextArea
        label="Message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder="Type your message here..."
        error={errors.message}
        required
      />

      <div className="space-y-2">
        <Button
          type="submit"
          isLoading={status === 'sending'}
          icon={<Send size={20} />}
          className="w-full"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
        
        {!env.enableCustomThreadEmail && (
          <p className="text-sm text-gray-500 text-center">
            Messages will be sent to the default thread email
          </p>
        )}
      </div>
    </form>
  );
}

export default MessageForm;