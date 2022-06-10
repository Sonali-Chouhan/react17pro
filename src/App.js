import React  from 'react';
import './App.css';
import Linechart from './Mycomponent/LineChart';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Areachart from './Mycomponent/AreaChart';
import Barchart from './Mycomponent/BarChart';



const App=()=>{

return (
    <div  className="App">
       <Router>
     
        <div className="header">
          <Link to="/">LineChart</Link>
          <Link to="/barchart">Bar-Chart</Link>
          <Link to="/areachart">Area-Chart</Link>
        </div>
        <Routes>
          <Route path="/" element={<Linechart />} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/areachart" element={<Areachart/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;



