'use client';

import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type FormLogin = {
  username: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const handleLogin = (values: FormLogin) => {
    console.log(values);
    router.push('/quan-ly-nhan-vien');
  };

  return (
    <Card
      className="grid place-items-center w-full h-full max-w-[1000px]"
      bodyStyle={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Row className="w-full" align="middle">
        <Col span={11}>
          <Image
            src="/imgs/login.avif"
            width="200"
            height="300"
            className="w-full h-full max-h-[400px]"
            alt="Illustration Login"
          />
        </Col>
        <Col span={12}>
          <h2 className="text-text font-semibold text-[22px] text-center mb-10">
            Đăng nhập
          </h2>
          <Form
            form={form}
            onFinish={handleLogin}
            className="w-full"
            labelCol={{ span: 10 }}
            colon={false}
            size="large"
            validateTrigger="onBlur"
          >
            <Form.Item
              hasFeedback
              label={
                <span className="text-text font-semibold text-md">
                  Tên đăng nhập
                </span>
              }
              className="text-bold"
              name="username"
              rules={[
                { required: true, message: 'Username không được để trống' },
              ]}
            >
              <Input className="text-[14px] flex items-center" />
            </Form.Item>
            <Form.Item
              hasFeedback
              label={
                <span className="text-text font-semibold text-md">
                  Mật khẩu
                </span>
              }
              className="text-bold"
              name="password"
              rules={[
                { required: true, message: 'Mật khẩu không được để trống' },
              ]}
            >
              <Input.Password className="text-[14px]" />
            </Form.Item>
            <div className="justify-center mt-2 w-full flex gap-x-4">
              <Button
                type="primary"
                size="middle"
                className="bg-primary"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
              <Button htmlType="reset" size="middle">
                Reset
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
