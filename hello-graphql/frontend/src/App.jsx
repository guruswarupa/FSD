import { useEffect, useState } from 'react';
function App() {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{ message }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.data.message))
      .catch((err) => setMessage('Error fetching message'));
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React + GraphQL Example</h1>
      <h2>{message}</h2>
    </div>
  );
}
export default App;