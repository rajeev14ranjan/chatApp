import React, { useState } from 'react';
import Chat from './Chat/Chat';
import './App.css';
import Header from './Header/Header';

const data = [
  { key: 0, text: 'Hey, how are you doing?', type: 's' },
  { key: 1, text: 'Hi, I am doing fine', type: 'r' },
  { key: 2, text: 'What about you?', type: 'r' },
  {
    key: 3,
    text: "I am also doing fine, Just wanted to ask if you'd be free on this weekend?",
    type: 's',
  },
  { key: 4, text: 'Yes, I am mostly free! Any plans', type: 'r' },
  { key: 5, text: 'Yeah, Will let you know about it soon.', type: 's' },
  {
    key: 6,
    text: `One year ago today, one of the greatest comic book movies of the decade was released, every frame of this film truly celebrates the spirit of being Spider-Man. Remember, "Anyone can wear the mask. You could wear the mask. If you didn't know that before, I hope you do now. Because I'm Spider-Man. And I'm not the only one. Not by a long shot."`,
    type: 's',
  },
];

function App() {
  const [message, setMessage] = useState('');
  let lastText;

  function scroll() {
    lastText.scrollIntoView({ behavior: 'smooth' });
  }

  function handleMessage(skip) {
    if (!message || skip) return;
    const type = data[data.length - 1].type === 's' ? 'r' : 's';
    data.push({ key: data.length, text: message, type });
    setMessage('');
    scroll();
  }

  return (
    <div className='app'>
      <div className='chat-header'>
        <Header name='Rajeev Ranjan' />
      </div>
      <div className='chat-content'>
        {data.map(d => (
          <Chat key={d.key} text={d.text} type={d.type} />
        ))}
        <div
          style={{ clear: 'both', height: '10vh' }}
          ref={el => {
            lastText = el;
          }}></div>
      </div>
      <div className='chatbox'>
        <input
          placeholder='Type and press enter to send'
          className='chat-input'
          value={message}
          onKeyPress={e => handleMessage(e.key !== 'Enter')}
          onChange={e => setMessage(e.target.value)}></input>
      </div>
    </div>
  );
}

export default App;
