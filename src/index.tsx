import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.scss';
import WrappedRoutes from './router/index';
import Reducers from './redux/reducers';
import About from '@/pages/about/index.tsx'

const store = createStore(
  Reducers
);

const routerDom = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="base-layout">
          <header>
            <Link to="/">home</Link>
            <br/>
            <Link to="/about">about</Link>
          </header>
          <main>
            <WrappedRoutes/>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

ReactDom.createRoot(
  document.getElementById('root')
).render(routerDom());
