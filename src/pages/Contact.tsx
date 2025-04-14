
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will respond shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <Layout>
      <section className="container section">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.125rem' }}>
            We're here to help! Reach out to us with any questions or feedback about our services.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "3rem",
          alignItems: "start"
        }}>
          <div>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--deep-purple) 100%)',
              borderRadius: '12px',
              padding: '2.5rem',
              color: 'white',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            }}>
              <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Get in Touch</h2>
              <p style={{ marginBottom: '2rem' }}>
                Have questions about our services? Our team is ready to assist you.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Email</div>
                    <div>support@sevasarthi.gov.in</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Phone</div>
                    <div>1800-123-4567</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Address</div>
                    <div>123 Government Complex, New Delhi, India</div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Office Hours</h3>
                <p style={{ marginBottom: '0.5rem' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p style={{ marginBottom: '0.5rem' }}>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="form-container" style={{ padding: '2.5rem' }}>
            <h3 className="form-title">Send us a message</h3>
            
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
                  <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
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
                  <Mail size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ paddingLeft: '45px' }}
                  />
                  <Phone size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={5}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ resize: 'vertical', borderRadius: '15px' }}
                />
              </div>
              
              <button 
                type="submit" 
                className="button button-secondary form-button" 
                disabled={isLoading}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                {isLoading ? "Sending..." : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
