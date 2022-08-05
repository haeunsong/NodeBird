import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { Input, Menu, Row, Col, Card, Avatar } from 'antd';
import UserProfile from './UserProfile';

// 아직 서버로부터 받을 데이터가 없어서 받을 데이터 예상해서 가짜로 데이터 만들기
const dummy = {
  nickname: '호야',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      {/* 전체화면이 24 
      12면 절반 차지 
      xs - 모바일 (작은화면에선 한줄 다 차지하게)
      md - 데스크탑 
      => 자동으로 반응형 됨*/}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* 로그인 되어있으면 */}
          {dummy.isLoggedIn
            ? <UserProfile />
            : <LoginForm />
          }
        </Col>

        <Col xs={24} md={12}>{children}</Col>
        

        <Col xs={24} md={6}>Made by who?(zerocho) </Col>
      </Row>


    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout;