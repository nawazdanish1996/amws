import React from 'react';
import "../css/SocialMedia.css";
import fbImg from "../img/socialMediaIcons/facebook.png";
import waImg from "../img/socialMediaIcons/whatsapp.png";
import ytImg from "../img/socialMediaIcons/youtube.png";

const SocialMedia = () => {
  return (
    <div id='socialMedida'>
        <a href="https://www.facebook.com/GoalpokherAlMadadWelfareSociety" target="blank">
            <img src={fbImg} loading="lazy" alt="Facebook" />
        </a>
        <a href="https://chat.whatsapp.com/FDh9eTo0dyF1YPgXRHQ1hb" target="blank">
            <img src={waImg} loading="lazy" alt="What's App" />
        </a>
        <a href="true" target="blank">
            <img src={ytImg} loading="lazy" alt="YouTube" />
        </a>
    </div>
  )
}

export default SocialMedia;