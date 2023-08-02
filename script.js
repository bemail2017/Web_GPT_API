// script.js
const apiKey = "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"; // Đặt API Key của bạn ở đây

function sendMessage() {
  const inputText = document.getElementById('input-text').value;
  
  fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: inputText,
      max_tokens: 100
    })
  })
  .then(response => response.json())
  .then(data => {
    // Xử lý câu trả lời từ API của OpenAI ở đây
    displayAnswer(data.choices[0].text);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function displayAnswer(answer) {
  const chatMessages = document.getElementById('chat-messages');
  const chatBubble = document.createElement('div');
  chatBubble.classList.add('chat-bubble');
  chatBubble.textContent = answer;
  chatMessages.appendChild(chatBubble);
}
