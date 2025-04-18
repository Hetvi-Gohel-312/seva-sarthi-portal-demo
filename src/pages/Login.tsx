
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
