import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div style={{ padding: "10px" }}>
      <table>
        <thead>
          <th style={{ border: '1px solid black', padding: '8px' }}>Id</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{d.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{d.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{d.phone}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
