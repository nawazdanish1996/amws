import React, {useEffect} from 'react';
import Aos from 'aos';
import "../css/ImgSlider.css";
import DonateButton from "./DonateButton";
// import first from "../img/slider/1.jfif";
// import second from "../img/slider/3.jfif";
// import third from "../img/slider/2.jfif";
// import forth from "../img/slider/4.jpg";
// import fifth from "../img/slider/5.jfif";
import TopMarquee from './TopMarquee';
// import VisitorAudio from "./VisitorAudio";

const ImgSlider = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])


  return (
    <div className='home imgslider'>
    <div className="container">
        <div className="row">
            <TopMarquee />
        </div>
        <div className="row">
            {/* <VisitorAudio /> */}
        </div>
        <div className="row mt-md-5 mb-md-5">
            <div className="col-md-4 mt-md-5 mb-3">
                <p className='p-3' id="text">Our smallest contribution makes a big difference to the needy people We count on the generosity of people like you to be able to create real change for India.</p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-md-5">
                <h4 className='text-white text-decoration-underline' style={{fontFamily: "cursive"}}>Helpline Numbers</h4>
                <p className='text-info fw-bold ' style={{marginTop: "0px"}}>+91-9614416523</p>
                <p className='text-info fw-bold ' style={{marginTop: "-6px"}}>+91-6296863789</p>
                <p className='text-info fw-bold ' style={{marginTop: "-6px"}}>+91-8617338027</p>
            </div>
        </div>
        <div className="row mt-5">
            <DonateButton />
        </div>
            {/* <div className="col-md-3 p-md-2 mt-3">
                <h5 style={{fontFamily: "cursive"}}>How do you want to help the <span className='text-primary fw-bold'>needy people ?</span></h5>
                <p className='mt-md-2 mb-md-3' style={{textAlign: "justify"}}>our smallest contribution makes a big difference to the needy people We count on the generosity of people like you to be able to create real change for India.</p>
                <DonateButton />
            </div> */}
            {/* d-none d-xl-block d-lg-block d-md-block */}
            {/* <div className='col-md-6 rounded mx-auto mt-4'>
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
                            <img src={first} className="d-block w-100" alt="..." /> */}
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>Im Nawaz Danish</h5>
                                <p>olodhn</p>
                            </div> */}
                        {/* </div>
                        <div className="carousel-item">
                            <img src={second} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={third} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={forth} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={fifth} className="d-block w-100" alt="..." />
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
            </div> */}

            {/* <div className="col-md-3 mt-3">
                <h4 className='text-primary text-decoration-underline' style={{fontFamily: "cursive"}}>Helpline Number</h4>
                <h6 className='text-success mt-3'>Md. Nurul Huda</h6>
                <p className=' fw-bold ' style={{marginTop: "-6px"}}>+91-9614416523</p>
                <h6 className='text-success mt-3'>Mohd. Zeeshan Ahmed</h6>
                <p className=' fw-bold ' style={{marginTop: "-6px"}}>+91-6296863789</p>
                <h6 className='text-success mt-3'>Nisar Ahmad Noor</h6>
                <p className=' fw-bold ' style={{marginTop: "-6px"}}>+91-8617338027</p>
            </div> */}
        {/* </div> */}
    </div>
    </div>
  )
}

export default ImgSlider;