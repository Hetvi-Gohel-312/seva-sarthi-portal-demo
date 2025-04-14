
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Bell, AlertCircle, Calendar, Search } from "lucide-react";

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  
  // Sample announcement data
  const allAnnouncements = [
    {
      id: 1,
      title: "Water Supply Interruption Notice",
      description: "Due to maintenance work, there will be a water supply interruption in Sectors 10, 11, and 12 on Saturday, October 15th from 10:00 AM to 4:00 PM.",
      date: "2023-10-10",
      category: "Public Services",
      important: true
    },
    {
      id: 2,
      title: "New Online Service for Birth Certificates",
      description: "We're pleased to announce that birth certificate applications can now be submitted online through our portal. The service will be available starting November 1st, 2023.",
      date: "2023-10-08",
      category: "Digital Services",
      important: false
    },
    {
      id: 3,
      title: "COVID-19 Vaccination Drive",
      description: "A special COVID-19 vaccination drive will be held at the Community Center on October 20th-22nd from 9:00 AM to 5:00 PM. All citizens above 18 years are eligible.",
      date: "2023-10-05",
      category: "Healthcare",
      important: true
    },
    {
      id: 4,
      title: "Public Meeting on Urban Development",
      description: "A public meeting to discuss the upcoming urban development projects will be held on October 25th at 6:00 PM in the Town Hall. All residents are invited to attend and share their views.",
      date: "2023-10-03",
      category: "Urban Planning",
      important: false
    },
    {
      id: 5,
      title: "Road Repair Work",
      description: "Road repair work will commence on Main Street from October 18th and is expected to continue for two weeks. Commuters are advised to take alternative routes during this period.",
      date: "2023-10-01",
      category: "Infrastructure",
      important: false
    }
  ];
  
  // Filter announcements based on search term and category
  const filteredAnnouncements = allAnnouncements.filter(announcement => {
    const matchesSearch = searchTerm === "" || 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter === "" || announcement.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories for the filter dropdown
  const uniqueCategories = Array.from(new Set(allAnnouncements.map(a => a.category)));

  return (
    <Layout>
      <section className="hero" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="hero-content text-center">
            <h1>Public Announcements</h1>
            <p>Stay updated with the latest information and announcements</p>
          </div>
        </div>
      </section>
      
      <div className="container" style={{ marginTop: '-4rem' }}>
        <div className="form-container">
          {/* Search and filter controls */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            marginBottom: '2rem', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <input
                type="text"
                placeholder="Search announcements..."
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '45px' }}
              />
              <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-blue)' }} />
            </div>
            
            <div style={{ minWidth: '200px' }}>
              <select
                className="form-control"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Announcements list */}
          <div>
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <div key={announcement.id} className="announcement">
                  <div className="announcement-header">
                    <h3 className="announcement-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {announcement.important && (
                        <AlertCircle size={18} style={{ color: 'var(--error-color)' }} />
                      )}
                      {announcement.title}
                    </h3>
                    <span className="announcement-date" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} />
                      {announcement.date}
                    </span>
                  </div>
                  
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    background: 'var(--subtle-blue)',
                    color: 'var(--secondary-blue)',
                    marginBottom: '0.75rem'
                  }}>
                    {announcement.category}
                  </span>
                  
                  <p>{announcement.description}</p>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <Bell size={48} style={{ color: 'var(--secondary-blue)', opacity: 0.5, margin: '0 auto 1rem' }} />
                <h3>No Announcements Found</h3>
                <p>No announcements match your search criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Announcements;
