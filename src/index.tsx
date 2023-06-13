import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.scss';
import './index.scss';
import Reducers from './redux/reducers';
import App from './App';

const store = createStore(
  Reducers
);

ReactDom.createRoot(
  document.getElementById('root')
).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
