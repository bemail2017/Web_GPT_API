// script.js
const apiKey = "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";

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
