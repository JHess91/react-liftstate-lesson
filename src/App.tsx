import './App.css';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifting State</h1>
        <Parent />
      </header>
    </div>
  );
}

export default App;
