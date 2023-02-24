import './App.scss';
import React, {useEffect, useState, lazy, Suspense} from "react";
import NavBars from './components/NavBars';
import useSound from 'use-sound';
import visitedSound from "./sound/visitorSound.mpeg";
// import RedirectButton from './components/RedirectButton';
// import Popup from './components/Popup';
import SpinnerLoader from './components/SpinnerLoader';
const Footer  = lazy(()=> import("./components/Footer"));
const Faq  = lazy(()=> import("./components/Faq"));
const ImgSlider  = lazy(()=> import("./components/ImgSlider"));
const About  = lazy(()=> import("./components/About"));
const OurMission  = lazy(()=> import("./components/OurMission"));
const ContactUs  = lazy(()=> import("./components/ContactUs"));
const Gallery  = lazy(()=> import("./components/Gallery"));
const SocialMedia  = lazy(()=> import("./components/SocialMedia"));
const MeetTheTeam  = lazy(()=> import("./components/MeetTheTeam"));
const Certifications  = lazy(()=> import("./components/Certifications"));
const RecentDonner  = lazy(()=> import("./components/RecentDonner"));
const CounterUp  = lazy(()=> import("./components/CounterUp"));
const WayToGive  = lazy(()=> import("./components/WayToGive"));

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
          <Suspense fallback={<h1>Loading...</h1>}>
          <NavBars />
          </Suspense>

          {/* <Popup /> */}
          <Suspense fallback={<h1>Loading...</h1>}>
          <ImgSlider />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <OurMission />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <Gallery />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <RecentDonner />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <WayToGive />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <Certifications />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <MeetTheTeam />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <Faq />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <ContactUs />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <CounterUp />
          </Suspense>

          <Suspense fallback={<h1>Loading...</h1>}>
          <Footer />
          </Suspense>

          {/* <RedirectButton /> */}
          
          <Suspense fallback={<h1>Loading...</h1>}>
          <SocialMedia />
          </Suspense>
        </div>
      }
    </div>
  );
}

export default App;
