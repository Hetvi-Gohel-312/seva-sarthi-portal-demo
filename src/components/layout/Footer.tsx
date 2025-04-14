
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <Link to="/" className="footer-logo">
              <div className="logo-circle">
                <span>SS</span>
              </div>
              <span>Seva Sarthi</span>
            </Link>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
              Digital platform for citizen services and grievance management
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s'
              }}>
                <Facebook size={18} />
              </a>
              <a href="#" style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s'
              }}>
                <Twitter size={18} />
              </a>
              <a href="#" style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s'
              }}>
                <Instagram size={18} />
              </a>
              <a href="#" style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s'
              }}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/track">Track Status</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/services/grievance">Submit Grievance</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/grievance">Grievance Submission</Link></li>
              <li><Link to="/services/announcements">Public Announcements</Link></li>
              <li><Link to="/apply/birth-certificate">Birth Certificate</Link></li>
              <li><Link to="/apply/income-certificate">Income Certificate</Link></li>
              <li><Link to="/apply/caste-certificate">Caste Certificate</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <MapPin size={18} />
              123 Government Complex, New Delhi
            </p>
            <p>
              <Phone size={18} />
              1800-123-4567
            </p>
            <p>
              <Mail size={18} />
              support@sevasarthi.gov.in
            </p>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Seva Sarthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
