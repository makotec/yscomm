import logo from './pubPics/newmakoteclogo.png';
import './App.css';
// import { BrowserRouter as Router, Switch,  Route, Redirect,} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  navigate('https://yscomm.win');
}

export default App;
