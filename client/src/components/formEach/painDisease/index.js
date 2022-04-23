// import React, { useEffect } from 'react';
// import { useState } from 'react';
const PainDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Painful Walking"},
    // {name:"Belly Pain"},
    // {name:"Muscle Pain"},
    // {name:"Hip Joint Pain"},
    // {name:"Knee Pain"},
    // {name:"Neck Pain"},
    // {name:"Pain In Anal Region"},
    // {name:"Pain During Bowel Movements"},
    // {name:"Chest Pain"},
    // {name:"Abdominal Pain"},
    // {name:"Back Pain"},
    // {name:"Pain Behind The Eyes"},
    // {name:"Stomach Pain"},
    // {name:"Joint Pain"},]

    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Painful Walking
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Painful Walking")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Belly Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Belly Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Muscle Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Muscle Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Hip Joint Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Hip Joint Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Knee Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Knee Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Neck Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Neck Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Pain In Anal Region
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Pain In Anal Region")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Pain During Bowel Movements
        <input type="checkbox"  onChange={(e) =>{props.handleChangePain(e.target.checked,"Pain During Bowel Movements")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Chest Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Chest Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Abdominal Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Abdominal Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Back Pain
        <input type="checkbox"  onChange={(e) =>{props.handleChangePain(e.target.checked,"Back Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Pain Behind The Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Pain Behind The Eyes")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Stomach Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Stomach Pain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Joint Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Joint Pain")}}/>
        <span class="checkmark"></span>
      </label>
    </>
  );
}

export default PainDisease;