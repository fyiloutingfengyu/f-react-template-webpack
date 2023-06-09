import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../pages/home/index';

const About = lazy(() => import('../pages/about/index'));
const AboutChild = lazy(() => import('../pages/about/child/index'));
const NotFound = lazy(() => import('../pages/not-found/index'));

let routes = [
  {
    path: '/',
    element: <Navigate to="/home"/>,
    exact: true
  },
  {
    path: '/home',
    element: <Home/>,
    exact: true
  },
  {
    path: '/about',
    element: (
      <Suspense>
        <About/>
      </Suspense>
    ),
    children: [
      {
        path: 'child',
        element: (
          <Suspense>
            <AboutChild/>
          </Suspense>
        )
      }
    ]
  },
  {
    path: '*',
    element: (
      <Suspense>
        <NotFound/>
      </Suspense>
    )
  }
];

const WrappedRoutes = () => {
  return useRoutes(routes);
};

export default WrappedRoutes;
