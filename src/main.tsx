import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { BrowserRouter } from 'react-router-dom';


ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Theme>
      <App />
    </Theme>
    </BrowserRouter>
  </React.StrictMode>,
)
