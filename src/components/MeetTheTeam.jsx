import React from 'react';
import img1 from "../img/TeamMembers/1.jpg";
import "../css/MeetTheTeam.css";

const MeetTheTeam = () => {
    const TeamData = [
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },
        {
            sl: 1,
            name: "Md. Nurul Absar",
            imgSrc: img1
        },

    ];

  return (
    <div id='team'>
        <div className="container mt-md-3">
            <div className="row">
                <div className="col-md-12 mb-3">
                    <h2 style={{ fontFamily: "cursive" }} className=" pt-3 pb-2 text-decoration-underline">Meet The Team</h2>
                </div>

                {
                TeamData.map((val, ind)=>{
                    const {name, imgSrc} = val;
                    return(
                        <div key={ind} className="card ms-md-4 mb-md-3 box" style={{width: "15rem"}}>
                            <img className="card-img-top" src={imgSrc} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-dark">{name}</h5>
                                <p class="card-text text-dark">Director</p>
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