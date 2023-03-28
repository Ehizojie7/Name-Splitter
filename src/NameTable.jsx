import React from 'react';
import NameRow from './NameRow';
import'./nametable.css';

function NameTable({ names, onEdit, onDelete }) {
  return (
    <div className='content'>
    <table>
      <thead>
        <tr>
          <th>Names</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <NameRow
            key={index}
            name={name}
            onEdit={(newName) => onEdit(index, newName)}
            onDelete={() => onDelete(index)}
            on
          />
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default NameTable;
