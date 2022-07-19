
import './App.css';
import Developer from './Components/Developer';

function App() {
  return (
    <div className="App">

      <Developer name = "Gabriel" age = {19} country = "Brasil" />
      <Developer name = "Filipe" age = {28} country = "Brasil" />
      <Developer name = "Mariana" age = {24} country = "Itália" />

    </div>
  );
}

export default App;
