import React, {useEffect} from 'react';
import Aos from 'aos';
import "../css/Certifications.css";

const Certifications = () => {
  const myObj = [
    {
      name: "Certificate of Registration of Societes",
      board: "Issued by Govt. Of West Bengal",
      srcImg: ""
    },
    {
      name: "Blood Donation Camp 05/07/2021",
      board: "(State Blood Transfusion Council, West Bengal)",
      srcImg: ""
    },
    {
      name: "Audit & Annual Report",
      board: "",
      srcImg: ""
    },
    {
      name: "NGO Darpan Registred",
      board: "Unique ID: WB/2021/0279439",
      srcImg: ""
    },
    {
      name: "80G 12A",
      board: "Govt. Of West Bengal",
      srcImg: ""
    },

  ];

  useEffect(()=>{
    Aos.init({duration: 3000});
  },[]);

  return (
    <div id="award">
      <div className="container pt-3 pb-2" data-aos="fade-left">
        <div className="row">
          
          <div className="col-md-12">
            <h1>Certifications & Achivements</h1>
          </div>

          {
            myObj.map((val, index)=>{
              const {name, board, srcImg} = val;
              return(
                <div className="col-md-6 p-2 con" key={index}>
                  <a href={srcImg} target="blank">
                    <button className='p-2' style={{margin: "0 auto"}}>
                      <span>
                        {name}
                        <br />
                        <br />
                        {board}
                        <br />
                        <br />
                        <i class="fa-solid fa-download"></i>
                      </span>
                    </button>
                  </a>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Certifications;