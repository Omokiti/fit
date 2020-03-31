import React, {Fragment}from 'react';
import {Row,Col} from 'react-bootstrap';
import recipe from './recipe.png';
import'./Home.css';
const Home=()=>{
  
    return(
      
   <Fragment>
    <Row>
    <Col md={true}>
      <div className="bg-img">
      <img src="/gym-min.jpeg"alt="gym workout" />
      <h2 className="top-left">Fitz..Fitness Platform</h2>
      
      </div>
    </Col>
    </Row>
   
      <Row className="features">
      <h2>Features</h2>
    <Col md={4}>
      <div class="card2">
  <img src="/flutterkick.gif"className="exercise" alt="Gif-exercise"/>
  <p id ="workout">Work out with Gif</p>
  <div class="container">
  
    
  </div>
</div>
     
    </Col>
 
    <Col md={4}>
    <div class="card">
      <img src={recipe} className="recipe" alt="Recipes"/>
    <p id="recipe">Get Recipes</p>
    <div class="container">
  
    
  </div>
</div>
    </Col>
    <Col md={4}>
    <div class="card">
      <img src="/bmi icon-min.png"className="check" alt="BMI"/>
    <p id="check">Check BMI</p>
    <div class="container">
  
    
  </div>
</div>
      </Col>
      
     </Row>
     <Row className="profiles">
      <h2>Testimonials</h2>
    <Col md={4}>
      <img src="/healthy-min.jpg" className="profile" alt="Girl"/>
      <br/>
    <p>Fitz is an amazing platform.</p>
    </Col>
    <Col md={4}>
      <img src="/men-min.jpg" className="profile" alt="men"/>
      <br/>
    <p >I enjoy the gif-exercises.</p>
    </Col>
    <Col md={4}>
      <img src="/mary-min.jpg"className="profile" alt="mary"/>
      <br/>
    <p>I love the fact that it is free!!!</p>
    </Col>
  
     </Row>
    
     </Fragment>
 

       
    );
}


export default Home;