// import React, { useEffect } from 'react';
// import { useState } from 'react';
const LegDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Swollen Legs"},
    // {name:"Prominent Veins On Calf"},]
    
    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Swollen Legs
        <input type="checkbox" onChange={(e) =>{props.handleChangeLegs(e.target.checked,"Swollen Legs")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Prominent Veins On Calf
        <input type="checkbox" onChange={(e) =>{props.handleChangeLegs(e.target.checked,"Prominent Veins On Calf")}}/>
        <span class="checkmark"></span>
      </label>
    </>
  );
}

export default LegDisease;