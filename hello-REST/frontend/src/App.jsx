import { useEffect, useState } from 'react';
function App() {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    fetch('http://localhost:4000/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.text))
      .catch((err) => setMessage('Error fetching message'));
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React + Express Example</h1>
      <h2>{message}</h2>
    </div>
  );
}
export default App;