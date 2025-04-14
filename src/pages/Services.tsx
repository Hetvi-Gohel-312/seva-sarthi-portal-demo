
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileText, User, FileCheck, VoteIcon, MessageSquare, Bot, Bell, Search, FileSpreadsheet, Users } from "lucide-react";

const services = [
  {
    title: "Online Grievance Submission",
    icon: <MessageSquare size={36} className="card-icon" />,
    description: "Submit complaints and grievances online for quick resolution. Track and manage all your submitted issues in one place.",
    link: "/services/grievance"
  },
  {
    title: "Digital Voting & Polling",
    icon: <VoteIcon size={36} className="card-icon" />,
    description: "Participate in local elections and polls digitally. Secure and transparent voting system for community decisions.",
    link: "/services/voting"
  },
  {
    title: "Online Service Requests",
    icon: <FileText size={36} className="card-icon" />,
    description: "Apply for various certificates and government services with easy tracking and updates on your applications.",
    link: "/apply"
  },
  {
    title: "AI Chatbot Assistance",
    icon: <Bot size={36} className="card-icon" />,
    description: "Get instant help with your queries through our AI chatbot. Live chat support available for real-time assistance with service-related queries.",
    link: "/services/chatbot"
  },
  {
    title: "Public Announcements",
    icon: <Bell size={36} className="card-icon" />,
    description: "Stay updated with the latest announcements from local government. Important notifications delivered directly to your dashboard.",
    link: "/services/announcements"
  },
  {
    title: "Track Grievance Status",
    icon: <Search size={36} className="card-icon" />,
    description: "Track the status of your submitted grievances and applications. Enter your request ID to check real-time progress on your submissions.",
    link: "/track"
  }
];

const certificates = [
  {
    title: "Birth Certificate",
    icon: <User size={36} className="card-icon" />,
    description: "Apply for birth certificate with required details and supporting documents like hospital records and identity proof.",
    link: "/apply/birth-certificate"
  },
  {
    title: "Income Certificate",
    icon: <FileSpreadsheet size={36} className="card-icon" />,
    description: "Get income certificate with verification of your financial information. Upload salary slips or income tax returns as proof.",
    link: "/apply/income-certificate"
  },
  {
    title: "Caste Certificate",
    icon: <Users size={36} className="card-icon" />,
    description: "Apply for caste certificate with proper documentation and verification through a streamlined online process.",
    link: "/apply/caste-certificate"
  }
];

const Services = () => {
  return (
    <Layout>
      <section className="container section">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Our Services</h1>
          <p style={{ fontSize: '1.125rem' }}>
            Explore the range of digital services offered to make governance accessible and efficient. 
            Seva Sarthi brings government services to your fingertips with secure, transparent, and user-friendly platforms.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card-header">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                  margin: '0 auto 1.25rem',
                  color: 'white'
                }}>
                  {service.icon}
                </div>
                <h3 className="card-title">{service.title}</h3>
              </div>
              <div className="card-body">
                <p>{service.description}</p>
              </div>
              <div className="card-footer" style={{ marginTop: 'auto' }}>
                <Link to={service.link} className="button button-primary">
                  Access Service
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ maxWidth: '800px', margin: '4rem auto 3rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Certificate Services</h2>
          <p style={{ fontSize: '1.125rem' }}>Apply for official certificates and documents with our simplified online process. 
            Upload supporting documents and track your application status in real-time.</p>
        </div>
        
        <div className="services-grid">
          {certificates.map((certificate, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card-header">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--gold) 100%)',
                  margin: '0 auto 1.25rem',
                  color: 'white'
                }}>
                  {certificate.icon}
                </div>
                <h3 className="card-title">{certificate.title}</h3>
              </div>
              <div className="card-body">
                <p>{certificate.description}</p>
              </div>
              <div className="card-footer" style={{ marginTop: 'auto' }}>
                <Link to={certificate.link} className="button button-secondary">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
