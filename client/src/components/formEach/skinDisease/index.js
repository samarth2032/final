// import React, { useEffect } from 'react';
// import { useState } from 'react';
const SkinDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Blackheads"},
    // {name:"Skin Rash"},
    // {name:"Itching"},
    // {name:"Internal Itching"},
    // {name:"Skin Peeling"},]

    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label class="checkContainer">Blackheads
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Blackheads")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Skin Rash
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Skin Rash")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Itching
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Itching")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Internal Itching
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Internal Itching")}}/>
        <span class="checkmark"></span>
      </label>
      <label class="checkContainer">Skin Peeling
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Skin Peeling")}}/>
        <span class="checkmark"></span>
      </label>
    </>
  );
}

export default SkinDisease;