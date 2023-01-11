import React, {useState, useEffect, useRef} from 'react';
import Aos from 'aos';
import swal from 'sweetalert';
import Iframe from 'react-iframe'
import useSound from 'use-sound';
import boopSfx from "../sound/error_sound.mp3";
import successSound from "../sound/success_sound.mp3";
import clearSound from "../sound/clear_sound.mp3";
import emailjs from "@emailjs/browser";
// import validator from 'validator' ;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [msg, setMsg] = useState("");
  const [play] = useSound(boopSfx);
  const [sucSound] = useSound(successSound);
  const [clrSound] = useSound(clearSound);
  const form = useRef();
  
  const submitHandler = (e) =>{
    e.preventDefault();
    if(name ===  "" || !isNaN(name) || name.length < 4){
      swal("Oops!", "Wrong Name Input", "error");
      return play();
    }else if(mobNo === "" || isNaN(mobNo) || mobNo.length < 10 || mobNo.length > 10 ){
      swal("Oops!", "Mobile Number must be 10 digit", "error");
      return play();
    }else if(msg.length < 10){
      swal("Oops!", "Subject is less than ten words", "error");
      return play();
    }
    else{
      swal("Sent", "I will get back to you as soon as possible", "success"); 
      setName("");
      setMobNo("");
      setMsg("");
      emailjs.sendForm(
        "service_67n7jzu",
        "template_956rcdy",
        form.current,
        "uoSXOBxWQ6AHTdEyU"
      ).then((result)=>{
        console.log(result.text);
      },(err)=>{
        console.log(err.text);
      });
      return sucSound();
    }
  }

  const clearHandler = () =>{
    setName("");
    setMobNo("");
    setMsg("");
    return clrSound();
  }

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='contact' >
      <div className="container p-4" data-aos="fade-left">
        <div className="row">
          <div className="col-md-12 mb-md-3">
            <h2 style={{fontFamily: "cursive"}} className='text-decoration-underline'>Contact Us</h2>
          </div>

          <div className="col-md-4">
            <Iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.6203631786674!2d88.10921218654532!3d26.074439593630736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e51f4c299bf453%3A0x2785be3862550d97!2sNurul%20CSC!5e1!3m2!1sen!2sin!4v1672826273315!5m2!1sen!2sin" 
              className="w-100 h-100"
              display="block"
              loading="lazy" 
              position="relative"
              referrerPolicy="no-referrer-when-downgrade"
              />
          </div>

          <div className="col-md-4 mt-4">
                  <h6 className='text-uppercase text-decoration-underline'>Office Address</h6>
                  <br />
                  <p>Lodhan Chowk, Goalpokher</p>
                  <p>Uttar Dinajpur, West Bengal</p>
                  <p>733210</p>
          </div>

          <div className="col-md-4">
            <h6 className='text-uppercase text-decoration-underline'>Contact Us</h6>

            <form ref={form}>
              <div className='form-group'>
                <input onChange={(e)=> setName(e.target.value)} value={name} aria-describedby="mobileHelp" name='name' className='input-group-text mb-1 text-center w-100' type="text" placeholder='Name' />
                <input onChange={(e)=> setMobNo(e.target.value)} value={mobNo} className='input-group-text mb-1 text-center w-100' name='mobno' type="text" placeholder='Mobile Number' />
              </div>
              <div>
                <textarea onChange={(e)=> setMsg(e.target.value)} value={msg} className='input-group-text w-100 mb-1' style={{resize: "none"}} name="message" placeholder='Message...' cols="30" rows="5"></textarea>
                <small id="mobileHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
              </div>
              <button onClick={submitHandler} className='btn btn-success' type="submit">Submit</button>
              <button onClick={clearHandler} className='btn btn-success ms-2' type="reset">Reset</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs