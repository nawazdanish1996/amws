import React, { useEffect } from "react";
import Aos from "aos";
import "../css/About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-md-3 abt">
            <h2
              style={{ fontFamily: "cursive" }}
              className=" pt-3 pb-2 text-decoration-underline"
            >
              About Us
            </h2>
            <p style={{textAlign: "justify"}}>
              <span className="text-success fw-bolder">Al-Madad Welfare Society</span> is a non-political, non-profit organisation committed to help the needy people. <span>Al-Madad Welfare Society</span> began in October 2020 in a
              remote village in Mukhtar Bhita in the Uttar Dinajpur District, West Bengal. Its
              office is now located at Lodhan Chowk, Goalpokher, Uttar Dinajpur, West Bengal.
              <span>&nbsp; Al-Madad Welfare Society</span> is now working in over 30 villages.
            </p>

            <p className="float-start">The major focus areas for <span className="text-success fw-bolder">Al-Madad Welfare Society</span> are:</p>
            <br />
            <br />
            <li className="float-start">To help poor and needy people.</li>
            <br />
            <li className="float-start">To provide food and clothing for helpless orphans and windows of society.</li>
            <br />
            <li className="float-start">To provide education poor children.</li>
            <br />
            <li className="float-start">To get poor girls married</li>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
