
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Phone, Lock, CheckCircle } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would create the user account
      toast({
        title: "Registration Successful",
        description: "Your account has been created. You can now login.",
      });
    }, 1500);
  };

  return (
    <div className="form-container" style={{ width: '100%', maxWidth: '500px' }}>
      <h2 className="form-title">Create an Account</h2>
      <p className="text-center" style={{ marginBottom: '2rem' }}>Register to access Seva Sarthi services</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <div style={{ position: 'relative' }}>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              style={{ paddingLeft: '45px' }}
              required
            />
            <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
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
            <Mail size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Mobile Number</label>
          <div style={{ position: 'relative' }}>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-control"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              style={{ paddingLeft: '45px' }}
              required
            />
            <Phone size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              style={{ paddingLeft: '45px' }}
              required
            />
            <Lock size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ paddingLeft: '45px' }}
              required
            />
            <CheckCircle size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="button button-primary form-button" 
          disabled={isLoading}
          style={{ marginTop: '1.5rem' }}
        >
          {isLoading ? "Creating account..." : "Register"}
        </button>
      </form>
      
      <div className="form-footer">
        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
