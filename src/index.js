import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import './selectproduct.css'
import '../src/components/button/buttons.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
import { UserContextProvider } from './context/userContext'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
     <App />
     </UserContextProvider>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
