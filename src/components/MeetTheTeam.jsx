import React, {useEffect} from 'react';
import Aos from 'aos';
import img1 from "../img/TeamMembers/1.jfif";
import img2 from "../img/TeamMembers/2.jpg";
// import img3 from "../img/TeamMembers/3.jpg";
import img5 from "../img/TeamMembers/5.jpg";
import img6 from "../img/TeamMembers/aslam.jpeg";
import img7 from "../img/TeamMembers/shahnawaz.jpg";
import nazim from "../img/TeamMembers/nazim.jpg";
import "../css/MeetTheTeam.scss";

const MeetTheTeam = () => {
    const TeamData = [
        {
            sl: 1,
            name: "Md. Nurul Huda",
            imgSrc: img2,
            post: "Treasurer"
        },
        {
            sl: 2,
            name: "Md Zeeshan A.",
            imgSrc: img1,
            post: "President"
        },
        {
            sl: 3,
            name: "Md. Maroof Alam",
            imgSrc: img5,
            post: "Vice-President"
        },
        {
            sl: 4,
            name: "Nazim Saba",
            imgSrc: nazim,
            post: "Co-Ordinator"
        },
        {
            sl: 5,
            name: "Md Aslam",
            imgSrc: img6,
            post: "Co-Ordinator"
        },
        {
            sl: 6,
            name: "Md Shahnawaz",
            imgSrc: img7,
            post: "Co-Ordinator"
        }
    ];

    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])

  return (
    <div id='team'>
        <div className="container mt-md-3">
            <div className="row">
                <div className="col-md-12 mb-3">
                    <h2 style={{ fontFamily: "cursive" }} className=" pt-3 pb-2 text-decoration-underline">Meet The Team</h2>
                </div>

                {
                TeamData.map((val, ind)=>{
                    const {name, imgSrc, post} = val;
                    return(
                        <div key={ind} className="card box mb-3" style={{width: "15rem", margin: "0 auto", userSelect: "none"}}>
                            <img loading='lazy' class="card-img-top" src={imgSrc} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p class="card-text">{post}</p>
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