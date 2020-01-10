import React from "react";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CheckCalorie from"./CheckBmi";
import Recipes from"./Recipes";
import Beginner from"./Beginner";
import Intermediate from"./Intermediate";
import Advance from"./Advance";
import Contact from "./Contact";
import Error from "./Error";

const Routing=()=> {
  return (
         <div>
          
        
        <Router>
        
            <Switch>
            
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/checkbmi" component={CheckCalorie} />
              <Route path="/recipes" component={Recipes} />
              <Route path="/beginner" component={Beginner} />
              <Route path="/intermediate" component={Intermediate} />
              <Route path="/advance" component={Advance} />
              <Route path="/contact" component={Contact} />
             <Route  component={Error} />
            </Switch>
           
            </Router>
            
           
            </div>
      
      
  );
}
export default Routing;