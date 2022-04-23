import React from 'react';
import './index.css';
import { useState } from 'react';





const Remedies = (props) => 
{
  const[modale,setModale]=useState("none");
  console.log(modale)
  // console.log(props.hop)
  return (
    <>
    {/* <div className='modal-outer' style={{display:modale}} onClick={()=>{setModale("none")}}>
        <div className='modal-inner'>
          <div className='modal-inner-inner'>
              Mail sent to the respected hospital (With your details)
          </div>
        </div>
    </div> */}

    <div className='rem-inner'>
      <div className='rem-inner-left'>
        <div className='rem-inner-left-up'>
          <div className='rem-inner-left-up-heading'>
            Remedies (Home):
          </div>
          <div className='rem-inner-left-up-image'>
            <img  src={props.img1} className="rem-image" alt=""/>
          </div>
        </div>
        <div className='rem-inner-left-down'>
          {props.rem1}
        </div>
      </div>
      <div className='rem-inner-right'>
        <div className='rem-inner-right-heading'>
            Would You Like To Sent An Appointment With The Speacilist...?
        </div>
        <div className='rem-inner-right-content'>
          <div className='rem-inner-right-content-button'>
            <div className='rem-inner-right-content-button-btn' onClick={()=>{setModale(window.alert("Appointment Set, Your desired info sent to Hospital"))}}>
              Set Appointment
            </div>
          </div>
          <div className='rem-inner-right-content-hospitalname'>
            <div className='rem-hosp-name'>
            AIIMS,DELHI
            </div>
            <div className='rem-hosp-detail'>
            All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.
            </div>
            <div className='rem-hosp-address'>
            Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029
            </div>
            <div className='rem-hosp-phone'>
              011 2658 8500
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Remedies;