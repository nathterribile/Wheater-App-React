import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerProviders';

const rootElement = document.querySelector('[data-js="root"]');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const rootNode = createRoot(rootElement);
rootNode.render(
  <StrictMode>
    <BrowserRouter>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </BrowserRouter>
  </StrictMode>,
);
