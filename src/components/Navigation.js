import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';



import'./Home.css';
const Navigation=()=>{
 

    return(
      <div>
      <Navbar collapseOnSelect expand="lg"bg="dark" variant="dark">
  <Navbar.Brand href="#home">Fitz
  <img
        src="/icon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=" logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link  variant="pill" href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/recipes">Recipes</Nav.Link>
      <Nav.Link href="/checkBmi">CheckBmi</Nav.Link>
      <NavDropdown className="mr-5"title="Gif-Exercise" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/beginner">Beginner</NavDropdown.Item>
        <NavDropdown.Item href="/intermediate">Intermediate</NavDropdown.Item>
        <NavDropdown.Item href="advance">Advance</NavDropdown.Item>
         </NavDropdown>
      <Nav.Link href="/contact" id="contact">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>
        
    );
}

export default Navigation;