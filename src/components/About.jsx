import React, { useEffect } from "react";
import Aos from "aos";
import "../css/About.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-md-1 abt">
            <h2
              style={{ fontFamily: "cursive" }}
              className=" pt-3 pb-3 text-decoration-underline"
            >
              About Us
            </h2>
            <p style={{textAlign: "justify"}}>
              <span className="text-success fw-bolder mt-2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Goalpokher Al-Madad Welfare Society</span> is a non-political, non-profit organisation committed to help the needy people. <span>Gaolpokher Al-Madad Welfare Society</span> began in January 2019 but we registered in October 2020 in a
              remote village of Uttar Dinajpur District, West Bengal. It was registered under The West Bengal Societies Registration Act, 1961 and Its
              office is now located at Lodhan Chowk, Goalpokher, Uttar Dinajpur, West Bengal.
              <span> Gaolpokher Al-Madad Welfare Society</span> is now working in over 30 villages.
              Our committee members are the unsung heroes of society, using their passion and resources to create positive change where government alone cannot reach.
            </p>

            <p className="text-start">The major focus areas for <span className="text-success fw-bolder">Goalpokher Al-Madad Welfare Society</span> are:</p>
            <div className="text-start ms-md-5" id="para">
              <p>1. To help poor and needy people.</p>
              <p>2. To provide food and clothing for helpless orphans and widows of society.</p>
              <p>3. To provide education poor children.</p>
              <p>4. To get poor girls married</p>
            </div>
          </div>

          <div className="col-md-12">
            <div class="about-us-container">
              <div class="about-us-content">
                <p><span className="text-success fw-bolder">Goalpokher Al-Madad Welfare Society</span> is a non-profit organization dedicated to improving the lives of underprivileged individuals and communities in and around Goalpokher. Our mission is to provide access to education, healthcare, and other basic necessities to those in need, and to empower them to build a better future for themselves and their families.</p>
                <p>We have been working in the area for over 4+ years and have established strong partnerships with local organizations, government agencies, and businesses. Our team is made up of dedicated volunteers and staff who are committed to making a positive impact in the lives of those we serve.</p>
                <p>Our programs include providing access to education, healthcare, and other basic necessities to those in need, and to empower them to build a better future for themselves and their families. We also run various programs for women and children in the area.</p>
                <p>We rely on the generosity of donors and volunteers to continue our work. If you're interested in making a difference in the lives of those in need, please consider supporting our mission through a donation or by volunteering your time and skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
