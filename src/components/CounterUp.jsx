import React, {useEffect, useState} from 'react';
import "../css/CounterUp.scss";
import Aos from 'aos';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = () => {
    const [counterOn, setCounterOn] = useState(false);

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <div className='bg-dark'>
        <ScrollTrigger 
            onEnter={()=>setCounterOn(true)}
            onExit={()=>setCounterOn(false)}
        >
        <div className="container">
            <div className="row">

                <div className="col-md-4 p-5 mi">
                        <h1 className='text-warning'>
                            {
                            counterOn &&
                            <CountUp 
                                isCounting
                                start={0} 
                                end={150}
                                delay={0} 
                                duration={4}
                                />
                            }
                            <span>+</span>
                        </h1>
                    <h6 style={{color: "#7f8c8d"}}>Volunteers Engaged this Year</h6>
                </div>

                <div className="col-md-4 p-5 mi">
                        <h1 className='text-warning'>
                            {
                                counterOn &&
                                <CountUp 
                                    isCounting
                                    start={0} 
                                    end={4} 
                                    delay={0}
                                    duration={4} 
                                />
                            }
                            <span>+</span>
                        </h1>
                    <h6 style={{color: "#7f8c8d"}}>Years of Voluntary Service</h6>
                </div>

                <div className="col-md-4 p-5 mi">
                        <h1 className='text-warning'>
                            {
                                counterOn &&
                                <CountUp 
                                    isCounting
                                    start={0}
                                    end={527}
                                    delay={0} 
                                    duration={4}
                                />
                            }
                            <span>+</span>
                        </h1>
                    <h6 style={{color: "#7f8c8d"}}>Volunteering Hours this Year</h6>
                </div>

            </div>
        </div>
        </ScrollTrigger>
    </div>
  )
}

export default CounterUp;