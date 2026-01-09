// file: src/index.tsx (hoặc main.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- Thêm dòng này
import './i18n'; // <--- Import i18n configuration
import App from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- Bọc App bằng cái này */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);