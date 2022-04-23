import React from 'react';
import './index.css';
const Sidepanel = (props) => 
{
  return (
    <>
    <div className='sidepanel-outer'>
        <div className='sidepanel-left'>
            <div className='sidepanel-logo' style={{cursor:"pointer"}}onClick={()=>{props.homeOpen()}}>
                BAYMAX
            </div>
            <div className='sidepanel-each' onClick={()=>{props.loginOpen()}}>
                Login / Signup
            </div>
            <div className='sidepanel-each' onClick={()=>{props.profileOpen()}}>
                Profile
            </div>
            <div className='sidepanel-each' onClick={()=>{props.infoOpen()}}>
                Info
            </div>
        </div>
        <div className='sidepanel-right' onClick={()=>{props.sidepanelClose()}}>
        </div>
    </div>
    </>
  );
}

export default Sidepanel;