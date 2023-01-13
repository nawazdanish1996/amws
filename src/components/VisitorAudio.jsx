import React from 'react';
import visitedSound from "../sound/sareJahanSeAchcha.mp3";


const VisitorAudio = () => {
  return (
    <React.Fragment>
        <audio controls autoplay loop>
            <source src={visitedSound} type="audio/mp3" />
        </audio>
    </React.Fragment>
  )
}

export default VisitorAudio