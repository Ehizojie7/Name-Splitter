import React, { useState } from 'react';
import './nameinput.css';

function NameInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const names = inputValue.split(',').map(name => name.trim());
    onSubmit(names);
    setInputValue('');
  }

  return (
  
    <form onSubmit={handleSubmit}>
      <div className='input'>
      <input
        type="text"
        placeholder="Enter names separated by commas"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        className='text'
      />
      <button className='submit' type="submit">Submit</button>
      </div>
    </form>
  
  );
}

export default NameInput;
