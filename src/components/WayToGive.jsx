import React, {useEffect} from 'react';
import "../css/WayToGive.scss";
import Aos from 'aos';
// import { Modal, ModalHeader } from "reactstrap";
import donate from "../img/donate/donate.png";
import support from "../img/donate/support.png";
import img1 from "../img/paymentIcons/google-pay.png"
import img2 from "../img/paymentIcons/phonepe-logo-icon.png"
import img3 from "../img/paymentIcons/paytm-icon.png"
import img4 from "../img/paymentIcons/upi.png"
import barCode from "../img/barcode.jfif"


const WayToGive = () => {
    // const [modal, setModal] = useState(false);

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
                        // onClick={() => setModal(true)}
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
                        // onClick={() => setModal(true)}
                        />
                    <h4 className='m-2'>Honor Someone Special</h4>
                    <p style={{textAlign: "justify"}}>Remember a loved one, express gratitude to a caregiver, or celebrate a special occasion. We will notify the family or individuals being honored of your thoughtful generosity.</p>
                </div>

            {/* <Modal isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}> */}
                <div style={{textAlign: "center"}}>
                    <p style={{color: "green"}}>Goalpokher Al Madad Welfare Society</p>
                    <div>
                       <img style={{width: "40px", marginLeft: "10px"}} src={img1} alt="" />
                       <img style={{width: "30px", marginLeft: "10px"}} src={img2} alt="" />
                       <img style={{width: "40px", marginLeft: "10px"}} src={img3} alt="" />
                       <img style={{width: "40px", marginLeft: "10px"}} src={img4} alt="" />
                    </div>
                    <p id="upi" style={{color: "black", marginTop: "-2px"}}>UPI ID: goalpokheralmadadwel.62402634@hdfcbank</p>
                    <img style={{width: "50%", marginTop: "-10px"}} loading='lazy' src={barCode} alt="BarCode" />
                    <br />
                    <br />
                    <div className="bankDetails">
                        <small style={{color: "green"}}>HDFC Bank Account Details</small>
                        <br />
                        <small style={{color: "black"}}>Name: Goalpokher Al Madad Welfare Society</small>
                        <br />
                        <small style={{color: "black"}}>Bank Account No: 50200055378172</small>
                        <br />
                        <small style={{color: "black"}}>IFSC : HDFC0002747</small>
                        <br />
                        <small style={{color: "black"}}>Branch Name: ISLAMPUR</small>
                    </div>
                </div>
            {/* </ModalHeader>
            </Modal> */}

            </div>
        </div>
    </div>
  )
}

export default WayToGive