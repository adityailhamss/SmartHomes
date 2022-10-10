import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from './component/Contact';
import HomePage from "./component/HomePage";
import TentangKami from './component/TentangKami';
import PanelSurya from './component/PanelSurya';
import InternetService from './component/InternetService';
import TestNavbar from './component/testNavbar';


function App() {
  return (
    <Router>
      <TestNavbar/>
        <Routes>
          <Route path = "/" element={<HomePage/>}/>
          <Route path = "/TentangKami" element={<TentangKami/>}/>
          <Route path = "/Contact" element={<Contact/>}/>
          <Route path = "/PanelSurya" element={<PanelSurya/>}/>
          <Route path = "/InternetService" element={<InternetService/>}/>
        </Routes>
      <Footer/>
    </Router>

    
  );
}

export default App;
