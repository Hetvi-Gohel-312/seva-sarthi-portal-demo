
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileText, User, MessageSquare, VoteIcon, Bot, Bell, Search, FileSpreadsheet, Users } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      <section className="hero" style={{ paddingBottom: '7rem' }}>
        <div className="container">
          <div className="hero-content text-center">
            <h1>Our Services</h1>
            <p>Explore the range of digital services offered to make governance accessible and efficient.</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: '-5rem' }}>
        <div className="services-grid">
          {/* 1. Online Grievance Submission */}
          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquare size={24} />
            </div>
            <h3 className="feature-title">Online Grievance Submission</h3>
            <p>Submit complaints and grievances online for quick resolution. Track and manage all your submitted issues in one place.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Link to="/services/grievance" className="button button-primary">Submit Grievance</Link>
            </div>
          </div>

          {/* 2. Digital Voting & Polling */}
          <div className="feature-card">
            <div className="feature-icon">
              <VoteIcon size={24} />
            </div>
            <h3 className="feature-title">Digital Voting & Polling</h3>
            <p>Participate in local elections and polls digitally. Secure and transparent voting system for community decisions.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Link to="/services/voting" className="button button-primary">View Active Polls</Link>
            </div>
          </div>

          {/* 3. Online Service Requests */}
          <div className="feature-card">
            <div className="feature-icon">
              <FileText size={24} />
            </div>
            <h3 className="feature-title">Online Service Requests</h3>
            <p>Apply for various certificates and government services with easy tracking and updates on your applications.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Link to="/apply" className="button button-primary">Apply Now</Link>
            </div>
          </div>
        </div>

        <div className="services-grid" style={{ marginTop: '2rem' }}>
          {/* 4. AI Chatbot Assistance */}
          <div className="feature-card">
            <div className="feature-icon">
              <Bot size={24} />
            </div>
            <h3 className="feature-title">AI Chatbot Assistance</h3>
            <p>Get instant help with your queries through our AI chatbot. Live chat support available for real-time assistance.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <button onClick={() => window.alert('Chat support will appear!')} className="button button-primary">Start Chat</button>
            </div>
          </div>

          {/* 5. Public Announcements */}
          <div className="feature-card">
            <div className="feature-icon">
              <Bell size={24} />
            </div>
            <h3 className="feature-title">Public Announcements</h3>
            <p>Stay updated with the latest announcements from local government. Important notifications delivered directly to your dashboard.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Link to="/services/announcements" className="button button-primary">View Announcements</Link>
            </div>
          </div>

          {/* 6. Track Grievance Status */}
          <div className="feature-card">
            <div className="feature-icon">
              <Search size={24} />
            </div>
            <h3 className="feature-title">Track Grievance Status</h3>
            <p>Track the status of your submitted grievances and applications. Enter your request ID to check real-time progress.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Link to="/track" className="button button-primary">Track Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--subtle-blue)' }}>
        <div className="container">
          <div className="text-center">
            <h2>Certificate Services</h2>
            <p>Apply for official certificates and documents with our simplified online process.</p>
          </div>

          <div className="services-grid" style={{ marginTop: '2rem' }}>
            {/* Certificate 1 */}
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'var(--accent-gradient)' }}>
                <User size={24} />
              </div>
              <h3 className="feature-title">Birth Certificate</h3>
              <p>Apply for birth certificate with required details and supporting documents like hospital records and identity proof.</p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/apply/birth-certificate" className="button button-secondary">Apply Now</Link>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'var(--accent-gradient)' }}>
                <FileSpreadsheet size={24} />
              </div>
              <h3 className="feature-title">Income Certificate</h3>
              <p>Get income certificate with verification of your financial information. Upload salary slips or income tax returns as proof.</p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/apply/income-certificate" className="button button-secondary">Apply Now</Link>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'var(--accent-gradient)' }}>
                <Users size={24} />
              </div>
              <h3 className="feature-title">Caste Certificate</h3>
              <p>Apply for caste certificate with proper documentation and verification through a streamlined online process.</p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/apply/caste-certificate" className="button button-secondary">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="chat-widget">
        <div className="chat-button" onClick={() => window.alert('Chat support will appear!')}>
          <Bot size={24} />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
