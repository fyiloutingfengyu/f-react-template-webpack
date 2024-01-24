import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd-mobile';
import * as commonAction from '../../redux/actions/common';
import './index.scss';

import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

const Home = (props) => {
  const { isLoading } = props;
  console.log('isLoading', isLoading);
  console.log(111, process.env.NODE_ENV);
  console.log(777, GLOBAL_ENV.REACT_APP_BUILD_ENV);
  console.log(779, GLOBAL_ENV);

  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const id = search.get('id');
  console.log('id', id);
  const locationObj = useLocation();
  console.log('useLocation', locationObj);

  useEffect(() => {
    props.actions.startLoading();
  }, []);

  const toMy = () => {
    navigate('/my');
  };

  const changeSearchParams = () => {
    setSearch('id=2');
  };

  return (
    <div className="container">
      <Button
        color="primary"
        className="rotation test-btn"
        onClick={() => toMy()}
      >
        to My page
      </Button>
      <Button onClick={() => changeSearchParams()}>change search</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.common };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 通过 bindActionCreators 将actions包装成可以直接被调用的函数
    // todo f
    actions: bindActionCreators(commonAction as any, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
