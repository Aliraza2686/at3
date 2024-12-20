import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { persistor } from './store/store';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Toaster } from 'react-hot-toast';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
            <MantineProvider withGlobalStyles withNormalizeCSS>
            <Toaster position="top-center" reverseOrder={false} />
               <App />
               </MantineProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
