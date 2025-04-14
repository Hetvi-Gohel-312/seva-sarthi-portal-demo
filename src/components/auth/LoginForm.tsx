
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would authenticate the user
      toast({
        title: "Login Successful",
        description: "You are now logged in to your account.",
      });
    }, 1500);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login to your account</h2>
      <p className="text-center">Enter your credentials to access your Seva Sarthi account</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <div className="flex justify-between">
            <label htmlFor="password" className="form-label">Password</label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="button button-primary form-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      
      <div className="form-footer">
        <p>
          Don't have an account?{" "}
          <Link to="/register">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
