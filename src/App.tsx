import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const sendMsg = () => {
    if (input.trim() !== '') {
      setMsg([...msg, input]);
      setInput('');
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [msg]);

  return (
    <>

      <style>
        {`
          /* Hide the scroll bar */
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className='w-full h-screen bg-amber-600'>
        <div className='fixed flex justify-between items-center px-2 bottom-4 bg-white py-2 rounded-full w-full'>
          <input
            type="text"
            placeholder='message'
            value={input}
            autoFocus
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            className='bg-gray-200 outline-none px-3 flex-grow py-1 rounded-l-full'
          />
          <button
            onClick={sendMsg}
            className='bg-blue-700 flex-none text-white py-1 px-4 rounded-r-full hover:bg-blue-800 hover:text-black'
          >
            Send
          </button>
        </div>

        {/* msg section  */}
        <div className='w-full bg-green-300 min-h-[100vh] px-4 py-20 flex flex-col gap-1 justify-end items-end overflow-y-auto' >
          <p className='fixed text-4xl top-10 left-[40%] mx-auto opacity-50'>Chat-box <span className='text-sm text-red-500'>&copy; kanhaiya</span></p>
          {msg.map((item, index) => (
            <span key={index} className='bg-gray-200 text-sm py-1 px-3 inline rounded-full shadow-sm'>{item}</span>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </>
  );
}

export default App;
