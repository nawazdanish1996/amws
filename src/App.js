import './App.css';
import React, {useEffect, useState} from "react";
import Footer from './components/Footer';
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
import { SyncLoader } from "react-spinners";
// import Popup from './components/Popup';

import useSound from 'use-sound';
import snd from "./sound/visitorSound.mpeg";
import MeetTheTeam from './components/MeetTheTeam';

function App() {
  const [loading, setLoading] = useState(true);
  const [plays] = useSound(snd);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 1000);

    return plays();
  }, [plays])

  return (
    <div>
      {
        loading ?
        <div id='loader'>
          <h5>Al-Madad Welfare Society</h5>
          <SyncLoader color={"#282c34"} loading={loading} size={10} />
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
          <MeetTheTeam />
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
