import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/styles.scss';
import { ThemeProvider } from './hooks/useTheme/useTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
