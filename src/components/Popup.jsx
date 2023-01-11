import React, {useEffect, useState} from 'react';
import "../css/Popup.css";
// import img1 from "../img/gallery/baner.jpg";

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
            {/* <span >&times;</span> */}
            <div className='main' onClick={()=> setModels(false)}>
                <h4><span>Goalpokher Al-Madad Welfare Society</span> committee members are the unsung heroes of society, using their passion and resources to create positive change where government alone cannot reach.</h4>
            </div>
            {/* <img src={img1} alt="X" /> */}
        </div>
    </div>
  )
}

export default Popup;