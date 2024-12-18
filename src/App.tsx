import { useState } from 'react';
import MessageForm from './components/MessageForm';
import Header from './components/Header';
import StatusMessage from './components/StatusMessage';
import { MessageStatus, MessageData } from './types/message';
import { sendMessage } from './services/messageService';

function App() {
  const [status, setStatus] = useState<MessageStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (data: MessageData) => {
    console.log("Sending")
    setStatus('sending');
    try {
      await sendMessage(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
          <MessageForm onSubmit={handleSubmit} status={status} />
          
          {status === 'error' && (
            <StatusMessage type="error" message={errorMessage} />
          )}
          
          {status === 'success' && (
            <StatusMessage type="success" message="Message sent successfully!" />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;