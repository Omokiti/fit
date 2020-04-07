import React, {Fragment}from 'react';
import {Row,Col,Button } from 'react-bootstrap';
import history from './history';

import'./Home.css';
const Home=()=>{
  
    return(
      
   <Fragment>
    <Row>
    <Col md={true}>
      
      <div>
      <img src="/Header-min.png"className="bg-img" alt="header"/>
      <h1 className="top-left">The all in one platform <br/>for your health</h1>
      
      <p className="top-lefts">Fitz fitness platform is all 
       you need to start and <br/> maintain a healthy lifestyle we offer 
       amazing <br/>feautures tailored to you.
      </p>
      <Button id="get-btns"onClick={()=>history.push('/checkbmi')}>Get Started</Button>
      </div>
    </Col>
    </Row>
   
      <Row className="mt-5">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        <Col md={true}>
      <h2>What We Offer</h2>
      <p id="features">more than just another fitness platform</p>
      </Col>
      </Row>
      <Row className='mt-5'>
    <Col md={4}>
    <div class="card ml-3" style={{width: "300px",height:"240px"}}>
  <img src="/vector.svg" class="card-img-top" alt="gif-workout" style={{width: "50px"}}className="exercise"/>
  <div class="card-body ">
    <h5 class="card-title">Gif Workouts</h5>
    <span class="card-text">lack data but still interested  in working out?
     We have got you covered with our new gif workouts,save data and stay fit.
     </span>
  </div>
  </div>
    </Col>
 
    <Col md={4}>
    <div class="card ml-3" style={{width: "300px",height:"240px"}}>
  <img src="/vecto.svg" class="card-img-top" alt=" recipes" style={{width: "50px"}}className="exercise"/>
  <div class="card-body ">
    <h5 class="card-title">Get Recipes</h5>
    <span class="card-text">
     Workout is just 20% of the goal,while 
     healthy eating is 80%,get
     new and easy recipes here.
     </span>
  </div>
  </div>
    </Col>
    <Col md={4}>
    <div class="card ml-3" style={{width: "300px",height:"240px"}}>
  <img src="/vectors.svg" class="card-img-top" alt="bmi" style={{width: "50px"}}className="exercise"/>
  <div class="card-body ">
    <h5 class="card-title mt-4">Check Bmi</h5>
    <span class="card-text mt-4 ">
     Body mass index is the only 
     way to know your total fat percentage and what to do next.
     </span>
  </div>
  </div>
      </Col>
      
     </Row>
     <Row className='mt-5 infos'>
       <Col md={true}>
      <img src="/brooke-min.png"alt="brooke" id="bodyrules"/>

      <h2 id="rules">Your Body Your Rules</h2>

      <span id="rule">
        We are all about conforming <br/>to  your own standards,we
        jut provide the necessary tool that you need.<br/> 
        This is more than working out or eating right,it is a healthy lifestyle,<br/>
        chooing to live right and making the right decisions,but you are not alone<br/> because
        we are here,every tep of the way.
      </span>
      <Button id="start"onClick={()=>history.push('/recipe')}>Start Now</Button>
      
       </Col>

       
     </Row>
     <Row className='mt-5'>
       <Col md={true}>
      <h2>Testimonials</h2>
      <p id="features">see what other have to say about our product</p>
      </Col>
      </Row>
     <Row className=" mt-4 profiles">
    
    <Col md={4}>
      <img src="/Ellipse 5-min.png" className="profile" alt="Farah Muhamed"/>
      <br/>
      <p className="ml-5">Farah Muhamed</p>
    <p className="ml-5">I started using this last<br/>
     year and I can confidently say<br/>
     it's my best decision yet.
     </p>
    </Col>
    <Col md={4}>
      <img src="/Ellipse 6-min.png" className="profile" alt="Mark Johnson"/>
      <br/>
      <p className="ml-5"> Mark Johnson</p>
    <p className="ml-5" >What more can I say than <br/>
      thank to those who made this.</p>
    </Col>
    <Col md={4}>
      <img src="/Ellipse 7-min.png"className="profile" alt="mary"/>
      <br/>
      <p className="ml-5">Fegor Komaro</p>
    <p className="ml-5">I met all my fitne goal by <br/>
    using this platform alone
    </p>
    </Col>
  
     </Row>
    
     </Fragment>
 

       
    );
}


export default Home;