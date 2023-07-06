import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { login } from "@/features/auth/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth.loading);

  const onFinish = async (values: any) => {
    try {
      const result = await dispatch(login(values));
      if (result?.error) {
        return message.error(result?.payload);
      }
      //if login is success redirect dashboard craft list
      router.push("/dashboard/crafts");
    } catch (err) {
      console.error(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
