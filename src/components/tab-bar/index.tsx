import React, { useState } from 'react';
import './index.scss';
import { TabBar } from 'antd-mobile';

import {
  useNavigate,
  useLocation,
} from 'react-router-dom';

// TabBar 配置
const tabs = [
  {
    url: '/home',
    title: '首页',
    icon: { uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' },
    selectedIcon: { uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' }
  },
  {
    url: '/message',
    title: '消息',
    // todo f
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
    }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
    }}
    />,
  },
  {
    url: '/my',
    title: '我的',
    icon: { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' },
    selectedIcon: { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' },
  }
];

const Bottom = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log('navigate', navigate);
  console.log('pathname', pathname);
  const [selectedTab, setSelectedTab] = useState('/home');

  // 切换tab
  const changeTab = (item) => {
    navigate(item.url);
  };

  return (
    <TabBar
      barTintColor="white"
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
    >
      {tabs.map(item => (
        <TabBar.Item
          key={item.url}
          icon={item.icon}
          selectedIcon={item.selectedIcon}
          title={item.title}
          selected={selectedTab === item.url}
          onPress={() => {
            changeTab(item);
          }}
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
