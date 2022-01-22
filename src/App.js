
import './App.css';
import Home from './Components/Home';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import RegForm from './Components/Regs/RegForm';
import Login from './Components/Login';
import Forgot from './Components/Forgot';
import Dash from './Components/Dash';

function App() {
  return (
    <div>
       <Router basename="/cryptoinvest">
        <Routes>
        <Route exact path="/dash" element={<Dash />} />
    </Routes>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<RegForm />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} /> 
    </Routes>      
    </div>
      </Router>
     </div>
  );
}

export default App;
