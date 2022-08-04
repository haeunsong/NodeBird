// 공통되는 layout부분 옮기기

import React, { Component } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const NodeBird = ({Component}) => {

  return (
    <>
    {/* 중복되는 부분 모아서 쓸데없이 리렌더링 되는 부분 해결! (위에 헤더) */}
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.22.3/antd.compact.min.css" />      
    </Head>
    <AppLayout>
      <Component />
    </AppLayout>
    </>
    
  );
};

export default NodeBird;
