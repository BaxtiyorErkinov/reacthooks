import React, {useState} from 'react';
import './App.css';
import Count from './components/Count';
import IsFive from './components/isFive';

function App() {
  const [count, setCount] = useState(0);
  const [countSec, setCountSec] = useState(0);


  return (
    <div className="App">
      <Count id={1} count={count}/>

      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <IsFive count={count} />
      <hr />
      <Count id={2} count={countSec }/>
      <button onClick={() => setCountSec(prev => prev + 1)}>+</button>
    </div>
  );
}

export default App;
