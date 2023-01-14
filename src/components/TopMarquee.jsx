import React from 'react';
import Marquee from "react-fast-marquee";
import logo from "../img/logo.png";

const TopMarquee = () => {
  return (
    <div className='marquee'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-2">
                    <Marquee gradient={false} speed={30} delay={3} direction="left" type={String} >
                        <img
                         src={logo}
                         alt="logo" 
                         style={{width: "30px"}}
                        />
                        <h5 className='text-success text-uppercase'>Goalpokher Al-Madad Welfare Society</h5>
                        <img
                         src={logo}
                         alt="logo" 
                         style={{width: "30px"}}
                        />
                    </Marquee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMarquee