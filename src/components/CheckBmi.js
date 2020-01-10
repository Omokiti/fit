import React from 'react';
import {Row} from 'react-bootstrap';
import'./Home.css';

class CheckBmi extends React.Component{
  constructor(props) {
    super(props);
    this.state = { name: 'Friend', weight: 90, height: 180, bmi: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
    this.submitMe = this.submitMe.bind(this);
    this.heightchange = this.heightchange.bind(this);
    this.weightchange = this.weightchange.bind(this);
    this.change = this.change.bind(this);  
    this.ticker = this.ticker.bind(this); 
    this.blur = this.blur.bind(this); 
    this.calculateBMI = this.calculateBMI.bind(this); 
 }


 heightchange(e){
   this.setState({height: e.target.value});
   e.preventDefault();
 }

 blur(e){
  this.calculateBMI();
 }
  weightchange(e){
   this.setState({weight: e.target.value});
   e.preventDefault();
 }

 calculateBMI(){

     const heightSquared = (this.state.height/100  * this.state.height/100);
     const bmi = this.state.weight / heightSquared;
     const low = Math.round(18.5 * heightSquared);                                                         
     const high = Math.round(24.99 * heightSquared);    
     let message = "";
     if( bmi >= 18.5  && bmi <= 24.99 ){
         message = "You are in a healthy weight range";
     }
     else if(bmi >= 25 && bmi <= 29.9){
       message = "You are overweight";
     }
     else if(bmi >= 30){
         message ="You are obese";
     }
     else if(bmi < 18.5){
       message = "You are under weight";
     }
     this.setState({message: message});  
     this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
     this.setState({bmi: Math.round(bmi * 100) / 100});   

 }

 submitMe(e) {
    e.preventDefault();
    this.calculateBMI();
 }

 ticker() {
   this.setState({time: new Date().toLocaleTimeString()})
 }

 componentDidMount(){
   setInterval(this.ticker, 60000);
 }

 change(e){
   e.preventDefault();
   console.log(e.target);
   this.setState({name: e.target.value});
 }

 render() {
   return (
     <div >
       <Row className="pt-3">
      
         <form onSubmit={this.submitMe} className="bmi">
           <p id="bmiheading">BMI calculator</p>
          
           <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}  placeholder="Enter your Name" />
           <br/>
            
           <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange} placeholder="Enter your Height in cm"/>
            <br/>
           
           <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange} placeholder="Enter your weight in kg" />
           <label>{this.state.checked} Hello {this.state.name},  It's currently  {this.state.time} where you are living. Your BMI is {this.state.bmi} </label>
             <label>{this.state.message}</label>
             <label>{this.state.optimalweight}</label>
            </form>
            </Row>
     </div>
   );
 }
  
}
export default CheckBmi;