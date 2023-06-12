import React from 'react';
import './index.scss';
import { TabBar } from 'antd-mobile';

import {
  useNavigate,
  useLocation,
} from 'react-router-dom';

import {
  AppOutline,
  MessageOutline,
  UserOutline,
} from 'antd-mobile-icons';

const tabs = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline/>,
  },
  {
    key: '/message/child',
    title: '消息',
    icon: <MessageOutline/>,
  },
  {
    key: '/my',
    title: '我的',
    icon: <UserOutline/>,
  },
];

const Bottom = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log('navigate', navigate);
  console.log('pathname', pathname);

  // 切换tab
  const changeTab = (value) => {
    navigate(value);
  };

  return (
    <TabBar
      activeKey={pathname}
      onChange={value => changeTab(value)}
      safeArea={true}
    >
      {tabs.map(item => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </TabBar>
  );
};

export default function CustomTabBar() {
  return (
    <div className="tab-bar">
      <Bottom/>
    </div>
  );
}
