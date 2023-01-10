import React from 'react';
import Marquee from "react-fast-marquee";

const TopMarquee = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-2">
                    <Marquee gradient={false} speed={30} delay={3} direction="left" type={String} >
                        <h6 className='text-white'>Goalpokher Al-Madad Welfare Society</h6>
                    </Marquee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMarquee