import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
