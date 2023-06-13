import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Routes, Route } from 'react-router-dom';
import WrappedRoutes from './router/index';
// import { routes } from './router/index';
import TabBar from './components/tab-bar/index';

// 渲染路由
/*const routerView = (routes) => {
  if (routes && routes.length) {
    return routes.map(({ path, element, children, exact }) => {
      return children && children.length ?
        (
          <Route path={path}
                 key={path}
                 exact={exact}
                 element={element}
          >
            {routerView(children)} // 递归遍历子路由
          </Route>
        )
        :
        (
          <Route key={path}
                 path={path}
                 exact={exact}
                 element={element}
          >
          </Route>
        );
    });
  }
};*/

function App() {
  let uLocation = useLocation();
  const [urlPath, setUrlPath] = useState(uLocation.pathname);

  // 监听路由变化
  useEffect(() => {
    setUrlPath(uLocation.pathname);
  }, [uLocation]);

  return (
    <div className="base-layout">
      <nav className="nav-bar">
        <NavLink to="/">首页</NavLink>
        <NavLink to="/my">我的</NavLink>
      </nav>

      {/* <Routes>
         {routerView(routes)}
      </Routes>*/}

      <WrappedRoutes/>
      <TabBar/>
    </div>
  );
}

export default App;
