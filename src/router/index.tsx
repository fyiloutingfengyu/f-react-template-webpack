import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '../pages/home/index';
import About from '../pages/about/index';

let routes = [
  {
    path: '/',
    element: <Home/>,
    exact: true
  },
  {
    path: '/about',
    element: <About/>
  }
];

const WrappedRoutes = () => {
  return useRoutes(routes);
};

export default WrappedRoutes;
