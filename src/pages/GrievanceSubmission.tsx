
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Phone, FileText, Send, Clock, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const GrievanceSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    description: "",
    attachments: null as File[] | null
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("submit"); // "submit" or "list"
  const { toast } = useToast();
  
  // Sample grievance data (in a real app, this would come from an API)
  const grievances = [
    {
      id: "GR-2023-001",
      subject: "Water Supply Issue in Sector 45",
      description: "No water supply for the last 3 days in Sector 45. Many households affected.",
      date: "2023-10-15",
      status: "pending",
      category: "Public Services"
    },
    {
      id: "GR-2023-002",
      subject: "Street Light Not Working",
      description: "Street light at the corner of Main Street and Park Avenue has been out for a week.",
      date: "2023-10-10",
      status: "processing",
      category: "Infrastructure"
    },
    {
      id: "GR-2023-003",
      subject: "Fertilizer Supply Delay",
      description: "Fertilizer supply has been delayed in many villages, affecting crop cycles.",
      date: "2023-10-05",
      status: "resolved",
      category: "Agriculture"
    },
    {
      id: "GR-2023-004",
      subject: "Certificate Application Rejected Without Reason",
      description: "My application for a residence certificate was rejected without any explanation.",
      date: "2023-09-28",
      status: "rejected",
      category: "Documentation"
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        attachments: Array.from(e.target.files || [])
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Grievance Submitted",
        description: "Your grievance has been submitted successfully. Reference ID: GR-2023-005",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        subject: "",
        description: "",
        attachments: null
      });
    }, 1500);
  };
  
  // Function to get status label styling
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'processing':
        return 'status-processing';
      case 'resolved':
        return 'status-resolved';
      case 'rejected':
        return 'status-rejected';
      default:
        return '';
    }
  };
  
  // Function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} />;
      case 'processing':
        return <Clock size={16} />;
      case 'resolved':
        return <CheckCircle size={16} />;
      case 'rejected':
        return <AlertCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <section className="hero" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="hero-content text-center">
            <h1>Grievance Submission</h1>
            <p>Submit your complaints and track their status</p>
          </div>
        </div>
      </section>
      
      <section className="container" style={{ marginTop: '-4rem' }}>
        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '2rem'
        }}>
          <button 
            className={`button ${activeTab === 'submit' ? 'button-primary' : 'button-outline'}`}
            onClick={() => setActiveTab('submit')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem'
            }}
          >
            <Send size={18} />
            Submit New Grievance
          </button>
          <button 
            className={`button ${activeTab === 'list' ? 'button-primary' : 'button-outline'}`}
            onClick={() => setActiveTab('list')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem'
            }}
          >
            <MessageSquare size={18} />
            My Grievances
          </button>
        </div>
      
        {activeTab === 'submit' ? (
          <div className="form-container">
            <h2 className="form-title">Submit a Grievance</h2>
            <p className="text-center" style={{ marginBottom: '2rem' }}>
              Fill out the form below to submit your complaint or feedback
            </p>
            
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
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
              </div>
              
              <div className="form-group">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  id="category"
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Public Services">Public Services</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Documentation">Documentation</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Enter grievance subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ paddingLeft: '45px' }}
                    required
                  />
                  <FileText size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="Provide detailed information about your grievance"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="attachments" className="form-label">Attachments (optional)</label>
                <input
                  id="attachments"
                  name="attachments"
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                  multiple
                />
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
                  You can upload images, documents or PDF files (max 5MB each)
                </p>
              </div>
              
              <button 
                type="submit" 
                className="button button-primary form-button" 
                disabled={isLoading}
                style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                {isLoading ? "Submitting..." : (
                  <>
                    Submit Grievance
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="form-container">
            <h2 className="form-title">My Grievances</h2>
            <p className="text-center" style={{ marginBottom: '2rem' }}>
              Track the status of your submitted grievances
            </p>
            
            <div className="grievance-list">
              {grievances.length > 0 ? (
                grievances.map((grievance) => (
                  <div key={grievance.id} className="grievance-item">
                    <div className="grievance-header">
                      <span className="grievance-title">{grievance.subject}</span>
                      <span className="grievance-date">{grievance.date}</span>
                    </div>
                    <div style={{ margin: '0.5rem 0' }}>
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>Reference ID: {grievance.id}</span> • 
                      <span style={{ fontSize: '0.9rem', color: '#666', marginLeft: '0.5rem' }}>Category: {grievance.category}</span>
                    </div>
                    <p style={{ margin: '0.75rem 0' }}>{grievance.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                      <div className={`grievance-status ${getStatusStyles(grievance.status)}`}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          {getStatusIcon(grievance.status)}
                          {grievance.status.charAt(0).toUpperCase() + grievance.status.slice(1)}
                        </span>
                      </div>
                      <Link to={`/grievance/${grievance.id}`} className="button button-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.9rem' }}>
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <MessageSquare size={48} style={{ color: 'var(--secondary-blue)', opacity: 0.5, margin: '0 auto 1rem' }} />
                  <h3>No Grievances Found</h3>
                  <p>You haven't submitted any grievances yet.</p>
                  <button 
                    className="button button-primary" 
                    style={{ marginTop: '1rem' }}
                    onClick={() => setActiveTab('submit')}
                  >
                    Submit New Grievance
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default GrievanceSubmission;
