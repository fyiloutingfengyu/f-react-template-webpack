import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonAction from '../redux/actions/common';

const Home = (props) => {
  useEffect(() => {
    console.log(666);
    props.actions.startLoading();
  }, []);

  const { isLoading } = props;
  console.log('isLoading', isLoading);

  return (
    <div>
      <button>test</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.common };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 通过 bindActionCreators 将actions包装成可以直接被调用的函数
    actions: bindActionCreators(commonAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
