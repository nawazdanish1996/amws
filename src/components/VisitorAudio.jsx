import React from 'react';
import "../css/VisitorAudio.scss";
import visitedSound from "../sound/sareJahanSeAchcha.mp3";


const VisitorAudio = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-2" style={{margin: "0  auto"}}>
                    <audio controls autoplay loop
                        controlsList="nodownload noplaybackrate"
                        style={{
                            width: "250px",
                            float: "right",
                            height: "20px",
                            boxShadow: "-3px -3px 5px 3px red, 3px 3px 5px 3px blue",
                            borderRadius: "20px"
                        }}
                    >
                        <source src={visitedSound} type="audio/mp3" />
                    </audio>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisitorAudio