
// DOM Elements
const contactForm = document.getElementById('contactForm');

// Handle contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate contact form submission
    try {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would make an API call to send the message
      // For demo, we'll simulate a successful submission
      showToast('Message sent successfully', 'success');
      
      // Reset form
      contactForm.reset();
      
      // Reset button state
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
      console.error('Contact form error:', error);
      
      // Reset button state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    }
  });
}
