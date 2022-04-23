// import React, { useEffect } from 'react';
// import { useState } from 'react';
const BodyDisease = (props) => 
{
  //   const[user,setUser]=useState([])
  //   const userData=[
  //   {name:"Loss Of Appetite"},
  //   {name:"Loss Of Balance"},
  //   {name:"Loss Of Smell"},
  //   {name:"Weight Gain"},
  //   {name:"Weight Loss"},
  //   {name:"Muscle Weakness"},
  //   {name:"High Fever"},
  //   {name:"Mild Fever"},
  //   {name:"Cold Hands And Feets"},
  //   {name:"Throat Irritation"},
  //   {name:"fast Heart Rate"},
  //   {name:"Sweating"},
  //   {name:"Fatigue"},
  //   {name:"Chills"},
  //   {name:"Malaise"},
  //   {name:"Excessive Hunger"},
  //   {name:"Lethargy"},
  //   {name:"Phlegm"},
  //   {name:"Swelled Lymph Nodes"},
  //   {name:"Swelling Joints"},
  //   {name:"Obesity"},
  //   {name:"Restlessness"},
  //   {name:"Red Spots Over Body"},
  //   {name:"Stiff Neck"},
  //   {name:"Mood Swings"},
  //   {name:"Continuous Sneezing"},
  //   {name:"Acidity"},
  // ]
    
  //   useEffect(()=>{
  //     setUser(userData);
  //   },[]);
    
  return (
    <>
      <label class="checkContainer">Loss Of Appetite
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Loss Of Appetite")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Loss Of Balance
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Loss Of Balance")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Loss Of Smell
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Loss Of Smell")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Weight Gain
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Weight Gain")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Weight Loss
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Weight Loss")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Muscle Weakness
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Muscle Weakness")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">High Fever
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"High Fever")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Mild Fever
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Mild Fever")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Cold Hands And Feets
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Cold Hands And Feets")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Throat Irritation
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Throat Irritation")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">fast Heart Rate
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"fast Heart Rate")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Sweating
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Sweating")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Fatigue
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Fatigue")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Chills
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Chills")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Malaise
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Malaise")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Excessive Hunger
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Excessive Hunger")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Lethargy
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Lethargy")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Phlegm
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Phlegm")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Swelled Lymph Nodes
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Swelled Lymph Nodes")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Swelling Joints
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Swelling Joints")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Obesity
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Obesity")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Restlessness
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Restlessness")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Red Spots Over Body
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Red Spots Over Body")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Stiff Neck
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Stiff Neck")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Mood Swings
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Mood Swings")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Continuous Sneezing
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Continuous Sneezing")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Acidity
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Acidity")}}/>
        <span class="checkmark"></span>
      </label>
    </>
  );
}

export default BodyDisease;