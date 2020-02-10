import React,{Fragment} from 'react';
import {Row,Col} from 'react-bootstrap'
import'./Home.css';

const About=()=>{
    return(
        
         <Fragment>
         <Row>
    <Col md={true}>
      <div className="bcg-image">

      </div>
      <h2 className="top-left">About Us</h2>
    
      </Col>
    </Row>
    <Row>
      <Col md={true}>
        <div className ="about">
         <h4>About</h4>
              <p>
                
                Fitz is  fitness Platform that helps fitness entusiast.<br/>It 
                has amazing features tht helps fitness enthusiast such as gif-work out images,<br/>
                Fitness enthusiast can get gif work out images which would help them workout from home, no need to go to the gym</p>
               <p> 
                 The Fitz Platform also has another feature called the BMI calculator,Users use it to calculate their Body Mass Index(BMI)<br/>
                
              </p>
              <p> 
                 The Fitz Platform also has another feature called Recipe where users can search for health recipes<br/>
                
              </p>
              </div>
      </Col>
    </Row>

   </Fragment>
          
        
    );
}

export default About;