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
// import Popup from './components/Popup';

import MeetTheTeam from './components/MeetTheTeam';
import Certifications from './components/Certifications';
import RecentDonner from './components/RecentDonner';
import useSound from 'use-sound';
import visitedSound from "./sound/visitorSound.mpeg";
import CounterUp from './components/CounterUp';
import WayToGive from './components/WayToGive';
import SpinnerLoader from './components/SpinnerLoader';
// import AdvOne from "./components/Adv1";
// import AdvTwo from "./components/Adv2";

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
        <SpinnerLoader loading={loading} />
      :
        <div className="App">
          <NavBars />
          {/* <Popup /> */}
          <ImgSlider />
          {/* <AdvOne /> */}
          <About />
          {/* <AdvTwo /> */}
          <OurMission />
          <Gallery />
          <RecentDonner />
          <WayToGive />
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
