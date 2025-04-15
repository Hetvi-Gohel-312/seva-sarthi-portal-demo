
// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const announcementsList = document.getElementById('announcementsList');
const noResults = document.getElementById('noResults');

// Add styles for announcements page
window.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .announcements-container {
      background-color: var(--bg-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: 2rem;
      margin-bottom: 3rem;
    }
    
    .filter-container {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .search-box {
      flex-grow: 1;
      position: relative;
    }
    
    .search-box input {
      padding-left: 3rem;
    }
    
    .search-box i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--secondary-blue);
    }
    
    .filter-box {
      width: 200px;
    }
    
    .announcements-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .announcement {
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 1.5rem;
      background-color: var(--bg-light);
      transition: var(--transition-fast);
    }
    
    .announcement:hover {
      box-shadow: var(--shadow-sm);
      transform: translateY(-2px);
    }
    
    .announcement.important {
      border-left: 4px solid var(--danger);
    }
    
    .announcement-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
    }
    
    .announcement-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0;
      font-size: 1.25rem;
    }
    
    .announcement-title i {
      color: var(--danger);
    }
    
    .announcement-date {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: var(--text-light);
      font-size: 0.875rem;
    }
    
    .announcement-category {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background-color: var(--subtle-blue);
      color: var(--primary);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }
    
    .no-results {
      text-align: center;
      padding: 3rem 0;
    }
    
    .no-results-icon {
      font-size: 3rem;
      color: var(--text-light);
      margin-bottom: 1rem;
      opacity: 0.5;
    }
    
    @media (max-width: 768px) {
      .filter-container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .filter-box {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
});

// Filter announcements based on search input and category
const filterAnnouncements = () => {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const category = categoryFilter ? categoryFilter.value : '';
  
  if (!announcementsList || !noResults) return;
  
  let hasVisibleAnnouncements = false;
  
  // Get all announcements
  const announcements = announcementsList.querySelectorAll('.announcement');
  
  announcements.forEach(announcement => {
    const title = announcement.querySelector('.announcement-title').textContent.toLowerCase();
    const content = announcement.querySelector('p').textContent.toLowerCase();
    const announcementCategory = announcement.querySelector('.announcement-category').textContent;
    
    const matchesSearch = title.includes(searchTerm) || content.includes(searchTerm);
    const matchesCategory = category === '' || announcementCategory === category;
    
    if (matchesSearch && matchesCategory) {
      announcement.style.display = 'block';
      hasVisibleAnnouncements = true;
    } else {
      announcement.style.display = 'none';
    }
  });
  
  // Show/hide no results message
  if (hasVisibleAnnouncements) {
    noResults.style.display = 'none';
  } else {
    noResults.style.display = 'block';
  }
};

// Add event listeners for search and filter
if (searchInput) {
  searchInput.addEventListener('input', filterAnnouncements);
}

if (categoryFilter) {
  categoryFilter.addEventListener('change', filterAnnouncements);
}
