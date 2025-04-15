
// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const navbarMenu = document.querySelector('.navbar-menu');
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
const currentYearElements = document.querySelectorAll('#current-year');
const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatPopup = document.getElementById('chatPopup');
const closeChatBtn = document.getElementById('closeChatBtn');

// Update current year in footer
if (currentYearElements) {
  const currentYear = new Date().getFullYear();
  currentYearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

// Mobile menu toggle
if (mobileMenuBtn && navbarMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('mobile-menu-open');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Dropdown functionality for mobile
if (dropdownTriggers) {
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = trigger.nextElementSibling;
        if (dropdown.style.display === 'block') {
          dropdown.style.display = 'none';
        } else {
          dropdown.style.display = 'block';
        }
      }
    });
  });
}

// Chat widget functionality
if (chatToggleBtn && chatPopup && closeChatBtn) {
  chatToggleBtn.addEventListener('click', () => {
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
  });

  closeChatBtn.addEventListener('click', () => {
    chatPopup.style.display = 'none';
  });
}

// Close menus when clicking outside
document.addEventListener('click', (e) => {
  // Close mobile menu when clicking outside
  if (navbarMenu && navbarMenu.classList.contains('mobile-menu-open') && 
      !e.target.closest('.navbar-menu') && 
      !e.target.closest('.mobile-menu-button')) {
    navbarMenu.classList.remove('mobile-menu-open');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
  }
  
  // Close chat popup when clicking outside
  if (chatPopup && 
      chatPopup.style.display === 'block' && 
      !e.target.closest('.chat-popup') && 
      !e.target.closest('.chat-button')) {
    chatPopup.style.display = 'none';
  }
});

// Toast notification system
const showToast = (message, type = 'success') => {
  // Create toast container if it doesn't exist
  let toastContainer = document.querySelector('.toast-container');
  
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    
    // Style the toast container
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '20px';
    toastContainer.style.right = '20px';
    toastContainer.style.zIndex = '1000';
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.gap = '10px';
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  // Style the toast
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '4px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  toast.style.color = '#fff';
  toast.style.minWidth = '200px';
  toast.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s';
  
  // Set background color based on type
  if (type === 'success') {
    toast.style.backgroundColor = 'var(--success)';
  } else if (type === 'error') {
    toast.style.backgroundColor = 'var(--danger)';
  } else if (type === 'warning') {
    toast.style.backgroundColor = 'var(--warning)';
    toast.style.color = '#333';
  } else {
    toast.style.backgroundColor = 'var(--primary)';
  }
  
  // Add toast to container
  toastContainer.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
      // Remove container if empty
      if (toastContainer.children.length === 0) {
        toastContainer.remove();
      }
    }, 300);
  }, 3000);
};

// Add fadeIn/fadeOut animations to head
const addAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);
};

addAnimationStyles();

// Expose toast function globally
window.showToast = showToast;
