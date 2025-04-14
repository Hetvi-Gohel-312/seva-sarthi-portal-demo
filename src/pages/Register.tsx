
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <div className="container section">
        <h1 className="text-center">Create New Account</h1>
        <div className="flex justify-center">
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
