import React, {useEffect, useState} from 'react';
import "../css/Popup.css";
import img1 from "../img/gallery/baner.jpg";

const Popup = () => {
    const myObj = {
        show: "popup-image",
        hide: "popup-image-dup"
      }
    
    const [models, setModels] = useState(false);
    
    useEffect(()=>{
          setModels(true);
    },[])

  return (
    <div className="grid-wrap">
        <div className={models ? myObj.show : myObj.hide} >
            <span onClick={()=> setModels(false)}>&times;</span>
            <img src={img1} alt="X" />
        </div>
    </div>
  )
}

export default Popup;