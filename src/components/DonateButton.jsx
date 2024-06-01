import React, {useState, useEffect} from 'react';
import "../css/DonateButton.scss";
import { Modal, ModalHeader } from "reactstrap";
import img1 from "../img/paymentIcons/google-pay.png"
import img2 from "../img/paymentIcons/phonepe-logo-icon.png"
import img3 from "../img/paymentIcons/paytm-icon.png"
import img4 from "../img/paymentIcons/upi.png"
import barCode from "../img/bcode.jpg"


const DonateButton = () => {
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        if(modal === true){
            document.title = "Donate Now"
        }else{
            document.title = "Goalpokher Al-Madad Welfare Society - NGO - Goalpokher, Uttar Dinajpur, almadad welfare society";
        }
    })
    
  return (
    <div id='donate-button' style={{zIndex: 999}}>
        {/* <div className="button-85">Mister</div> */}

        <button className='buttonDonate' onClick={() => setModal(true)}>
            <i class="fa-solid fa-handshake-angle fs-5"></i>
            <span className='ms-3 fs-5'>Donate Now</span>
            
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
                    <p id="upi" style={{color: "black", marginTop: "-2px"}}>UPI ID: almadadwelfaresociety@sbi</p>
                    <img style={{width: "50%", marginTop: "-10px"}} loading='lazy' src={barCode} alt="BarCode" />
                    <br />
                    <br />
                    <div className="bankDetails">
                        <small style={{color: "green"}}>SBI Bank Account Details</small>
                        <br />
                        <small style={{color: "black"}}>Name: Goalpokher Al Madad Welfare Society</small>
                        <br />
                        <small style={{color: "black"}}>Bank Account No: 42303666066</small>
                        <br />
                        <small style={{color: "black"}}>IFSC : SBIN0007713</small>
                        <br />
                        <small style={{color: "black"}}>Branch Name: LODHAN VILLAGE BRANCH</small>
                    </div>
                </div>
            </ModalHeader>
        </Modal>

    </div>
  )
}

export default DonateButton