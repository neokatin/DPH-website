// Define the chatbot responses
const chatbotResponses = {
    "hi": "Hello there!",
    "hello": "Hi, how can I help you today?",
    "how are you": "I'm doing well, thank you. How about you?",
    "good": "That's great to hear!",
    "bad": "I'm sorry to hear that. Is there anything I can help you with?",
    "help": "Sure, what do you need help with?",
    "bye": "Goodbye, have a great day!",
    "thank you": "You're welcome!",
    "default": "I'm sorry, I didn't understand that. Can you please try again?",
  };
  
  // Get the chat input and output elements
  const chatInput = document.querySelector("#chat-input");
  const chatOutput = document.querySelector("#chat-output");
  
  // Add an event listener to the chat input
  chatInput.addEventListener("keyup", function(event) {
    // If the user hits Enter
    if (event.keyCode === 13) {
      // Get the user input and clear the input field
      const userInput = event.target.value;
      event.target.value = "";
  
      // Display the user message
      displayMessage(userInput, "user");
  
      // Get the chatbot response
      const chatbotResponse = getChatbotResponse(userInput);
  
      // Display the chatbot response
      displayMessage(chatbotResponse, "bot");
    }
  });
  
  // Function to get the chatbot response
  function getChatbotResponse(userInput) {
    // Convert the user input to lowercase
    const lowerCaseInput = userInput.toLowerCase();
  
    // Check if the user input matches a predefined response
    for (const [key, value] of Object.entries(chatbotResponses)) {
      if (lowerCaseInput.includes(key)) {
        return value;
      }
    }
  
    // If there is no match, return the default response
    return chatbotResponses["default"];
  }
  
  // Function to display a message
  function displayMessage(messageText, messageType) {
    // Create a new chat message element
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message", messageType);
    chatMessage.textContent = messageText;
  
    // Append the chat message to the chat output
    chatOutput.appendChild(chatMessage);
  
    // Scroll the chat output to the bottom
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
  