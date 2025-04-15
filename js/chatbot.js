
// DOM Elements
const chatPopup = document.getElementById('chatPopup');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const chatToggleBtn = document.getElementById('chatToggleBtn');
const closeChatBtn = document.getElementById('closeChatBtn');
const startChatBtn = document.getElementById('startChatBtn');

// Quick responses for the chatbot
const botResponses = {
  greetings: [
    "Hello! How can I help you today?",
    "Hi there! Welcome to Seva Sarthi. How may I assist you?",
    "Good day! How can I be of service to you?"
  ],
  certificates: [
    "We offer various certificates including birth, income, caste, and residence certificates. You can apply for them online on our portal.",
    "You can apply for certificates from the Services menu or directly from the home page.",
    "For certificate applications, you'll need to submit identity proof and other supporting documents."
  ],
  track: [
    "You can track your application by entering your application ID and registered mobile number on our Track page.",
    "To check your application status, go to the Track Status page and enter your details.",
    "For tracking your application, you'll need your application ID which would have been provided to you during submission."
  ],
  contact: [
    "You can contact us at support@sevasarthi.gov.in or call us at 1800-123-4567.",
    "Our office is located at 123 Government Complex, New Delhi.",
    "For any queries, please visit the Contact Us page or use this chat support."
  ],
  hours: [
    "Our office hours are Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM.",
    "We are closed on Sundays and government holidays.",
    "You can submit applications online anytime, but processing is done during office hours."
  ],
  help: [
    "I can help you with information about our services, application process, tracking applications, and more. What do you need assistance with?",
    "I'm here to provide information about government services and guide you through the application process.",
    "I can assist with certificate applications, tracking, and general inquiries. What would you like to know?"
  ],
  default: [
    "I'm not sure I understand. Could you please provide more details?",
    "I'm still learning. Could you rephrase your question?",
    "I don't have that information right now. Please contact our support team for more assistance."
  ]
};

// Function to get a random response from category
const getRandomResponse = (category) => {
  const responses = botResponses[category] || botResponses.default;
  return responses[Math.floor(Math.random() * responses.length)];
};

// Function to add a message to the chat
const addMessage = (message, isUser = false) => {
  if (!chatMessages) return;
  
  const messageElement = document.createElement('div');
  messageElement.className = `message ${isUser ? 'user' : 'bot'}`;
  
  const contentElement = document.createElement('div');
  contentElement.className = 'message-content';
  contentElement.textContent = message;
  
  messageElement.appendChild(contentElement);
  chatMessages.appendChild(messageElement);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

// Function to generate bot response based on user input
const generateBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Simple intent detection
  if (message.match(/hello|hi|hey|greetings/i)) {
    return getRandomResponse('greetings');
  } else if (message.match(/certificate|apply|document|birth|income|caste|residence/i)) {
    return getRandomResponse('certificates');
  } else if (message.match(/track|status|application|progress/i)) {
    return getRandomResponse('track');
  } else if (message.match(/contact|email|phone|reach|call/i)) {
    return getRandomResponse('contact');
  } else if (message.match(/hours|timing|when|open|close/i)) {
    return getRandomResponse('hours');
  } else if (message.match(/help|assist|support/i)) {
    return getRandomResponse('help');
  } else {
    return getRandomResponse('default');
  }
};

// Handle sending message
const sendMessage = () => {
  if (!messageInput || !messageInput.value.trim()) return;
  
  const userMessage = messageInput.value.trim();
  addMessage(userMessage, true);
  messageInput.value = '';
  
  // Simulate bot thinking
  setTimeout(() => {
    const botResponse = generateBotResponse(userMessage);
    addMessage(botResponse);
  }, 500);
};

// Event listeners
if (sendMessageBtn) {
  sendMessageBtn.addEventListener('click', sendMessage);
}

if (messageInput) {
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// Toggle chat on click of startChatBtn
if (startChatBtn) {
  startChatBtn.addEventListener('click', () => {
    if (chatPopup) {
      chatPopup.style.display = 'block';
    }
  });
}
