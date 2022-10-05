import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from './component/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path = "/" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
