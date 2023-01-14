import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import Marquee from "react-fast-marquee";
// Sponsors
import demo from "../img/Sponsors/None_photo.jpeg";
import Miraj from "../img/Sponsors/Meraj.jfif";
import Samsad from "../img/Sponsors/Samsad.jfif";
import Absar from "../img/Sponsors/Absar.jpg";

const RecentDonner = () => {
    const [pausePlay, setPausePlay]= useState(true);

    const obj = [
        {
            sl: 1,
            imgSor: Miraj,
            name: "Miraj Alam",
            rs: 1000,
            date: ""
        },
        {
            sl: 2,
            imgSor: Samsad,
            name: "Samsad Alam",
            rs: 1700,
            date: ""
        },
        {
            sl: 3,
            imgSor: Absar,
            name: "Md Nurul Huda",
            rs: 1100,
            date: "Each Month"
        }
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
                        List of the Sponsors / Hidden Heroes
                    </h2>
                </div>

                <Marquee play={pausePlay} pauseOnHover={onMouseEnterPause} gradient={false} speed={25} direction="left" >
                {obj.map((val, ind)=>{
                    const {name, rs, date, imgSor} = val;
                    return(
                        
                            <div className="card boxes" style={{width: "10rem", margin: "0 auto"}}>
                                {
                                    imgSor === "" ?
                                    <img loading='lazy' className="card-img-top" src={demo} alt="img" />
                                    :
                                    <img loading='lazy' className="card-img-top" src={imgSor} alt="img" />
                                }
                                <div className="card-body bg-info">
                                    {
                                        name === "" ? "" :
                                        <h6 className="card-title text-dark">{name}</h6>
                                    }
                                    {
                                        rs === "" ? "" :
                                        <p style={{marginTop: "-5px"}} class="card-text text-dark">Rs. {rs}</p>
                                    }
                                    {
                                        date === "" ? "" :
                                        <p style={{marginTop: "-5px"}} class="card-text text-dark">Date: {date}</p>
                                    }
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