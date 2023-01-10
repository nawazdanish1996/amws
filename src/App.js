import './App.css';
import React, {useEffect, useState} from "react";
import Footer from './components/Footer';
import { HashLoader } from "react-spinners";
import NavBars from './components/NavBars';
import RedirectButton from './components/RedirectButton';
import ImgSlider from "./components/ImgSlider";
import TopMarquee from './components/TopMarquee';
import About from './components/About';
import OurMission from './components/OurMission';
import ContactUs from "./components/ContactUs";
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import UnderConstruction from './components/UnderConstruction';
// import Popup from './components/Popup';


function App() {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      {
        loading ?
        <div id='loader'>
          <HashLoader color={"black"} loading={loading} size={70} />
        </div>
      :
        <div className="App">
          <UnderConstruction />
          <NavBars />
          {/* <Popup /> */}
          <TopMarquee />
          <ImgSlider />
          <About />
          <OurMission />
          <Gallery />
          <ContactUs />
          <Footer />
          <RedirectButton />
          <SocialMedia />
        </div>
      }
    </div>
  );
}

export default App;
