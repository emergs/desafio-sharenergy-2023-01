import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Providers from './contexts/providers';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
