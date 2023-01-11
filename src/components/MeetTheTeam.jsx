import React from 'react';
import img1 from "../img/TeamMembers/1.jpg";
import "../css/MeetTheTeam.css";

const MeetTheTeam = () => {
    const TeamData = [
        {
            sl: 1,
            name: "Master Absar",
            imgSrc: img1,
            post: "Director"
        },
        {
            sl: 2,
            name: "Guddu",
            imgSrc: img1,
            post: "Cashieeeeeeeeer"
        },
        {
            sl: 3,
            name: "Gudda",
            imgSrc: img1,
            post: "Director"
        },
        {
            sl: 4,
            name: "Demo Names",
            imgSrc: img1,
            post: "Director"
        },
        {
            sl: 4,
            name: "Demo Names",
            imgSrc: img1,
            post: "Director"
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