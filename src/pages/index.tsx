import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Initialize Telegram Web Apps SDK
      window.Telegram.WebApp.ready();
      // Customize the appearance of the Web App
      window.Telegram.WebApp.setHeaderColor('#f5f5f5');
      window.Telegram.WebApp.setBackgroundColor('#ffffff');
    } else {
      console.error('Telegram Web Apps SDK not found');
    }
  }, []);

  return <div>hello telegram mini app</div>;
};

export default MainPage;
