import React, { useState } from 'react';
import "../css/BloodDonationCamp.scss";
import Marquee from "react-fast-marquee";
import Banner from "../img/blood donner/Banner.jfif";
import One from "../img/blood donner/1.jfif";
import Two from "../img/blood donner/2.jfif";
import Three from "../img/blood donner/3.jfif";
import Four from "../img/blood donner/4.jfif"
import Six from "../img/blood donner/5.jfif";
import Seven from "../img/blood donner/6.jfif"
import Eight from "../img/blood donner/7.jfif";
import Nine from "../img/blood donner/8.jfif";
import Ten from "../img/blood donner/10.jfif";
import Eleven from "../img/blood donner/11.jfif";
import Twelve from "../img/blood donner/9.jfif";
import Thirteen from "../img/blood donner/12.jfif";
import Fourteenth from "../img/blood donner/13.jfif";

const BloodDonationCamp = () => {
    const [pausePlay, setPausePlay]= useState(true);

    const bloodDonner = [
        {imgSrc: Banner},
        {imgSrc: One},
        {imgSrc: Two},
        {imgSrc: Three},
        {imgSrc: Four},
        {imgSrc: Six},
        {imgSrc: Seven},
        {imgSrc: Eight},
        {imgSrc: Nine},
        {imgSrc: Ten},
        {imgSrc: Eleven},
        {imgSrc: Twelve},
        {imgSrc: Thirteen},
        {imgSrc: Fourteenth},
    ];

    const onMouseEnterPause = () =>{
        setPausePlay(false)
    }

  return (
    <div className='bloodContainer'>
        <h1><span style={{color: "purple"}}>Give the Gift of Life:</span> Successful Blood Donation Camp Held!</h1>
        <h3 style={{color: "purple"}}>List of the Blood Donners 2023</h3>

        <Marquee play={pausePlay} pauseOnHover={onMouseEnterPause} gradient={false} speed={80} direction="left" >
            {bloodDonner.map((val, ind)=>{
                console.log(val);
                return(
                    <div className='card' style={{width: "18rem"}} key={ind}>
                        <img className="card-img-top" src={val.imgSrc} alt="img" />
                    </div>
                )
            })}
        </Marquee>
    </div>
  )
}

export default BloodDonationCamp;