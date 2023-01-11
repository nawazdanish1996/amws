import React, { useEffect } from "react";
import Aos from "aos";
import "../css/OurMission.css";

const OurMission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="mission">
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
              <p className="mt-3">
              Our aim to work upon the social problems like that we try to provide food  who don't have food to eat, distribute clothes and Blankets in every winter season & we build homes for homeless people.
              </p>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3" style={{fontSize: "13px"}}>Specially we focus to create educational atmosphere by conducting educational awareness program in verious villages. We also help and support needy students financially to get education. We organize Blood Donation Camp again and again to save other's lives and donate blood cards to needy petient.</p>
            </div>
          </div>
          
          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3" style={{fontSize: "15px"}}>We are helping to the needy aged, handicapped, sick, helpless and indiget persons with different type of social activities and non-profit making and we are working on various programs.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default OurMission;
