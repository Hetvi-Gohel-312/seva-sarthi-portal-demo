
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 className="footer-heading">Seva Sarthi</h3>
            <p>Simplifying citizen services with digital solutions.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/track">Track Applications</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Grievance Submission</Link></li>
              <li><Link to="/services">Digital Voting</Link></li>
              <li><Link to="/services">Service Requests</Link></li>
              <li><Link to="/services">Chatbot Assistance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links">
              <li>
                <span className="flex gap-2 items-center">
                  <Mail size={16} />
                  <span>support@sevasarthi.gov.in</span>
                </span>
              </li>
              <li>
                <span className="flex gap-2 items-center">
                  <Phone size={16} />
                  <span>1800-123-4567</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Seva Sarthi. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link> | 
            <Link to="/terms-of-service">Terms of Service</Link> | 
            <Link to="/help">Help & Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
