import React, { useState } from 'react';
import './App.css';
import WelcomePage from './welcome';

function App() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { text: message, isUser: true }]);
      setMessage('');
      
      // Dummy chatbot response with delay (simulating bot reply)
      setTimeout(() => {
        setChatHistory(prev => [...prev, { text: 'This is a reply from the bot.', isUser: false }]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleResourceClick = (resource) => {
    setChatHistory([...chatHistory, { text: resource, isUser: false }]);
  };

  const startChat = () => {
    setChatStarted(true);
  };

  return (
    <div className="app-container">
      {chatStarted ? (
        <div className="chat-container">
          <div className="sidebar">
            <h2>Resources</h2>
            <ul>
              <li><a href="#resource1" onClick={() => handleResourceClick('Resource 1 details')}>Resource 1</a></li>
              <li><a href="#resource2" onClick={() => handleResourceClick('Resource 2 details')}>Resource 2</a></li>
              <li><a href="#resource3" onClick={() => handleResourceClick('Resource 3 details')}>Resource 3</a></li>
            </ul>
            <h2>Emergency Directory</h2>
            <ul>
              <li><a href="#emergency1" onClick={() => handleResourceClick('Emergency 1 details')}>Emergency 1</a></li>
              <li><a href="#emergency2" onClick={() => handleResourceClick('Emergency 2 details')}>Emergency 2</a></li>
              <li><a href="#emergency3" onClick={() => handleResourceClick('Emergency 3 details')}>Emergency 3</a></li>
            </ul>
          </div>
          <div className="chat-box">
            <div className="chat-messages">
              {chatHistory.map((chat, index) => (
                <div key={index} className={chat.isUser ? 'user-message' : 'bot-message'}>
                  {chat.text}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input 
                type="text" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                onKeyPress={handleKeyPress} 
                placeholder="Ask me anything..." 
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
          <div className="sidebar right-sidebar">
            <h2>Additional Info</h2>
            <ul>
              <li><a href="#info1" onClick={() => handleResourceClick('Info 1 details')}>Info 1</a></li>
              <li><a href="#info2" onClick={() => handleResourceClick('Info 2 details')}>Info 2</a></li>
              <li><a href="#info3" onClick={() => handleResourceClick('Info 3 details')}>Info 3</a></li>
            </ul>
          </div>
        </div>
      ) : (
        <WelcomePage onStartChat={startChat} />
      )}
    </div>
  );
}

export default App;