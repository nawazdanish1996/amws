import React, {useState} from 'react';
import "../css/DonateButton.css";
import { Modal, ModalHeader } from "reactstrap";
import img1 from "../img/paymentIcons/google-pay.png"
import img2 from "../img/paymentIcons/phonepe-logo-icon.png"
import img3 from "../img/paymentIcons/paytm-icon.png"
import img4 from "../img/paymentIcons/upi.png"
import barCode from "../img/barcode.jfif"


const DonateButton = () => {
    const [modal, setModal] = useState(false);
    
  return (
    <div id='donate-button' style={{zIndex: 999}}>
        {/* <div className="button-85">Mister</div> */}

        <button className='buttonDonate' onClick={() => setModal(true)}>
            Donate Now
        </button>
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>
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
                        <h6 style={{color: "green"}}>HDFC Bank Account Details</h6>
                        <br />
                        <small style={{color: "black"}}>Name: Goalpokher Al Madad Welfare Society</small>
                        <br />
                        <small style={{color: "black"}}>Bank Account No: 50200055378172</small>
                        <br />
                        <small style={{color: "black"}}>IFSC : HDFC0002747</small>
                        <br />
                        <small style={{color: "black"}}>Branch Nane: ISLAMPUR</small>
                    </div>
                </div>
            </ModalHeader>
        </Modal>

    </div>
  )
}

export default DonateButton