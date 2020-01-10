import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation';
import Routing from './components/Routing';
import Footer from './components/Footer';

function App() {
  
    return (
      <Router>
      <div>
        <Navigation />
        <Routing />
        <Footer/>
      </div>
    </Router>
    
  )
}
render(<App />, document.getElementById("root"));

export default App;
