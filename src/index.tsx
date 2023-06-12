import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.scss';
import './index.scss';
import WrappedRoutes from './router/index';
import Reducers from './redux/reducers';
import TabBar from './components/tab-bar/index';

const store = createStore(
  Reducers
);

const routerDom = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="base-layout">
          <main>
            <WrappedRoutes/>
          </main>
          <TabBar/>
        </div>
      </Router>
    </Provider>
  );
};

ReactDom.createRoot(
  document.getElementById('root')
).render(routerDom());
