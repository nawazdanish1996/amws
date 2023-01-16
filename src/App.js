import './App.css';
import React, {useEffect, useState} from "react";
import Footer from './components/Footer';
import NavBars from './components/NavBars';
// import RedirectButton from './components/RedirectButton';
import ImgSlider from "./components/ImgSlider";
import About from './components/About';
import OurMission from './components/OurMission';
import ContactUs from "./components/ContactUs";
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import { SyncLoader } from "react-spinners";
// import Popup from './components/Popup';

import MeetTheTeam from './components/MeetTheTeam';
import Certifications from './components/Certifications';
import RecentDonner from './components/RecentDonner';
import useSound from 'use-sound';
import visitedSound from "./sound/visitorSound.mpeg";
import CounterUp from './components/CounterUp';

function App() {
  const [loading, setLoading] = useState(true);
  const [plays] = useSound(visitedSound);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false)
  }, 10000);

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
          {/* <Popup /> */}
          <ImgSlider />
          <About />
          <OurMission />
          <Gallery />
          <RecentDonner />
          <Certifications />
          <MeetTheTeam />
          <ContactUs />
          <CounterUp />
          <Footer />
          {/* <RedirectButton /> */}
          <SocialMedia />
        </div>
      }
    </div>
  );
}

export default App;
