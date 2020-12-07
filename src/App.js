import './App.css';
import Canvas from './components/canvas/Canvas';
import ColourPicker from './components/ColourPicker/ColourPicker';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Paintforce
        </h1>
      </header>
      <Canvas />
      <div className="brush-controls-container">
        <ColourPicker />
      </div>
    </div>
  );
}

export default App;
