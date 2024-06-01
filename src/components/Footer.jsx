import React from 'react';

function Footer() {

  return (
    <div className="bg-black text-white">
      <div className="container pb-5 pt-4">
        <div className="row">

          <div className="col-md-12">
              <div className="float-start">
                <span>Visitors: </span>
                <img style={{width: "150px"}} src="https://hitwebcounter.com/counter/counter.php?page=8142733&style=0009&nbdigits=9&type=page&initCount=1620" title="Free Counter" Alt="web counter"   border="0" />
              </div>
              <br />
              <br />
              <small>Copyright &copy; - 2023</small>
              <br />
              <small>All Rights Reserved By <span className='text-success'>Goalpokher Al-Madad Welfare Society</span></small>
              <br />

              <small>Developed By: &nbsp;
                <a className='text-decoration-none' href="https://www.facebook.com/developerHost/" target="blank">Nawaz Danish</a>
                {/* &nbsp;
                ||
                &nbsp;
                <a className='text-decoration-none fs-6' href="https://www.linkedin.com/in/nawazdanish/" target="blank">Linkedin</a> */}
              </small>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer