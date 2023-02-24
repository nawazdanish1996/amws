import React, { useEffect } from "react";
import Aos from "aos";
import "../css/OurMission.scss";

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
              <p className="mt-3" style={{fontSize: "15px"}}>
                Our aim to work upon the social problems like that we try to
                provide food who don't have food to eat, distribute clothes and
                Blankets in every winter season & we build homes for homeless
                people.
              </p>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3" style={{fontSize: "15px"}}>
                Our mission is to empower underprivileged communities through
                education, healthcare, and economic dev. programs. We
                strive to break the cycle of poverty by providing access to
                resources and opportunities.
              </p>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="box pt-3 pb-3 p-4">
              {/* <h4>Main</h4> */}
              <p className="mt-3" style={{ fontSize: "15px" }}>
                Our mission is to end poverty and hunger by providing aid and
                support to communities in need. We aim to promote sustainable
                development and empower individuals to take control of their own
                lives through education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
