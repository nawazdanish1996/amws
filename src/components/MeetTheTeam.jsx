import React, {useEffect} from 'react';
import Aos from 'aos';
import img1 from "../img/TeamMembers/1.jfif";
import img2 from "../img/TeamMembers/2.jpg";
import img3 from "../img/TeamMembers/3.jpg";
import img4 from "../img/TeamMembers/4.jfif";
import img5 from "../img/TeamMembers/5.jfif";
import img6 from "../img/TeamMembers/6.jfif";
import img7 from "../img/TeamMembers/7.jfif";
import "../css/MeetTheTeam.css";

const MeetTheTeam = () => {
    const TeamData = [
        {
            sl: 1,
            name: "Md. Zeeshan Ahmad",
            imgSrc: img1,
            post: "President"
        },
        {
            sl: 2,
            name: "Md. Nurul Huda",
            imgSrc: img2,
            post: "Treasurer"
        },
        {
            sl: 3,
            name: "Nisar Ahmad Noor",
            imgSrc: img3,
            post: "Secretary"
        },
        {
            sl: 4,
            name: "Arman Danish Noori",
            imgSrc: img4,
            post: "Assit. Secretary"
        },
        {
            sl: 5,
            name: "Md. Maroof Alam",
            imgSrc: img5,
            post: "Voice-President"
        },
        {
            sl: 6,
            name: "Sarfaraj Alam",
            imgSrc: img6,
            post: "Co-Ordinator"
        },
        {
            sl: 7,
            name: "Arif Ahmed",
            imgSrc: img7,
            post: "Program Associate"
        },

    ];

    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])

  return (
    <div id='team'>
        <div className="container mt-md-3" data-aos="fade-left">
            <div className="row">
                <div className="col-md-12 mb-3">
                    <h2 style={{ fontFamily: "cursive" }} className=" pt-3 pb-2 text-decoration-underline">Meet The Team</h2>
                </div>

                {
                TeamData.map((val, ind)=>{
                    const {name, imgSrc, post} = val;
                    return(
                        <div className="col-md-3 mb-4">
                        <div key={ind} className="card box" style={{width: "15rem", margin: "0 auto"}}>
                            <img loading='lazy' className="card-img-top" src={imgSrc} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-dark">{name}</h5>
                                <p class="card-text text-dark">{post}</p>
                            </div>
                        </div>
                        </div>
                    )
                })
                }

            </div>
        </div>
    </div>
  )
}

export default MeetTheTeam