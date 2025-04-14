
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Seva Sarthi</h3>
            <p className="text-gray-300 mb-4">Simplifying citizen services with digital solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/apply" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/track" className="text-gray-300 hover:text-white">Track Applications</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/apply/birth-certificate" className="text-gray-300 hover:text-white">Birth Certificate</Link></li>
              <li><Link to="/apply/income-certificate" className="text-gray-300 hover:text-white">Income Certificate</Link></li>
              <li><Link to="/apply/caste-certificate" className="text-gray-300 hover:text-white">Caste Certificate</Link></li>
              <li><Link to="/apply/residence-certificate" className="text-gray-300 hover:text-white">Residence Certificate</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-300">support@sevasarthi.gov.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-300">1800-123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Seva Sarthi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/help" className="text-gray-300 hover:text-white text-sm">
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
