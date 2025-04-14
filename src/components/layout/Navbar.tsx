
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-circle">
            <span>SS</span>
          </div>
          <span>Seva Sarthi</span>
        </Link>
        
        {/* Navigation menu */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="navbar-links">
            <Link 
              to="/" 
              className={isActive('/')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={isActive('/services')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/track" 
              className={isActive('/track')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Track Status
            </Link>
            <Link 
              to="/contact" 
              className={isActive('/contact')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="dropdown">
              <div className="dropdown-trigger">
                <span>Certificates</span>
                <ChevronDown size={16} />
              </div>
              <div className="dropdown-menu">
                <Link to="/apply/birth-certificate" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Birth Certificate</Link>
                <Link to="/apply/income-certificate" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Income Certificate</Link>
                <Link to="/apply/caste-certificate" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Caste Certificate</Link>
                <Link to="/apply/residence-certificate" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Residence Certificate</Link>
              </div>
            </div>
          </div>
          
          <div className="navbar-auth">
            {isLoggedIn ? (
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <User size={18} />
                  </div>
                  <span>My Account</span>
                  <ChevronDown size={16} />
                </div>
                <div className="dropdown-menu">
                  <Link to="/dashboard" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                  <Link to="/profile" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="button button-outline" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="button button-secondary" onClick={() => setIsMobileMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
