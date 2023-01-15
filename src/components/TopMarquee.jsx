import React from 'react';
import Marquee from "react-fast-marquee";
// import logo from "../img/logo.png";

const TopMarquee = () => {
  return (
    <div className='marquee'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-2 mt-2">
                    <Marquee gradient={false} speed={30} delay={3} direction="left" type={String} >
                        {/* <img
                         src={logo}
                         loading="lazy"
                         alt="logo" 
                         style={{width: "30px"}}
                        /> */}
                        <h3 className='text-success text-uppercase'>
                            <small style={{color: "#ff9933"}}>Goalpokher </small>
                            <small className='text-white'>Al-Madad Welfare </small>
                            <small style={{color: "#138808"}}>Society</small>
                        </h3>
                    </Marquee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMarquee