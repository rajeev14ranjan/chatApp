import React from 'react';
import './Chat.css';

function Chat({ text, type }) {
  return (
    <div className={`chat ${type === 's' ? 'sender-text' : 'receiver-text'}`}>
      {text}
    </div>
  );
}

export default Chat;
