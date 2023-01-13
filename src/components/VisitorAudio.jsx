import React from 'react';
import visitedSound from "../sound/sareJahanSeAchcha.mp3";


const VisitorAudio = () => {
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-2" style={{margin: "0  auto"}}>
                    <audio controls autoplay loop 
                        style={{
                            width: "250px",
                            float: "right",
                            height: "20px",
                            boxShadow: "-3px -3px 10px 3px red, 3px 3px 10px 3px blue",
                            borderRadius: "20px"
                        }}
                    >
                        <source src={visitedSound} type="audio/mp3" />
                    </audio>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default VisitorAudio