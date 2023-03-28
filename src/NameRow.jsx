import React, { useState } from 'react';
import './namerow.css';

function NameRow({ name, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  function handleSave() {
    onEdit(inputValue);
    setIsEditing(false);
  }

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <div className='buttons'>
            <button className='edit' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='delete' onClick={onDelete}>Delete</button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default NameRow;
