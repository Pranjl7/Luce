import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { ClerkProvider } from '@clerk/clerk-react';
import Root from './Root';

// CLERK PUBLISHABLE KEY
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Root />
    </ClerkProvider>
  </BrowserRouter>
);
