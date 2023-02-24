import React, {useEffect} from 'react';
import Aos from 'aos';
import "../css/SocialMedia.scss";
import fbImg from "../img/socialMediaIcons/facebook.png";
import waImg from "../img/socialMediaIcons/whatsapp.png";
import ytImg from "../img/socialMediaIcons/youtube.png";
import useSound from 'use-sound';
import boopSfx from "../sound/socialMediaSound.mp3";

const SocialMedia = () => {
  const [play, {stop}] = useSound(boopSfx);

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='socialMedida'>
        <a href="https://www.facebook.com/GoalpokherAlMadadWelfareSociety" target="blank">
            <img onMouseEnter={()=> play()} src={fbImg} loading="lazy" alt="Facebook" />
        </a>
        <a href="https://chat.whatsapp.com/FDh9eTo0dyF1YPgXRHQ1hb" target="blank">
            <img onMouseEnter={()=> play()} src={waImg} loading="lazy" alt="What's App" />
        </a>
        <a href="true" target="blank">
            <img onMouseEnter={()=>play()} onMouseLeave={()=>stop()} src={ytImg} loading="lazy" alt="YouTube" />
        </a>
    </div>
  )
}

export default SocialMedia;