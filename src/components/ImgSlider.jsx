import React, {useEffect} from 'react';
import Aos from 'aos';
import first from "../img/3.jpg";
import DonateButton from "./DonateButton";

const ImgSlider = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])


  return (
    <div id='imgslider'>
    <div className="container">
        <div className="row">
            <div className="col-md-3 p-md-2 mb-sm-3 mb-xs-3">
                <h5 style={{fontFamily: "cursive"}}>How do you want to help to the <span className='text-primary fw-bold'>needy people</span>.</h5>
                <p className='mt-md-2 mb-md-3' style={{textAlign: "justify"}}>our smallest contribution makes a big difference to the needy people We count on the generosity of people like you to be able to create real change for India.</p>
                <DonateButton />
            </div>
            <div className='col-md-6 rounded mx-auto d-none d-xl-block d-lg-block d-md-block'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={first} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Im Nawaz Danish</h5>
                                <p>olodhn</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={first} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={first} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={first} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={first} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="col-md-3 mt-3">
                <h4 className='text-primary text-decoration-underline' style={{fontFamily: "cursive"}}>Helpline Numbers</h4>
                <h6 className='text-success mt-3'>Md. Nurul Huda</h6>
                <p className=' fw-bold ' style={{marginTop: "-6px"}}>+91-9614416523</p>
                <h6 className='text-success mt-3'>Mohd. Zeeshan Ahmed</h6>
                <p className=' fw-bold ' style={{marginTop: "-6px"}}>+91-6296863789</p>
                <h6 className='text-success mt-3'>Nisar Ahmad Noor</h6>
                <p className=' fw-bold ' style={{marginTop: "-6px"}}>+91-8617338027</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ImgSlider;