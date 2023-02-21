import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import Marquee from "react-fast-marquee";
// Sponsors
// import Miraj from "../img/Sponsors/Meraj.jfif";
import Samsad from "../img/Sponsors/Samsad.jfif";
import Absar from "../img/Sponsors/Absar.jpg";
import Arman from "../img/Sponsors/Arman.jfif"
import Sohrab from "../img/Sponsors/Sohrab.jfif";
import Guddu from "../img/Sponsors/Guddu.jpg";
import Maroof from "../img/Sponsors/maroof.jpg";

const RecentDonner = () => {
    const [pausePlay, setPausePlay]= useState(true);

    const obj = [
        // {
        //     sl: 1,
        //     imgSor: Miraj,
        //     name: "Miraj Alam",
        //     rs: 1000,
        //     date: "02/01/2023"
        // },
        {
            sl: 2,
            imgSor: Samsad,
            name: "Samsad Alam",
            rs: 1500,
            date: "09/02/2023"
        },
        {
            sl: 3,
            imgSor: Absar,
            name: "Md Nurul Huda",
            rs: 1100,
            date: "Each Month"
        },
        {
            sl: 4,
            imgSor: Arman,
            name: "Arman D. Noori",
            rs: 1000,
            date: "21/02/2023"
        },
        {
            sl: 5,
            imgSor: Sohrab,
            name: "Sohrab Alam",
            rs: 800,
            date: "25/01/2023"
        },
        {
            sl: 5,
            imgSor: Guddu,
            name: "Nisar Ahmad Noor",
            rs: 1100,
            date: "25/01/2023"
        },
        {
            sl: 6,
            imgSor: Maroof,
            name: "Md Maroof Alam",
            rs: 500,
            date: "02/02/2023"
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
        <div className="container">
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
                        <div className='card shadow-lg ms-2 boxes p-2' key={ind} style={{width: "10rem", margin: "0 auto"}}>
                            <img style={{
                                    width: "70px",
                                    borderRadius: "20px",
                                    margin: "0 auto"
                                }} loading='lazy' className="card-img-top" src={imgSor} alt="img" />
                            <div>
                                { name === "" ? "":
                                    <h6 style={{marginTop: "5px", color: "#4F0341"}}>{name}</h6>
                                }
                                {rs === "" ? "" :
                                <p style={{marginTop: "-8px", color: "black"}}>Rs. {rs}</p>
                                }
                                {date === "" ? "" :
                                <p style={{marginTop: "-18px", color: "black"}}>Date: {date}</p>
                                }
                            </div>
                        </div>
                        
                            // <div className="card boxes" 
                            //     style={{
                            //         width: "10rem", 
                            //         margin: "0 auto",
                            //     }}>
                            //     {
                            //         imgSor === "" ?
                            //         <img 
                            //         loading='lazy' className="card-img-top" src={demo} alt="img" />
                            //         :
                            //         <img loading='lazy' className="card-img-top" src={imgSor} alt="img" />
                            //     }
                            //     <div className="card-body bg-info">
                            //         {
                            //             name === "" ? "" :
                            //             <h6 className="card-title text-dark">{name}</h6>
                            //         }
                            //         {
                            //             rs === "" ? "" :
                            //             <p style={{marginTop: "-5px"}} class="card-text text-dark">Rs. {rs}</p>
                            //         }
                            //         {
                            //             date === "" ? "" :
                            //             <p style={{marginTop: "-15px"}} class="card-text text-dark">Date: {date}</p>
                            //         }
                            //     </div>
                            // </div>
                    )
                })}
                </Marquee>


            </div>
        </div>
    </div>
  )
}

export default RecentDonner;