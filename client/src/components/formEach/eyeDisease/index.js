// import React, { useEffect } from 'react';
// import { useState } from 'react';
const EyeDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Redness Of Eyes"},
    // {name:"Watering From Eyes"},
    // {name:"Yellowing Of Eyes"},
    // {name:"Blurred And Distorted Vision"}]
    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Redness Of Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Redness Of Eyes")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Watering From Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Watering From Eyes")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Yellowing Of Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Yellowing Of Eyes")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Blurred And Distorted Vision
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Blurred And Distorted Vision")}}/>
        <span class="checkmark"></span>
      </label>
      
    </>
  );
}

export default EyeDisease;