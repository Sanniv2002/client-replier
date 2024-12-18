interface Environment {
  enableCustomThreadEmail: boolean;
  defaultThreadEmail: string;
  apiUrl: string;
}

export const env: Environment = {
  enableCustomThreadEmail: import.meta.env.VITE_ENABLE_CUSTOM_THREAD_EMAIL === 'true',
  defaultThreadEmail: import.meta.env.VITE_DEFAULT_THREAD_EMAIL || 'default@wellfound.com',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000'
};