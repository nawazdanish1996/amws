import './App.css';
import React, {useEffect, useState} from "react";
import Footer from './components/Footer';
import NavBars from './components/NavBars';
// import RedirectButton from './components/RedirectButton';
import ImgSlider from "./components/ImgSlider";
import TopMarquee from './components/TopMarquee';
import About from './components/About';
import OurMission from './components/OurMission';
import ContactUs from "./components/ContactUs";
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import UnderConstruction from './components/UnderConstruction';
import { SyncLoader } from "react-spinners";
// import Popup from './components/Popup';

import useSound from 'use-sound';
import snd from "./sound/visitorSound.mpeg";
import MeetTheTeam from './components/MeetTheTeam';
import Certifications from './components/Certifications';
import RecentDonner from './components/RecentDonner';

function App() {
  const [loading, setLoading] = useState(true);
  const [plays] = useSound(snd);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 12000);

    return plays();
  }, [plays])

  return (
    <div>
      {
        loading ?
        <div id='loader'>
          <h5>
            <span style={{color: "#ff9933"}}>Al-Madad </span>
            <span style={{color: "#ffffff"}}>Welfare </span>
            <span style={{color: "#138808"}}>Society</span>
          </h5>
          <SyncLoader color={"#fff"} loading={loading} size={10} />
        </div>
      :
        <div className="App">
          <NavBars />
          <UnderConstruction />
          {/* <Popup /> */}
          <TopMarquee />
          <ImgSlider />
          <About />
          <OurMission />
          <Gallery />
          <RecentDonner />
          <Certifications />
          <MeetTheTeam />
          <ContactUs />
          <Footer />
          {/* <RedirectButton /> */}
          <SocialMedia />
        </div>
      }
    </div>
  );
}

export default App;