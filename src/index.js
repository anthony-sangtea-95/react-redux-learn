import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import counterReducer from './slices/counterSlice';
import loggedSlice from './slices/loggedSlice';
// import allReducer from './reducers';


const store = configureStore ({
  reducer : {
    'counter': counterReducer,
    'isLogged': loggedSlice,
  },
  // other slice
}
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider >
);
