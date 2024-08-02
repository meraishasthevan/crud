import { useState } from 'react';
import Addlist from './Addlist.js';

function Crud() {
  const initialList = [
    {
      id: 1,
      name: 'Merai',
      profession: 'Developer',
    },
    {
      id: 2,
      name: 'Kala',
      profession: 'Designer',
    },
    {
      id: 3,
      name: 'Malathi',
      profession: 'Editor',
    },
  ];

  const [lists, setlist] = useState(initialList);
  const [update, setupdate] = useState(null);
  const [tempName, setTempName] = useState('');
  const [tempProfession, setTempProfession] = useState('');

  const generateId = () => {
    return lists.length ? Math.max(...lists.map(item => item.id)) + 1 : 1;
  };

  const store = lists.map((current, i) => {
    return (
      <div className="card" key={current.id}>
        <div className="card-content">
          <h3>ID: {current.id}</h3>
          <div className="card-item">
            <strong>Name:</strong>{' '}
            {update === current.id ? (
              <input
                defaultValue={current.name}
                onChange={(e) => setTempName(e.target.value)}
              />
            ) : (
              current.name
            )}
          </div>
          <div className="card-item">
            <strong>Profession:</strong>{' '}
            {update === current.id ? (
              <input
                defaultValue={current.profession}
                onChange={(e) => setTempProfession(e.target.value)}
              />
            ) : (
              current.profession
            )}
          </div>
          <div className="card-actions">
            {update === current.id ? (
              <button onClick={() => saveupdate(current.id)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(current)}>Edit</button>
            )}
            <button onClick={() => handleDelete(current.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  });

  function handleEdit(item) {
    setupdate(item.id);
    setTempName(item.name);
    setTempProfession(item.profession);
  }

  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setlist(newlist);
  }

  function saveupdate(id) {
    const updatedList = lists.map((item) =>
      item.id === id
        ? { ...item, name: tempName, profession: tempProfession }
        : item
    );
    setlist(updatedList);
    setupdate(null);
  }

  return (
    
    <div className="crud">
        <h1>crud</h1>
      <Addlist setlist={setlist} generateId={generateId} />
      <div className="card-container">{store}</div>
    </div>

  );
}

export default Crud;
