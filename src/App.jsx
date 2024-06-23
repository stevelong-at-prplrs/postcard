import * as React from 'react';
import './App.css';
import { methodArr } from './utils';

function App() {
  const [responses, setResponses] = React.useState([]);
  const [endpoint, setEndpoint] = React.useState('testpath');
  const [selectedMethod, setSelectedMethod] = React.useState(methodArr[0]); // Initialize with the first method

  const handleRequestSubmit = () => {
    fetch(`/api/${endpoint}`, { method: selectedMethod })
      .then(response => response.text())
      .then(responseText => setResponses([responseText, ...responses]));
  };

  return (
    <>
      <h2>Generate Requests with</h2>
      <h1>PostCard</h1>
      <div className='controls'>
      <label htmlFor='methodSelect'>Method:</label>
        <select
          id='methodSelect'
          value={selectedMethod}
          onChange={e => setSelectedMethod(e.target.value)}
        >
          {methodArr.map((method, ind) => (
            <option key={ind} value={method}>
              {method.toUpperCase()}
            </option>
          ))}
        </select>
        <label htmlFor='endpoint'>Endpoint: /api/</label>
        <input
          id='endpoint'
          type='text'
          value={endpoint}
          onChange={e => setEndpoint(e.target.value || 'testpath')}
        />
        <button onClick={handleRequestSubmit}>Submit Request</button>
        <button onClick={() => setResponses([])}>Clear log</button>
      </div>
      <h2>Response log</h2>
      <div className='logwindow'>
        <div className='logwindow--inner'>
          {responses.map((row, ind) => (
            <span key={ind}>{row}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
