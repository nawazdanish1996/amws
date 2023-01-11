import React, { useEffect } from "react";
import Aos from "aos";
import "../css/About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about">
      <div className="container" data-aos="fade-left">
        <div className="row">
          <div className="col-md-12 mt-md-1 abt">
            <h2
              style={{ fontFamily: "cursive" }}
              className=" pt-3 pb-2 text-decoration-underline"
            >
              About Us
            </h2>
            <p style={{textAlign: "justify"}}>
              <span className="text-success fw-bolder">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Goalpokher Al-Madad Welfare Society</span> is a non-political, non-profit organisation committed to help the needy people. <span>Gaolpokher Al-Madad Welfare Society</span> began in October 2020 in a
              remote village in Mukhtar Bhita in the Uttar Dinajpur District, West Bengal. It was registered under The West Bengal Societies Registration Act, 1961 and Its
              office is now located at Lodhan Chowk, Goalpokher, Uttar Dinajpur, West Bengal.
              <span> Gaolpokher Al-Madad Welfare Society</span> is now working in over 30 villages.
              Our committee members are the unsung heroes of society, using their passion and resources to create positive change where government alone cannot reach.
            </p>

            <p className="text-start">The major focus areas for <span className="text-success fw-bolder">Al-Madad Welfare Society</span> are:</p>
            <div className="text-start ms-md-5" id="para">
              <p>1. To help poor and needy people.</p>
              <p>2. To provide food and clothing for helpless orphans and windows of society.</p>
              <p>3. To provide education poor children.</p>
              <p>4. To get poor girls married</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
