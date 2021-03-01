import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Home-page/HomePage';

function App() {
  const design = 
  {
    textAlign:"center",
    color:"steelblue",
    marginBottom:"50px",
    marginTop:"20px"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={design}>Paul Brother's Cricket club</h2>
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;
