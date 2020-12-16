import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import passengerListReducer from './reducers/passengerList'
import './index.css';
import App from './App';

const store = createStore(
  passengerListReducer,
);

ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Provider>,
document.getElementById('root')
);