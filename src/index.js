import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import './index.css';
import api from './middleware/api'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers, compose(applyMiddleware(api)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
