
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { User, Lock } from "lucide-react";

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
    <div className="form-container" style={{ width: '100%', maxWidth: '450px' }}>
      <h2 className="form-title">Welcome Back</h2>
      <p className="text-center" style={{ marginBottom: '2rem' }}>Enter your credentials to access your Seva Sarthi account</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <div style={{ position: 'relative' }}>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{ paddingLeft: '45px' }}
              required
            />
            <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor="password" className="form-label">Password</label>
            <Link to="/forgot-password" style={{ color: 'var(--accent-blue)', fontWeight: 500, fontSize: '0.875rem' }}>
              Forgot password?
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={{ paddingLeft: '45px' }}
              required
            />
            <Lock size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="button button-primary form-button" 
          disabled={isLoading}
          style={{ marginTop: '1.5rem' }}
        >
          {isLoading ? "Logging in..." : "Login to Account"}
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
