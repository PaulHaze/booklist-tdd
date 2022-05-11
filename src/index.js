import React from 'react';
import ReactDOM from 'react-dom/client';

// NAVIGATION
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';

//* REDUX - Uncomment to add redux functionality
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/main.scss';

// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
