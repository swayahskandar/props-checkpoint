import logo from './logo.svg';
import './App.css';
import Profile1 from './Profile/Profile1'


const App = () => {
  const alertMyInput = name => alert(name);
  return (
    <div>
      <Welcome name="Sara" alertMyInput={alertMyInput} />
    </div>
  );
 };

export default App;
