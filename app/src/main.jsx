import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './main.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true,
  duration: 400, // animation duration in ms
  easing: 'ease-out', // easing function
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
