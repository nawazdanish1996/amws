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

import useSound from 'use-sound';
import snd from "./sound/visitorSound.mpeg";

function App() {
  let [loading, setLoading] = useState(true);
  const [plays] = useSound(snd);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 7000);

    return plays();
  }, [plays])

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
