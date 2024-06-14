import axios from 'axios';
import { useEffect } from 'react';

const MainPage = () => {
  const BOT_TOKEN = '7100467674:AAGovrdVdIQ9b5UzpKgqJUYSYPNN8ZD9i20';
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

  const setWebhook = async () => {
    try {
      const url = 'http://localhost:4000';
      await axios.post(`${TELEGRAM_API}/setWebhook`, { url });
      console.log('Webhook set successfully');
    } catch (error) {
      console.error('Error setting webhook:', error);
    }
  };

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Initialize Telegram Web Apps SDK
      window.Telegram.WebApp.ready();
      // Customize the appearance of the Web App
      window.Telegram.WebApp.setHeaderColor('#f5f5f5');
      window.Telegram.WebApp.setBackgroundColor('#ffffff');
      setWebhook();
    } else {
      console.error('Telegram Web Apps SDK not found');
    }
  }, []);

  return <div>hello telegram mini app</div>;
};

export default MainPage;
