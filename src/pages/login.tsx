import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import apiAuth from '../api/auth';
const Login: React.FC = () => {
  const [captchaBase64,setCaptchaBase64] = useState('');
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const [loading, setLoading] = useState(false);

  const changeCaptcha = () => {
    setLoading(true);
    apiAuth.getCaptcha().then((res: any) => {
      setCaptchaBase64(res.data);
    }).finally(() => setLoading(false));
  };
  useEffect(() => {
     changeCaptcha();
   }, []);
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Verification Code" />
        {loading ? (
          <div style={{ height: 32, display: 'flex', alignItems: 'center' }}>
            Loading...
          </div>
        ) : (
          <img 
            src={captchaBase64} 
            alt="captcha" 
            style={{ height: 32 }}
            onError={(e) => e.currentTarget.style.display = 'none'}
          />
        )}
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="">Register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;