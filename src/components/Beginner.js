import React from 'react';
import Table from 'react-bootstrap/Table';
//import './App.css';
import'./Home.css';
const Beginner=()=>{
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
      <td>Flutter Kick</td>
      <td>Body Weight</td>
      <td>Weight</td>
      <td>Core</td>
      <td><img src="/flutterkick.gif"width="150px"alt="flutterkick"/> </td>
    </tr>
    <tr>
    <td>Lying Leg Raise</td>
      <td>Body Weight</td>
      <td>Weight</td>
      <td>Core</td>
      <td><img src="lyinglegraise.gif"width="150px"alt="lyinglegraise"/> </td>
    </tr>
    <tr>
    <td>Plank Jack</td>
      <td>Body Weight</td>
      <td>Cardio</td>
      <td>Full BodyCore</td>
      <td><img src="/plankjack.gif"width="150px"alt="plankjack"/> </td>
    </tr>
  </tbody>
</Table>
          
          
        </div>
    );
}

export default Beginner;