import logo from './pubPics/newmakoteclogo.png';
import { BrowserRouter as Router, Switch,  Route, Redirect,} from "react-router-dom";
import './App.css';

function App() {

  return;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p></p><GetMyURL />
        <p></p><GetWelcometext name='Martin' better='huge plug' toy='coffee' better='tea'/>
      </header>
    </div>
  );
}

function redirectMe(xHost) {
  location.replace(xHost);
}
function GetMyURL() {
  return window.location.href;
}

function GetWelcometext(props) {
  return <h1>Hello and Welcome {props.name} !! 
    <p style= { { color: "red", fontSize: "22pt" }}>I want a {props.toy} or {props.better} now !</p></h1>
}

export default App;
