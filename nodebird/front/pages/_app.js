// 공통되는 layout부분 옮기기

import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';


// 모든 페이지에 공통적으로 적용, 모든 컴포넌트가 공유함

const NodeBird = ({ Component,store }) => {

  return (
    <>
      {/* 중복되는 부분 모아서 쓸데없이 리렌더링 되는 부분 해결! (위에 헤더) */}

      {/* 아래꺼 Provider 쓰면 에러남... cf.https://m.blog.naver.com/dlaxodud2388/222557737914 */}
      {/* 버전 바뀌고 컴포넌트에 별도의 Provider 설정을 안해도 wrapper에서 자체적으로 Provider까지 래핑 */}
      {/* <Provider store={store}>  */}

        <Head>
          <title>NodeBird</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.22.3/antd.compact.min.css" />
        </Head>
        <AppLayout>
          <Component />
        </AppLayout>
      {/* </Provider> */}


    </>

  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

// 이 부분은 이해안되도 일단 외우면 됨
// 모든 프로젝트에서 동일


export default withRedux((initialState,options)=> {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !=='undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  const store = createStore(reducer, initialState,enhancer);

  return store;
})(NodeBird);
