
import { Link } from "react-router-dom";
import { FileText, User, FileCheck, Download, Clock, Users } from "lucide-react";

const services = [
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
    icon: <Users className="card-icon" />,
    description: "Apply for caste certificate with proper documentation and verification.",
    link: "/apply/caste-certificate"
  },
  {
    title: "Residence Certificate",
    icon: <FileCheck className="card-icon" />,
    description: "Obtain residence proof certificate with address verification.",
    link: "/apply/residence-certificate"
  },
  {
    title: "Marriage Certificate",
    icon: <Users className="card-icon" />,
    description: "Apply for marriage certificate with required documentation.",
    link: "/apply/marriage-certificate"
  },
  {
    title: "Domicile Certificate",
    icon: <Download className="card-icon" />,
    description: "Get domicile certificate proving your residence status.",
    link: "/apply/domicile-certificate"
  }
];

const ServicesSection = () => {
  return (
    <section className="section" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center">
          <h2>Our Services</h2>
          <p>
            Apply for various certificates and documents through our streamlined digital platform.
          </p>
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
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: "2rem" }}>
          <Link to="/services" className="button button-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
