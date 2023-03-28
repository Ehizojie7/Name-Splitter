import React, { useState } from 'react';
import NameInput from './NameInput';
import NameTable from './NameTable';
import './App.css';

function App() {
  const [names, setNames] = useState([]);

  function handleSubmit(newNames) {
    setNames(prevNames => {
      const filteredNames = newNames.filter(name => !prevNames.includes(name));
      return [...prevNames, ...filteredNames];
    });
  }
  

  function handleEdit(index, newName) {
    const newNames = [...names];
    newNames[index] = newName;
    setNames(newNames);
  }

  function handleDelete(index) {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  }

  return (
    <div className='form'>
      <NameInput onSubmit={handleSubmit} />
      {names.length > 0 ? (
        <NameTable names={names} onEdit={handleEdit} onDelete={handleDelete} />
      ) : (
        <h2>No names entered yet.</h2>
      )}
    </div>
  );
}

export default App;
