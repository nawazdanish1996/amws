import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import Marquee from "react-fast-marquee";
// Sponsors
// import Miraj from "../img/Sponsors/Meraj.jfif";
// import Samsad from "../img/Sponsors/Samsad.jfif";
import Absar from "../img/Sponsors/Absar.jpg";
import Arman from "../img/Sponsors/Arman.jfif"
import Sohrab from "../img/Sponsors/Sohrab.jfif";
import Guddu from "../img/Sponsors/Guddu.jpg";
import Maroof from "../img/Sponsors/maroof.jpg";
import Abedullah from "../img/Sponsors/abedullah.jfif";
import Sajjad from "../img/Sponsors/sajjad.jfif";
import Faryad from "../img/Sponsors/faryad.jfif";
import Sarfaraj from "../img/Sponsors/Sarfaraj.jfif";
import Sarf from "../img/Sponsors/6.jfif";
import Raja from "../img/Sponsors/raja.jfif";
import ShafaMotors from "../img/Sponsors/ShifaMotors.jfif";
import Rehan from "../img/Sponsors/rehaN.jfif";
import Rizwan from "../img/Sponsors/rizwan.jfif";
import Anwar from "../img/Sponsors/anwar.jfif";
import Indrajit from "../img/Sponsors/indrajit.jfif";
import Shahnawaz from "../img/Sponsors/shahnawaz.jfif";
import Matlub from "../img/Sponsors/matlub.jfif";

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
        // {
        //     sl: 2,
        //     imgSor: Samsad,
        //     name: "Samsad Alam",
        //     rs: 1500,
        //     date: "09/02/2023"
        // },
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
            rs: 1100,
            date: "24/02/2023"
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
            rs: 500,
            date: "24/02/2023"
        },
        {
            sl: 6,
            imgSor: Maroof,
            name: "Md Maroof Alam",
            rs: 500,
            date: "24/02/2023"
        },
        {
            sl: 7,
            imgSor: Abedullah,
            name: "Md Abedullah",
            rs: 500,
            date: "24/02/2023"
        },
        {
            sl: 8,
            imgSor: Sajjad,
            name: "Sajid Reza",
            rs: 200,
            date: "24/02/2023"
        },
        {
            sl: 9,
            imgSor: Faryad,
            name: "Team Pradhan Faryad",
            rs: 3600,
            date: "28/02/2023"
        },
        {
            sl: 10,
            imgSor: Sarfaraj,
            name: "Sarfaraj Alam",
            rs: 1000,
            date: "01/03/2023"
        },
        {
            sl: 11,
            imgSor: Sarf,
            name: "Sarfaraj Alam",
            rs: 500,
            date: "01/03/2023"
        },
        {
            sl: 12,
            imgSor: Raja,
            name: "Raja Medicine",
            rs: 300,
            date: "01/03/2023"
        },
        {
            sl: 13,
            imgSor: ShafaMotors,
            name: "Shafa Motors Debiganj",
            rs: 4000,
            date: "01/03/2023"
        },
        {
            sl: 14,
            imgSor: Rehan,
            name: "Rehan",
            rs: 500,
            date: "01/03/2023"
        },
        {
            sl: 15,
            imgSor: Rizwan,
            name: "Md Rizwan",
            rs: 500,
            date: "02/03/2023"
        },
        {
            sl: 16,
            imgSor: Anwar,
            name: "Md Anwar Alam",
            rs: 1000,
            date: "02/03/2023"
        },
        {
            sl: 17,
            imgSor: Indrajit,
            name: "Indrajit Das SI Of School",
            rs: 500,
            date: "02/03/2023"
        },
        {
            sl: 18,
            imgSor: Matlub,
            name: "Dr. Matlub",
            rs: 200,
            date: "02/03/2023"
        },
        {
            sl: 19,
            imgSor: Shahnawaz,
            name: "Shahnawaz Travels",
            rs: 300,
            date: "02/03/2023"
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

                <Marquee play={pausePlay} pauseOnHover={onMouseEnterPause} gradient={false} speed={60} direction="left" >
                {obj.map((val, ind)=>{
                    const {name, rs, date, imgSor} = val;
                    return(
                        <div className='card shadow-lg ms-2 boxes p-2' key={ind} style={{width: "14rem", margin: "0 auto"}}>
                            <img style={{
                                    width: "100%",
                                    borderRadius: "20px",
                                    margin: "0 auto"
                                }} loading='lazy' className="card-img-top" src={imgSor} alt="img" />
                            <div>
                                { name === "" ? "":
                                    <p style={{marginTop: "5px", fontWeight: "bold", color: "#4F0341"}}>{name}</p>
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