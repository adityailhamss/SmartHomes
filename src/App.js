import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import HomePage from './component/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <HomePage/>
    </Router>
  );
}

export default App;
