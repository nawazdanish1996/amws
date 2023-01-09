import React, {useState} from 'react';
import "../css/DonateButton.css";
import { Modal, ModalHeader } from "reactstrap";


const DonateButton = () => {
    const [modal, setModal] = useState(false);


    
  return (
    <div id='donate-button' style={{zIndex: 999}}>

        <button onClick={() => setModal(true)} className="btn btn-danger text-white fw-bolder">
            Donate Now
        </button>
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>
                <h4>Master Nurul Absar: 8391809802</h4>
            </ModalHeader>
        </Modal>

    </div>
  )
}

export default DonateButton