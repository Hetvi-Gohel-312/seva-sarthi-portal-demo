
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
