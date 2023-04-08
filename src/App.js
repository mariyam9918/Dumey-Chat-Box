import React, { useState } from 'react';
import "./App.css"
const error="Please Enter Somthing"
function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errormsg,setError]=useState('')

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    
    if(inputValue < 1){
      setError(error)
    }
    else{
      const newMessage = {
        text: inputValue,
        timestamp: Date.now()
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      setError('')
    }

    
  }

  return (
    <>
    <div className='main'>

        <div className='main-contain'>
          <ul className='msg'>
            {messages.map((message, index) => (
              <li key={index}>
                <span className='sendTextDesign'>{message.text}</span>
              </li>
            ))}
          </ul>
          <span className='errormsg'>{errormsg}</span>
          <div className="sendtextmain">

            <input className='inputarea' type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter the message here' />
            
            <button className='button-91' onClick={handleButtonClick} >Send</button>
          </div>
        </div>
      </div></>
  );
}

export default App;
