
// import React, { useEffect } from 'react';
// import { useState } from 'react';
const StomachDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Swelling Of Stomach"},
    // {name:"Indigestion"},
    // {name:"Diarrhoea"},
    // {name:"Constipation"},
    // {name:"Stomach Bleeding"},]

    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Swelling Of Stomach
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Swelling Of Stomach")}}/>
        <span class="checkmark"></span>
    </label>
    <label class="checkContainer">Indigestion
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Indigestion")}}/>
        <span class="checkmark"></span>
    </label>
    <label class="checkContainer">Diarrhoea
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Diarrhoea")}}/>
        <span class="checkmark"></span>
    </label>
    <label class="checkContainer">Constipation
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Constipation")}}/>
        <span class="checkmark"></span>
    </label>
    <label class="checkContainer">Stomach Bleeding
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Stomach Bleeding")}}/>
        <span class="checkmark"></span>
    </label>
    </>
  );
}

export default StomachDisease;