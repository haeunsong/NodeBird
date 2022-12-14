import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

// 커스텀 훅
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);

  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);

  return [value, handler];
};

const Signup = () => {

  // 커스텀 훅 사용시
  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');


  // 그냥 일반적으로
  // const [id,setId] = useState('');
  // const [nick,setNick] = useState('');
  // const [password,setPassword] = useState('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onFinish = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);
  // dep 도 넣어줘야 한다. 

  // const onChangeId = (e) => {
  //   setId(e.target.value);
  // };

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);


  return (
    <>
      <Form onFinish={onFinish} style={{ padding: 10 }}>
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br />
          <Input name='user-id' value={id} required onChange={onChangeId}></Input>
        </div>
        <div>
          <label htmlFor='user-nick'>닉네임</label>
          <br />
          <Input name='user-nick' value={nick} required onChange={onChangeNick}></Input>
        </div>
        <div>
          <label htmlFor='user-pass'>비밀번호</label>
          <br />
          <Input name='user-pass' value={password} type='password' required onChange={onChangePassword}></Input>
        </div>
        <div>
          <label htmlFor='user-password-check'>비밀번호 체크 </label>
          <br />
          <Input name='user-password-check' value={passwordCheck} type='password' required onChange={onChangePasswordCheck}></Input>
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}

        </div>
        <div>
          <Checkbox name='user-term' value={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type='primary' htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </>

  );
};

export default Signup;