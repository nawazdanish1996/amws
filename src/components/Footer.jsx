import React from 'react';

function Footer() {

  return (
    <div className="bg-black text-white">
      <div className="container pb-5 pt-4">
        <div className="row">

          <div className="col-md-12">
              <small>Copyright &copy; - 2023</small>
              <br />
              <small>All Rights Reserved by <span className='text-success h6'>Al-Madad Welfare Society</span></small>
              <br />

              {/* <small>Developed By: Nawaz Danish &nbsp;
                <a className='text-decoration-none fs-6' href="https://www.facebook.com/developerHost/" target="blank">Facebook</a>
                &nbsp;
                ||
                &nbsp;
                <a className='text-decoration-none fs-6' href="https://www.linkedin.com/in/nawazdanish/" target="blank">Linkedin</a>
              </small> */}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer