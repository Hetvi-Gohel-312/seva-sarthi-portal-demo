
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileText, User, FileCheck, VoteIcon, MessageSquare, Robot, Bell, Search } from "lucide-react";

const services = [
  {
    title: "Online Grievance Submission",
    icon: <MessageSquare className="card-icon" />,
    description: "Submit complaints and grievances online for quick resolution.",
    link: "/services/grievance"
  },
  {
    title: "Digital Voting & Polling",
    icon: <VoteIcon className="card-icon" />,
    description: "Participate in local elections and polls digitally.",
    link: "/services/voting"
  },
  {
    title: "Online Service Requests",
    icon: <FileText className="card-icon" />,
    description: "Apply for various certificates and government services.",
    link: "/apply"
  },
  {
    title: "AI Chatbot Assistance",
    icon: <Robot className="card-icon" />,
    description: "Get instant help with your queries through our AI chatbot.",
    link: "/services/chatbot"
  },
  {
    title: "Public Announcements",
    icon: <Bell className="card-icon" />,
    description: "Stay updated with the latest announcements from local government.",
    link: "/services/announcements"
  },
  {
    title: "Track Grievance Status",
    icon: <Search className="card-icon" />,
    description: "Track the status of your submitted grievances and applications.",
    link: "/track"
  }
];

const certificates = [
  {
    title: "Birth Certificate",
    icon: <User className="card-icon" />,
    description: "Apply for birth certificate with required details and supporting documents.",
    link: "/apply/birth-certificate"
  },
  {
    title: "Income Certificate",
    icon: <FileText className="card-icon" />,
    description: "Get income certificate with verification of your financial information.",
    link: "/apply/income-certificate"
  },
  {
    title: "Caste Certificate",
    icon: <FileCheck className="card-icon" />,
    description: "Apply for caste certificate with proper documentation and verification.",
    link: "/apply/caste-certificate"
  }
];

const Services = () => {
  return (
    <Layout>
      <section className="container section">
        <div className="text-center">
          <h1>Our Services</h1>
          <p>Explore the range of digital services offered to make governance accessible and efficient</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-header">
                {service.icon}
                <h3 className="card-title">{service.title}</h3>
              </div>
              <div className="card-body">
                <p>{service.description}</p>
              </div>
              <div className="card-footer">
                <Link to={service.link} className="button button-primary">
                  Access Service
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <h2>Certificate Services</h2>
          <p>Apply for official certificates and documents</p>
        </div>
        
        <div className="services-grid">
          {certificates.map((certificate, index) => (
            <div key={index} className="card">
              <div className="card-header">
                {certificate.icon}
                <h3 className="card-title">{certificate.title}</h3>
              </div>
              <div className="card-body">
                <p>{certificate.description}</p>
              </div>
              <div className="card-footer">
                <Link to={certificate.link} className="button button-primary">
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
