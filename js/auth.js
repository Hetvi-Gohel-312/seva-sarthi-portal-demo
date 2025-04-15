
// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Handle login form submission
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    
    // Simulate login API call
    try {
      const submitButton = loginForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Logging in...';
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would make an API call to authenticate the user
      // For demo, we'll simulate a successful login
      showToast('Login successful', 'success');
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        window.location.href = 'dashboard.html';
      }, 1000);
      
      // Reset button state
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      
    } catch (error) {
      showToast('Login failed. Please check your credentials.', 'error');
      console.error('Login error:', error);
      
      // Reset button state
      const submitButton = loginForm.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = 'Login to Account';
    }
  });
}

// Handle register form submission
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Simple validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    
    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }
    
    // Simulate registration API call
    try {
      const submitButton = registerForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Creating account...';
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would make an API call to register the user
      // For demo, we'll simulate a successful registration
      showToast('Registration successful', 'success');
      
      // Redirect to login page after a short delay
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000);
      
      // Reset button state
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      
    } catch (error) {
      showToast('Registration failed. Please try again.', 'error');
      console.error('Registration error:', error);
      
      // Reset button state
      const submitButton = registerForm.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = 'Register';
    }
  });
}

// Check if user is logged in
const checkAuthStatus = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail');
  
  if (isLoggedIn && userEmail) {
    // Update navbar based on auth status
    const navbarAuth = document.querySelector('.navbar-auth');
    
    if (navbarAuth) {
      navbarAuth.innerHTML = `
        <div class="dropdown">
          <div class="dropdown-trigger">
            <div class="user-avatar">
              <i class="icon-user"></i>
            </div>
            <span>${userEmail}</span>
            <i class="chevron-down"></i>
          </div>
          <div class="dropdown-menu">
            <a href="dashboard.html" class="dropdown-item">Dashboard</a>
            <a href="profile.html" class="dropdown-item">Profile</a>
            <a href="#" id="logoutBtn" class="dropdown-item">Logout</a>
          </div>
        </div>
      `;
      
      // Style the user avatar
      const userAvatar = document.querySelector('.user-avatar');
      if (userAvatar) {
        userAvatar.style.width = '30px';
        userAvatar.style.height = '30px';
        userAvatar.style.borderRadius = '50%';
        userAvatar.style.background = 'rgba(255, 255, 255, 0.2)';
        userAvatar.style.display = 'flex';
        userAvatar.style.alignItems = 'center';
        userAvatar.style.justifyContent = 'center';
      }
      
      // Add logout functionality
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('userEmail');
          window.location.href = 'index.html';
        });
      }
    }
  }
};

// Run auth check on page load
document.addEventListener('DOMContentLoaded', checkAuthStatus);
