import React from 'react';
import {  Row, Col,Nav,NavDropdown } from 'react-bootstrap';
import './Home.css';
const Footer = () => {
  return (
    <div>

      <Row className="footer">
        
          
            <Col md={4}className="pl-4 pt-3">
              <p><u> Main Menu</u></p>
              <Nav.Link style= {{color:"white"}} href="/">Home</Nav.Link>
      <Nav.Link style= {{color:"white"}} href="/about">About</Nav.Link>
      <Nav.Link style= {{color:"white"}} href="/recipes">Recipes</Nav.Link>
      <Nav.Link style= {{color:"white"}} href="/checkBmi">CheckBmi</Nav.Link>
      <NavDropdown   className="mr-5"title="Gif-Exercise" style= {{color:"white"}} id="collasible-nav-dropdown">
        <NavDropdown.Item   href="/beginner">Beginner</NavDropdown.Item>
        <NavDropdown.Item   href="/intermediate">Intermediate</NavDropdown.Item>
        <NavDropdown.Item  href="advance">Advance</NavDropdown.Item>
         </NavDropdown>
      <Nav.Link   style= {{color:"white"}} href="/contact" id="contact">Contact</Nav.Link>
            </Col>
            <Col md={4} classsName= "pt-3">
           <p id="footer"><u>Get in Touch</u></p>
          <p> We at Fitz would like to hear from you</p>
          <form>
            <input type="email"placeholder="enter your email"/>
            <button id="btn">Send</button>
          </form>

            </Col>
            <Col md={4} className= "pt-3">
            <p><u>Subscribe to Our Newsletter</u></p>
            <p> We at Fitz would like to send you our amazing Newsletters</p>
        <form>
            <input type="email"placeholder="enter your email"/>
            <button id="btn">Subscribe</button>
          </form>
            </Col>
            <Col md={true}>
            <hr />
            <span>&copy; Fitz 2020 Copyright. All rights reserved.</span>
            </Col>
           
          
        

      </Row>

    </div>
  );
}

export default Footer;