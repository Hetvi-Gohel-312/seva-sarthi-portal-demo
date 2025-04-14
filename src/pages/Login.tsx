
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="container section">
        <h1 className="text-center">Login to Your Account</h1>
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
