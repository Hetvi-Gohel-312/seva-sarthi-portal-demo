
// DOM Elements
const trackForm = document.getElementById('trackForm');
const resultContainer = document.getElementById('resultContainer');

// Sample application data for demo
const sampleApplications = [
  {
    id: "SEVA-123456",
    name: "Amit Patel",
    type: "Birth Certificate",
    date: "2023-10-15",
    status: "approved",
    steps: [
      { name: "Application Submitted", date: "2023-10-15", completed: true },
      { name: "Document Verification", date: "2023-10-18", completed: true },
      { name: "Review by Authority", date: "2023-10-20", completed: true },
      { name: "Certificate Generated", date: "2023-10-25", completed: true }
    ]
  },
  {
    id: "SEVA-789012",
    name: "Anita Sharma",
    type: "Income Certificate",
    date: "2023-10-18",
    status: "processing",
    steps: [
      { name: "Application Submitted", date: "2023-10-18", completed: true },
      { name: "Document Verification", date: "2023-10-20", completed: true },
      { name: "Review by Authority", date: "", completed: false },
      { name: "Certificate Generated", date: "", completed: false }
    ]
  },
  {
    id: "SEVA-345678",
    name: "Rajesh Kumar",
    type: "Caste Certificate",
    date: "2023-10-10",
    status: "rejected",
    reason: "Insufficient documentation provided. Please reapply with the required documents.",
    steps: [
      { name: "Application Submitted", date: "2023-10-10", completed: true },
      { name: "Document Verification", date: "2023-10-12", completed: false },
      { name: "Review by Authority", date: "", completed: false },
      { name: "Certificate Generated", date: "", completed: false }
    ]
  }
];

// Function to get status icon HTML
const getStatusIcon = (status) => {
  switch (status) {
    case "approved":
      return '<div class="status-icon status-approved"><i class="icon-check-circle"></i></div>';
    case "processing":
      return '<div class="status-icon status-processing"><i class="icon-clock"></i></div>';
    case "rejected":
      return '<div class="status-icon status-rejected"><i class="icon-x-circle"></i></div>';
    default:
      return '';
  }
};

// Function to get status text
const getStatusText = (status) => {
  switch (status) {
    case "approved":
      return "Approved";
    case "processing":
      return "In Progress";
    case "rejected":
      return "Rejected";
    default:
      return "Unknown";
  }
};

// Function to get status class
const getStatusClass = (status) => {
  switch (status) {
    case "approved":
      return "text-success";
    case "processing":
      return "text-warning";
    case "rejected":
      return "text-danger";
    default:
      return "";
  }
};

