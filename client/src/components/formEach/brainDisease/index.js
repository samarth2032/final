// import React, { useEffect } from 'react';
// import { useState } from 'react';
const BrainDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Anxiety"},
    // {name:"Depression"},
    // {name:"Altered Sensorium"},
    // {name:"Lack Of Concentration"},
    // {name:"Unsteadines"},
    // {name:"Headache"},
    // {name:"Irritability"},
    // {name:"Dizziness"},]
    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Anxiety
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Anxiety")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Depression
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Depression")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Altered Sensorium
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Altered Sensorium")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Lack Of Concentration
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Lack Of Concentration")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Unsteadines
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Unsteadines")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Headache
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Headache")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Irritability
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Irritability")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Dizziness
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Dizziness")}}/>
        <span class="checkmark"></span>
      </label>
    </>
  );
}

export default BrainDisease;