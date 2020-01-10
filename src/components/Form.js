import React from 'react';
//import './App.css';
import'./Home.css';
const Form = props=> (
    <form onSubmit={props.getRecipe} className="recipeform">

        <input type="text"name="recipeName" id="forminput"placeholder="Search for  Recipe"/>
        <button id="formbutton">Search</button>
    </form>

);

          
        
   

export default Form;