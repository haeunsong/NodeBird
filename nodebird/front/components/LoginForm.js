import React, { useCallback } from 'react';
import Link from 'next/link';
import { useInput } from '../pages/signup';


import {Form,Input,Button} from 'antd';

const LoginForm = () => {

  const [id,onChangeId] = useInput('');
  const [password,onChangePassword] = useInput('');

  const onFinishForm = useCallback((e) => {
    e.prevent.default();
    console.log({
      id, password,
    })
  },[id,password]);
  
  return (
    <div>
      <Form onFinish={onFinishForm} style={{padding: '10px'}}>
              <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input name='user-id' value={id} onChange={onChangeId}  required />
              </div>
              <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />
              </div>
              <div>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
              </div>
            </Form>
      
    </div>
  );
};

export default LoginForm;