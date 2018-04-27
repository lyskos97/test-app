import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const WrappedApp = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(WrappedApp, document.getElementById('root'));
registerServiceWorker();
