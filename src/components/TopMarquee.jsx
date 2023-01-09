import React from 'react';
import Marquee from "react-fast-marquee";

const TopMarquee = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-2">
                    <Marquee speed={30} delay={3} direction="left" >
                        <h4 className='text-primary'>Al-Madad Welfare Society - Helpline Number 8759531848</h4>
                    </Marquee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMarquee