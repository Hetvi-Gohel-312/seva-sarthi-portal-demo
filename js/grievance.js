
// DOM Elements
const grievanceForm = document.getElementById('grievanceForm');

// Handle form submission
if (grievanceForm) {
  grievanceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const grievanceType = document.getElementById('grievanceType').value;
    const department = document.getElementById('department').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    
    // Simple validation
    if (!fullName || !email || !phone || !grievanceType || !department || !subject || !description) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate form submission
    try {
      const submitButton = grievanceForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate reference number
      const refNumber = 'GRV-' + Math.floor(100000 + Math.random() * 900000);
      
      // In a real app, this would make an API call to submit the grievance
      // For demo, we'll simulate a successful submission
      showToast('Grievance submitted successfully', 'success');
      
      // Show success message with reference number
      const formContainer = grievanceForm.parentElement;
      if (formContainer) {
        formContainer.innerHTML = `
          <div class="success-container">
            <div class="success-icon">
              <i class="icon-check-circle"></i>
            </div>
            <h3>Grievance Submitted Successfully</h3>
            <p>Your grievance has been recorded in our system. We will review it and take appropriate action.</p>
            <div class="reference-box">
              <p>Your Reference Number</p>
              <h4>${refNumber}</h4>
              <p class="text-small">Please save this reference number for tracking your grievance status</p>
            </div>
            <div class="action-buttons">
              <a href="track.html" class="button button-primary">Track Status</a>
              <a href="index.html" class="button button-outline-primary">Back to Home</a>
            </div>
          </div>
        `;
        
        // Add styles for success message
        addSuccessStyles();
      }
      
    } catch (error) {
      showToast('Failed to submit grievance. Please try again.', 'error');
      console.error('Grievance form error:', error);
      
      // Reset button state
      const submitButton = grievanceForm.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Grievance';
    }
  });
}

// Add form-specific styles
window.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    
    .form-hint {
      display: block;
      color: var(--text-light);
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
    
    .form-checkbox {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .form-checkbox input[type="checkbox"] {
      margin-top: 0.25rem;
    }
    
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Add success styles
function addSuccessStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .success-container {
      text-align: center;
      padding: 2rem;
    }
    
    .success-icon {
      width: 80px;
      height: 80px;
      background-color: rgba(40, 167, 69, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: var(--success);
      font-size: 2.5rem;
    }
    
    .reference-box {
      background-color: var(--subtle-blue);
      padding: 1.5rem;
      border-radius: var(--radius-md);
      margin: 2rem 0;
    }
    
    .reference-box h4 {
      font-size: 2rem;
      margin: 0.5rem 0;
      color: var(--primary);
    }
    
    .text-small {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
    
    .action-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    
    @media (max-width: 576px) {
      .action-buttons {
        flex-direction: column;
      }
    }
  `;
  document.head.appendChild(style);
}
