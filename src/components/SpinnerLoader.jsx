import React from 'react';
import "../css/SpinnerLoader.css";
import { 
    useTypewriter, 
    // Cursor 
} from "react-simple-typewriter";
// import { SyncLoader } from "react-spinners";

const SpinnerLoader = () => {
    const [text] = useTypewriter({
        words: ["Loading..."],
        loop: 0
    });

  return (
    <div id='loader'>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className='textLoading'>
                {text}
                {/* <Cursor cursorColor="red" /> */}
            </span>

        {/* <h5>
            <span style={{color: "#ff9933"}}>G. Al-Madad </span>
            <span style={{color: "#ffffff"}}>Welfare </span>
            <span style={{color: "#138808"}}>Society</span>
        </h5>
        <SyncLoader color={"#fff"} loading={loading} size={10} /> */}
    </div>
  )
}

export default SpinnerLoader