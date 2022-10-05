import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
<<<<<<< HEAD
import Footer from "./component/Footer";
import Contact from './component/Contact';
=======
import HomePage from './component/HomePage';
>>>>>>> 5f38fe2536290cabc7be85515ca79e3a622fe942
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
<<<<<<< HEAD
        <Routes>
          <Route path = "/" element={<Contact/>}/>
        </Routes>
      <Footer/>
=======
      <HomePage/>
>>>>>>> 5f38fe2536290cabc7be85515ca79e3a622fe942
    </Router>
  );
}

export default App;
