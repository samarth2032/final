// import React, { useEffect } from 'react';
// import { useState } from 'react';
const GenitalDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Abnormal Menstruation"},
    // {name:"Continuous Feel Of Urine"},
    // {name:"Dark Urine"},
    // {name:"Yellow Urine"},
    // {name:"Polyuria"},
    // {name:"Burning Micturition"},]
    
    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Abnormal Menstruation
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Abnormal Menstruation")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Continuous Feel Of Urine
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Continuous Feel Of Urine")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Dark Urine
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Dark Urine")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Yellow Urine
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Yellow Urine")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Polyuria
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Polyuria")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Burning Micturition
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Burning Micturition")}}/>
        <span class="checkmark"></span>
      </label>
    </>
  );
}

export default GenitalDisease;