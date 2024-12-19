import { MessageData } from '../types/message';
import { env } from '../config/environment';

export async function sendMessage(data: MessageData): Promise<void> {
  // const threadEmail = env.enableCustomThreadEmail ? data.threadEmail : env.defaultThreadEmail;
  const apiUrl = env.apiUrl

  const response = await fetch(`${apiUrl}/send-candidate-message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: "966464014",
      message_body: data.message,
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send message');
  }
}