// Handle form submission
if (trackForm) {
  trackForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const applicationId = document.getElementById('applicationId').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    
    if (!applicationId || !mobileNumber) {
      showToast('Please enter both Application ID and Mobile Number', 'error');
      return;
    }
    
    // Show loading
    const submitButton = trackForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = 'Searching...';
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Find application in sample data
      const application = sampleApplications.find(app => app.id === applicationId);
      
      if (!application) {
        showToast('No application found with the provided details', 'error');
        if (resultContainer) resultContainer.style.display = 'none';
      } else {
        // Render application details
        if (resultContainer) {
          resultContainer.style.display = 'block';
          resultContainer.innerHTML = `
            <div class="tracker-card">
              <div class="status-header">
                <div>
                  <p class="text-small text-muted">Application ID</p>
                  <h3>${application.id}</h3>
                </div>
                <div class="status-badge ${getStatusClass(application.status)}">
                  ${getStatusIcon(application.status)}
                  <span>${getStatusText(application.status)}</span>
                </div>
              </div>
              
              <div class="app-details">
                <div class="app-detail">
                  <p class="text-small text-muted">Applicant Name</p>
                  <p class="detail-value">${application.name}</p>
                </div>
                <div class="app-detail">
                  <p class="text-small text-muted">Certificate Type</p>
                  <p class="detail-value">${application.type}</p>
                </div>
                <div class="app-detail">
                  <p class="text-small text-muted">Application Date</p>
                  <p class="detail-value">${application.date}</p>
                </div>
              </div>
              
              <div class="progress-section">
                <h4>Application Progress</h4>
                <div class="progress-steps">
                  ${application.steps.map((step, index) => `
                    <div class="progress-step">
                      <div class="step-indicator ${step.completed ? 'completed' : ''}">
                        ${step.completed ? '<i class="icon-check"></i>' : (index + 1)}
                      </div>
                      <div class="step-content">
                        <p class="step-name">${step.name}</p>
                        <p class="step-date">${step.date ? step.date : 'Pending'}</p>
                      </div>
                      ${index < application.steps.length - 1 ? `
                        <div class="step-connector ${application.steps[index + 1].completed ? 'completed' : ''}"></div>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
              
              ${application.status === 'rejected' ? `
                <div class="rejection-reason">
                  <h4>Reason for Rejection</h4>
                  <p>${application.reason}</p>
                </div>
              ` : ''}
              
              ${application.status === 'approved' ? `
                <div class="action-buttons">
                  <button class="button button-primary">
                    <i class="icon-download"></i> Download Certificate
                  </button>
                </div>
              ` : ''}
            </div>
          `;
          
          // Add styles for the status result
          addStatusStyles();
          
          // Scroll to the result
          resultContainer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (error) {
      showToast('An error occurred while tracking your application', 'error');
      console.error('Track error:', error);
    }
    
    // Reset button state
    submitButton.disabled = false;
    submitButton.innerHTML = originalText;
  });
}

// Add status-specific styles dynamically
function addStatusStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .status-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .text-small {
      font-size: 0.875rem;
    }
    
    .text-muted {
      color: var(--text-light);
    }
    
    .status-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
    }
    
    .status-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }
    
    .status-approved {
      background-color: rgba(40, 167, 69, 0.2);
      color: var(--success);
    }
    
    .status-processing {
      background-color: rgba(255, 193, 7, 0.2);
      color: var(--warning);
    }
    
    .status-rejected {
      background-color: rgba(220, 53, 69, 0.2);
      color: var(--danger);
    }
    
    .text-success {
      color: var(--success);
    }
    
    .text-warning {
      color: var(--warning);
    }
    
    .text-danger {
      color: var(--danger);
    }
    
    .app-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    
    .detail-value {
      font-weight: 500;
    }
    
    .progress-section {
      margin: 1.5rem 0;
    }
    
    .progress-steps {
      margin-top: 1.5rem;
    }
    
    .progress-step {
      display: flex;
      position: relative;
      margin-bottom: 1.5rem;
    }
    
    .step-indicator {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: var(--bg-light);
      border: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
      color: var(--text-light);
      font-size: 0.875rem;
    }
    
    .step-indicator.completed {
      background-color: var(--success);
      border-color: var(--success);
      color: white;
    }
    
    .step-connector {
      position: absolute;
      left: 1rem;
      top: 2rem;
      bottom: -1.5rem;
      width: 2px;
      background-color: var(--border-color);
      transform: translateX(-50%);
    }
    
    .step-connector.completed {
      background-color: var(--success);
    }
    
    .step-name {
      font-weight: 500;
      margin-bottom: 0.25rem;
    }
    
    .step-date {
      font-size: 0.875rem;
      color: var(--text-light);
    }
    
    .rejection-reason {
      background-color: rgba(220, 53, 69, 0.1);
      border: 1px solid rgba(220, 53, 69, 0.3);
      border-radius: var(--radius-md);
      padding: 1rem;
      margin-top: 1.5rem;
    }
    
    .rejection-reason h4 {
      color: var(--danger);
      margin-bottom: 0.5rem;
    }
    
    .action-buttons {
      margin-top: 1.5rem;
      display: flex;
      justify-content: flex-start;
    }
  `;
  document.head.appendChild(style);
}
