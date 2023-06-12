import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../pages/home/index';

const Message = lazy(() => import('../pages/message/index'));
const MessageChild = lazy(() => import('../pages/message/child/index'));
const My = lazy(() => import('../pages/my/index'));
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
    path: '/message',
    element: (
      <Suspense>
        <Message/>
      </Suspense>
    ),
    children: [
      {
        path: 'child',
        element: (
          <Suspense>
            <MessageChild/>
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/my',
    element: <My/>
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
