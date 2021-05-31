import logo from './logo.svg';
import './App.css';
import Profile1 from './Profile/Profile1'

const App1 = () => (
  <div>
    <Welcome name="Sara" />
  </div>
 );

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
    <Welcome name="Sara" />
  </div>
      </header>
    </div>
  );
}

export default App;
