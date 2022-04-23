import React from 'react';
import './App.css';
import { useState } from 'react';
import Auth from './components/auth/index';
import Profile from './components/profile/index';
import menu from './images/menu.svg';
import Sidepanel from './components/sidepanel/index';
import HomeSection from './components/homeSection/index';
import Info from './components/info/index';
import Result from './components/result/index';
import Remedies from './components/remedies/index';

const App = (props) => 
{


  

  const[mainDisplayChange,setMainDisplayChange]=useState({
                                                    auth:"none",
                                                    profile:"none",
                                                    result:"none",
                                                    info:"none",
                                                    sidepanel:'none',
                                                    home:'block',
                                                    remedies:"none",
  })

  const[hop,setHop]=useState();
  const[img1,setImg1]=useState();
  const[m1,setM1]=useState();
  const[rem1,setRem1]=useState();
  const[info1,setInfo1]=useState();


  const[signup,setSignup]=useState(0);
  const[login,setLogin]=useState(0);
  const[profileCheck,setProfileCheck]=useState(0);
  console.log(profileCheck);
  const[authInfo,setAuthInfo]=useState({
                                        name:"",
                                        email:"",
                                        password:"",
  })
  function handleSignUp(name,email,pass)
  {
    setSignup(1);
    setAuthInfo({name:name,email:email,password:pass});
    setMainDisplayChange({home:'none',auth:"none",profile:"block",info:"none",result:"none",sidepanel:"none",remedies:"none"})
  }
  function handleLogin(email,pass)
  {
    setLogin(1);
    setAuthInfo({email:email,password:pass,name:""});
    setMainDisplayChange({home:'none',auth:"none",profile:"block",info:"none",result:"none",sidepanel:"none",remedies:"none"})
  }
  function handleProfile()
  {
    setProfileCheck(1);
    setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"block",result:"none",sidepanel:"none",remedies:"none"})
  }
  function handleRemedies(x)
  {
    setM1(x.obj.m1);
    setRem1(x.obj.rem1);
    setInfo1(x.obj.info1);
    setImg1(x.obj.img1);
    setHop(x.obj.hop);
    setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"none",result:"none",sidepanel:"none",remedies:"block"})
  }



  function sidepanelClose()
  {
    if(mainDisplayChange.auth==='block')
    {
      setMainDisplayChange({home:'none',auth:"block",profile:"none",info:"none",result:"none",sidepanel:"none",remedies:"none"})
    }
    else if(mainDisplayChange.home==='block')
    {
    setMainDisplayChange({home:'block',auth:"none",profile:"none",info:"none",result:"none",sidepanel:"none",remedies:"none"})
    }
    else if(mainDisplayChange.profile==='block')
    {
    setMainDisplayChange({home:'none',auth:"none",profile:"block",info:"none",result:"none",sidepanel:"none",remedies:"none"})
    }
    else if(mainDisplayChange.info==='block')
    {
    setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"block",result:"none",sidepanel:"none",remedies:"none"})
    }
    else if(mainDisplayChange.remedies==='block')
    {
    setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"none",result:"none",sidepanel:"none",remedies:"block"})
    }
  }

  function loginOpen()
  {
    if(signup===1 || login===1)
    {
      alert("Already Logged In Mate...!!!!")
    }
    else
    {
      setMainDisplayChange({home:'none',auth:"block",profile:"none",info:"none",result:"none",sidepanel:"none",remedies:"none"})
    }
    
  }
  function homeOpen()
  {
    setMainDisplayChange({home:'block',auth:"none",profile:"none",info:"none",result:"none",sidepanel:"none",remedies:"none"})
  }
  function profileOpen()
  {
    setMainDisplayChange({home:'none',auth:"none",profile:"block",info:"none",result:"none",sidepanel:"none",remedies:"none"})
  }
  function infoOpen()
  {
    setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"block",result:"none",sidepanel:"none",remedies:"none"})
  }

  function check()
  {
      if(mainDisplayChange.auth==='block')
      {
        setMainDisplayChange({home:'none',auth:"block",profile:"none",info:"none",result:"none",sidepanel:"block",remedies:"none"})
      }
      else if(mainDisplayChange.home==='block')
      {
        setMainDisplayChange({home:'block',auth:"none",profile:"none",info:"none",result:"none",sidepanel:"block",remedies:"none"})
      }
      else if(mainDisplayChange.profile==='block')
      {
        setMainDisplayChange({home:'none',auth:"none",profile:"block",info:"none",result:"none",sidepanel:"block",remedies:"none"})
      }
      else if(mainDisplayChange.info==='block')
      {
        setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"block",result:"none",sidepanel:"block",remedies:"none"})
      }
      else if(mainDisplayChange.remedies==='block')
      {
        setMainDisplayChange({home:'none',auth:"none",profile:"none",info:"none",result:"none",sidepanel:"block",remedies:"block"})
      }
  }
  return (
    <>
    <div className='outer-home'>
        <div className='sidepanel' style={{display:mainDisplayChange.sidepanel}}>
            <Sidepanel  sidepanelClose={sidepanelClose} 
                        loginOpen={loginOpen}
                        homeOpen={homeOpen}
                        profileOpen={profileOpen}
                        infoOpen={infoOpen}
            />
        </div>
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={menu} className="menu" onClick={()=>{check()}} alt=""/>
            </div>
        </div>
        <div className='section-outer' style={{display:mainDisplayChange.home}}>
            <div className='section-inner'>
                <HomeSection/>
            </div>
        </div>
        <div className='outer-auth' style={{display:mainDisplayChange.auth}}>
            <div className='inner-auth'>
                <Auth handleSignUp={handleSignUp} handleLogin={handleLogin}/>
            </div>
        </div>
        <div className='outer-profile' style={{display:mainDisplayChange.profile}}>
            <div className='inner-profile'>
                <Profile authInfo={authInfo} handleProfile={handleProfile}/>
            </div>
        </div>
        <div className='outer-info' style={{display:mainDisplayChange.info}}>
            <div className='inner-info'>
                <Info handleRemedies={handleRemedies}/>
            </div>
        </div>
        <div className='outer-result' style={{display:mainDisplayChange.result}}>
            <div className='inner-result'>
                <Result/>
            </div>
        </div>
        <div className='outer-remedies' style={{display:mainDisplayChange.remedies}}>
            <div className='inner-remedies'>
                <Remedies m1={m1} rem1={rem1} info1={info1} img1={img1} hop={hop}/>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
