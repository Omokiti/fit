import React from 'react';
import Table from 'react-bootstrap/Table';
//import './App.css';
import'./Home.css';
const Advance=()=>{
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
      <td>Reverse Crunches</td>
      <td>Body Weight</td>
      <td>Weight</td>
      <td>Core</td>
      <td><img src="/reversecrunch.gif"width="150px"alt="reversecrunch"/> </td>
    </tr>
    <tr>
    <td>Side Plank Dips</td>
      <td>Body Weight</td>
      <td>Weight</td>
      <td>Core</td>
      <td><img src="/Side-Plank-Dips.gif"width="150px"alt="sideplankdips"/> </td>
    </tr>
    <tr>
    <td>Side Plank with Leg Lift</td>
      <td>Body Weight</td>
      <td>Weight</td>
      <td>Core</td>
      <td><img src="/sideplankleglift.gif"width="150px"alt="sideplankleglift"/> </td>
    </tr>
  </tbody>
</Table>
          
          
        </div>
    );
}

export default Advance;