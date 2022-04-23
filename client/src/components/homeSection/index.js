import React from 'react';
import './index.css';
import section1image1 from './../../images/section1 4.svg';
import section1image2 from './../../images/section1 1.svg';
import section1image3 from './../../images/section1 2.svg';

const HomeSection = (props) =>{
    return (
        <>
        <div className='home-heading'>
            <div className='home-heading-right'>
            baymax
            </div>
        </div>
         <div className='section1'>
            <div className='section1-left'  style={{backgroundColor:"orange",borderRadius:"20px"}}>
                <img src={section1image1} className='section1-left-image' alt=""/>
            </div>
            <div className='seaction1-right'>
                <div className='section1-right-heading'>
                    One Click Checkup
                </div>
                <div className='section1-right-body'>
                     Get Accurate and Refined preliminary health consultations 
                </div>
            </div>
        </div>
        <div className='section1'>
            <div className='section1-left'>
                <div className='section1-right-heading'>
                    One Click Remedies
                </div>
                <div className='section1-right-body'>
                    Get specific instant remedies based on the symptoms
                </div>
            </div>
            <div className='seaction1-right'  style={{backgroundColor:"orange",borderRadius:"20px"}}>
                <img src={section1image2} className='section1-left-image' alt=""/>
            </div>
        </div>
        <div className='section1'>
            <div className='section1-left' style={{backgroundColor:"orange",borderRadius:"20px"}}>
                <img src={section1image3} className='section1-left-image' alt=""/>
            </div>
            <div className='seaction1-right'>
                <div className='section1-right-heading'>
                    One Click Appointment
                </div>
                <div className='section1-right-body'>
                    Get fast appointments with your nearest specialized doctors in your vicinity. 
                </div>
            </div>
        </div>
        <div className='section1'>
            <div className='section1-left'>
                <div className='section1-right-heading'>
                    Prevention is better than Cure
                </div>
                <div className='section1-right-body'>
                    Get early headstart towards your treatment. 
                </div>
            </div>
            <div className='seaction1-right' >
                <iframe className='vid' src="https://www.youtube.com/embed/gIa_0h3BE2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </>
    );
}
export default HomeSection;