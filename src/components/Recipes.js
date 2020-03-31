import React, {Component,Fragment } from 'react';
import'./Home.css';
import Form from './Form';
const App_ID ="1d3f0763";
const App_key="5dd1fa3269155ee8170170eafc59d19b";

class Recipes extends Component{
  state = {
    recipes:[]
  }
 getRecipe=async(e)=>{
   const recipeName=e.target.elements.recipeName.value;
   e.preventDefault();
   const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${App_ID}&app_key=${App_key}&count=10`)
   const data = await api_call.json();
   this.setState({recipes:data.hits});
   console.log(this.state.recipes);
 }

render(){
      return (
      <div className ="results">
        
        <Form getRecipe={this.getRecipe}/>
        {this.state.recipes.map((recipe)=>{
        return (
        
          <div className='result' key={recipe.recipe.calories}>
             
    
           <img src={recipe.recipe.image} alt={recipe.label} width='200px'/>
        <p>Recipe Name:{recipe.recipe.label}</p>
        <p>Recipe source:<a href={recipe.recipe.shareAs}>Get Recipe</a></p>
       
        </div>
        
        );
        })}
           
      </div>
      );
    };
    
  }
 

export default Recipes;