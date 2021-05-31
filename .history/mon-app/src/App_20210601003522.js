import logo from './logo.svg';
import './App.css';
// import Profile1 from './Profile/Profile1'

function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);