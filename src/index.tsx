import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import './styles/main.scss';
import './index.scss';
import Reducers from './redux/reducers';
import App from './App';

const store = createStore(
  Reducers,
  applyMiddleware(thunk)
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
