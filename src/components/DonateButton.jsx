import React, {useState} from 'react';
import "../css/DonateButton.css";
import { Modal, ModalHeader } from "reactstrap";
import img1 from "../img/paymentIcons/google-pay.png"
import img2 from "../img/paymentIcons/phonepe-logo-icon.png"
import img3 from "../img/paymentIcons/paytm-icon.png"
import img4 from "../img/paymentIcons/upi.png"


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
                    <div>
                       <img style={{width: "40px", marginLeft: "10px"}} src={img1} alt="" />
                       <img style={{width: "30px", marginLeft: "10px"}} src={img2} alt="" />
                       <img style={{width: "40px", marginLeft: "10px"}} src={img3} alt="" />
                       <img style={{width: "40px", marginLeft: "10px"}} src={img4} alt="" />
                    </div>
                    <p>....@ybl</p>
                    <br />
                    <img loading='lazy' src="..." alt="BarCode" />
                    <br />
                    <br />
                    <div className="bankDetails">
                        <h6 style={{color: "green"}}>SBI Bank Account Details</h6>
                        <br />
                        <small>Name: xxxxxxxxxx</small>
                        <br />
                        <small>Bank Account No: xxxxxxxxx</small>
                        <br />
                        <small>IFSC : SBIN0007713</small>
                        <br />
                        <small>Branch Nane: Lodhan Village Branch</small>
                    </div>
                </div>
            </ModalHeader>
        </Modal>

    </div>
  )
}

export default DonateButton