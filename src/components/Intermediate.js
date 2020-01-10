import React from 'react';
import Table from 'react-bootstrap/Table';
//import './App.css';
import'./Home.css';
const Intermediate=()=>{
    return(
        <div>
          
          <Table responsive striped bordered >
  <thead>
    <tr>
    
      <th>Exercise</th>
      <th>Equipment</th>
      <th>Exercise Type</th>
      <th>Major Muscle</th>
      <th>Exercise Picture</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mountain Climbers</td>
      <td>Body Weight</td>
      <td>Cardio</td>
      <td>Core Fullbody</td>
      <td><img src="/Mountain_Climbers"width="150px"alt="Mountain_Climbers"/> </td>
    </tr>
    <tr>
    <td>Spiderman Pushup</td>
      <td>Body Weight</td>
      <td>Weight</td>
      <td>Arms Core</td>
      <td><img src="/spidermanpushup.gif"width="150px"alt="spidermanpushup"/> </td>
    </tr>
    <tr>
    <td>Standing Oblique Crunch</td>
      <td>Dumb bells </td>
      <td> Weight</td>
      <td>Core</td>
      <td><img src="/Standing-Oblique-Crunches.gif"width="150px"alt="Standing-Oblique-Crunches"/> </td>
    </tr>
  </tbody>
</Table>
          
          
        </div>
    );
}

export default Intermediate;