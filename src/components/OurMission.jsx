import React, { useEffect } from "react";
import Aos from "aos";
import "../css/OurMission.css";

const OurMission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="mission" data-aos="fade-up">
      <div className="container mb-3 mt-md-1">
        <div className="row">
          <div className="col-md-12">
            <h2
              style={{ fontFamily: "cursive" }}
              className=" pt-3 pb-2 text-decoration-underline"
            >
              Our Mission
            </h2>
          </div>

          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3">Our committee members are the unsung heroes of society, using their passion and resources to create positive change where government alone cannot reach.</p>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3">Our committee members are the unsung heroes of society, using their passion and resources to create positive change where government alone cannot reach.</p>
            </div>
          </div>
          
          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3">Our committee members are the unsung heroes of society, using their passion and resources to create positive change where government alone cannot reach.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default OurMission;
