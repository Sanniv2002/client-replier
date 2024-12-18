import { MessageData, MessageFormErrors } from '../types/message';

export function validateMessage(data: MessageData): MessageFormErrors {
  const errors: MessageFormErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.threadEmail?.trim() && !emailRegex.test(data.threadEmail)) {
    errors.threadEmail = 'Please enter a valid email address';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
}