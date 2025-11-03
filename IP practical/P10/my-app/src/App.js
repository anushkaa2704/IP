import React, { useState } from 'react';
import './App.css';

function App() {
  // STATE - data that can change
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div className="app">
      <h1>Simple State & Props Demo</h1>
      
      {/* Parent Component with STATE */}
      <div className="parent">
        <h2>Parent Component (Manages State)</h2>
        
        <div className="state-section">
          <h3>🔹 State Examples:</h3>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increase Count
          </button>
          
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <p>Hello, {name}!</p>
        </div>

        {/* Passing data via PROPS to child components */}
        <div className="props-section">
          <h3>🔹 Props Examples:</h3>
          
          <UserCard 
            userName={name}
            userCount={count}
          />
          
          <CounterDisplay 
            currentCount={count}
            onReset={() => setCount(0)}
          />
        </div>
      </div>
    </div>
  );
}

// Child Component 1 - Receives PROPS
function UserCard(props) {
  return (
    <div className="card">
      <h4>User Card (Child Component)</h4>
      <p>Name from props: <strong>{props.userName}</strong></p>
      <p>Count from props: <strong>{props.userCount}</strong></p>
    </div>
  );
}

// Child Component 2 - Receives PROPS
function CounterDisplay({ currentCount, onReset }) {
  return (
    <div className="card">
      <h4>Counter Display (Child Component)</h4>
      <p>Current count: <strong>{currentCount}</strong></p>
      <button onClick={onReset}>
        Reset Count (via props function)
      </button>
    </div>
  );
}

export default App;