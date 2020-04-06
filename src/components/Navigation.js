import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import'./Home.css';
const Navigation=()=>{
 

    return(
      
     <nav class="navbar navbar-expand-lg  ">
  <p class="navbar-brand" >Fitz
  <img src="/icon.png" width="30" height="30" alt="logo"/>
  </p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    <div></div>
    <div></div>
    <div></div>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/checkBmi">CheckBmi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/recipes">Recipes</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Gif-Exercise
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/beginner">Beginner</a>
          <a class="dropdown-item" href="/intermediate">Intermediate</a>
          <a class="dropdown-item" href="/advance">Advance</a>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/contact" id="contact">Contact</a>
      </li>
    </ul>
    
  </div>
</nav>

        
    );
}

export default Navigation;