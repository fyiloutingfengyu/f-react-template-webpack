import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonAction from '../../redux/actions/common';
import './index.scss';

const Home = (props) => {
  console.log(666,process.env.NODE_ENV);

  useEffect(() => {
    props.actions.startLoading();
  }, []);

  const { isLoading } = props;
  console.log('isLoading', isLoading);

  return (
    <div className="container">
      <button className="rotation test-btn">test</button>
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
