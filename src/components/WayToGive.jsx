import React, {useEffect} from 'react';
import "../css/WayToGive.scss";
import Aos from 'aos';
import donate from "../img/donate/donate.png";
import support from "../img/donate/support.png";


const WayToGive = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <div>
        <div className="container p-3 p-md-5">
            <div className="row">

                <div className="col-md-12">
                    <h2 style={{ fontFamily: "cursive" }}
                    className=" pt-3 pb-2 text-decoration-underline"
                    >
                    Way to Support
                    </h2>
                </div>

                <div className="col-md-6 p-3">
                    <img 
                        src={donate} 
                        alt="Donate"
                        loading='lazy'
                        id="supportImg"
                        />
                    <h4 className='m-2'>Donate Fund</h4>
                    <p style={{textAlign: "justify"}}>Unrestricted gifts to the Fund have an immediate impact. Funds are applied where they are needed most.</p>
                </div>

                <div className="col-md-6 p-3">
                    <img 
                        src={support} 
                        alt="support"
                        loading='lazy'
                        id="supportImg"
                        />
                    <h4 className='m-2'>Honor Someone Special</h4>
                    <p style={{textAlign: "justify"}}>Remember a loved one, express gratitude to a caregiver, or celebrate a special occasion. We will notify the family or individuals being honored of your thoughtful generosity.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WayToGive