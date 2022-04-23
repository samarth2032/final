// import React, { useEffect } from 'react';
// import { useState } from 'react';
const MouthDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Cough"},
    // {name:"Ulcers On Tongue"},
    // {name:"Patches In Throat"},
    // {name:"Slurred Speech"},
    // {name:"Breathlessness"},]
    
    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Cough
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Cough")}}/>
          <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Ulcers On Tongue
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Ulcers On Tongue")}}/>
          <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Patches In Throat
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Patches In Throat")}}/>
          <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Slurred Speech
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Slurred Speech")}}/>
          <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Breathlessness
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Breathlessness")}}/>
          <span class="checkmark"></span>
      </label>
    </>
  );
}

export default MouthDisease;