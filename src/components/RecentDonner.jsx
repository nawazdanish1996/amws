import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import Marquee from "react-fast-marquee";
import img1 from "../img/TeamMembers/1.jfif";

const RecentDonner = () => {
    const [pausePlay, setPausePlay]= useState(true);

    const obj = [
        {
            sl: 1,
            imgSor: img1,
            name: "NAME",
            rs: 10000,
            date: "12/01/22"
        },
        {
            sl: 2,
            imgSor: img1,
            name: "xyz",
            rs: 1000,
            date: "15/08/2022"
        },
        {
            sl: 3,
            imgSor: img1,
            name: "NAME",
            rs: 300,
            date: "12/01/22"
        },
        {
            sl: 4,
            imgSor: img1,
            name: "NAME",
            rs: 900,
            date: "13/01/22"
        },
        {
            sl: 5,
            imgSor: img1,
            name: "NAME",
            rs: 101,
            date: "13/01/22"
        },
        {
            sl: 6,
            imgSor: img1,
            name: "NAME",
            rs: 202,
            date: "13/01/22"
        },
    ];

    const onMouseEnterPause = () =>{
        setPausePlay(false)
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <div id='sponsors'>
        <div className="container" data-aos="fade-left">
            <div className="row">
                <div className="col-md-12">
                    <h2 style={{ fontFamily: "cursive" }} className=" pt-3 pb-2 text-decoration-underline">
                        List of the Sponsors
                    </h2>
                </div>

                <Marquee play={pausePlay} pauseOnHover={onMouseEnterPause} gradient={false} speed={15} direction="left" >
                {obj.map((val, ind)=>{
                    const {name, rs, date, imgSor} = val;
                    return(
                        
                            <div className="card boxes" style={{width: "10rem", margin: "0 auto"}}>
                                <img loading='lazy' className="card-img-top" src={imgSor} alt="img" />
                                <div className="card-body bg-info">
                                    <h6 className="card-title text-dark">{name}</h6>
                                    <p style={{marginTop: "-5px"}} class="card-text text-dark">Rs. {rs}</p>
                                    <p style={{marginTop: "-18px"}} class="card-text text-dark">Date: {date}</p>
                                </div>
                            </div>
                    )
                })}
                </Marquee>


            </div>
        </div>
    </div>
  )
}

export default RecentDonner;