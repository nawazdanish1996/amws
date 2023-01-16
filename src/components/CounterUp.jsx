import React from 'react';
import "../css/CounterUp.css";
import { CountUp } from 'use-count-up';

const CounterUp = () => {
  return (
    <div className='bg-dark'>
        <div className="container">
            <div className="row">

                <div className="col-md-4 p-5 mi">
                    <h1 className='text-warning'>
                        <CountUp isCounting end={150} duration={3.2} />
                        <span>+</span>
                    </h1>
                    <h6 style={{color: "#7f8c8d"}}>Volunteers Engaged this Year</h6>
                </div>

                <div className="col-md-4 p-5 mi">
                    <h1 className='text-warning'>
                        <CountUp isCounting end={4} duration={3.2} />
                        <span>+</span>
                    </h1>
                    <h6 style={{color: "#7f8c8d"}}>Years of Voluntary Service</h6>
                </div>

                <div className="col-md-4 p-5 mi">
                    <h1 className='text-warning'>
                        <CountUp isCounting end={527} duration={3.2} />
                        <span>+</span>
                    </h1>
                    <h6 style={{color: "#7f8c8d"}}>Volunteering Hours this Year</h6>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CounterUp