import "../css/Contact.css";
import React, {useState, useRef, useEffect} from 'react';
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';
import Aos from 'aos';
import "aos/dist/aos.css";

function Contact() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [sub, setSub] = useState("");
    const [val, setVal] = useState("");
    const form = useRef();

  const FormSubmitHandler = (e) =>{
    e.preventDefault();
    const emailPattern = /^[A-Za-z0-9._]{3,}@[a-zA-Z]{3,}[.]{1,}[a-zA-Z.]{2,6}$/g;
    if(name ===  "" || name.length < 6){
      swal("Oops!", "Wrong Name input", "error");
    }
    else if(!emailPattern.test(mail)){
      swal("Oops!", "Invalid email", "error");
    }
    else if(sub.length < 10){
      swal("Oops!", "Subject is less than ten words", "error");
    }
    else if(val.length < 20){
      swal("Oops!", "Message is less than twenty words", "error");
    }
    else{
      swal("Sent", "I will get back to you as soon as possible", "success");  
      console.log("Name: "+ name);
      console.log("Email: " + mail);
      console.log("Subject: "+ sub);
      console.log("Message: "+ val);
      setName("");
      setMail("");
      setSub("");
      setVal("");
      emailjs.sendForm(
        "service_9qrl41l",
        "template_n3arx0j",
        form.current,
        "qjRsQvu1S5q4aYrqk"
      ).then((result)=>{
        console.log(result.text);
      },(err)=>{
        console.log(err.text);
      });
    }
  };

  const HandReset = () =>{
    setName("");
    setMail("");
    setSub("");
    setVal("");
  }

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='contact'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5" data-aos="fade-up">
                    <h3 className='text-uppercase text-primary text-decoration-underline'>Contact me!</h3>
                    <p>For any query feel free to contact me, Thank You!</p>
                    <form ref={form} onSubmit={FormSubmitHandler}>
                    <input name="user_name" className="form-control" style={{fontWeight: "700"}} onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='FULL NAME' />
                    <br />
                    <input name="user_email" className="form-control" onChange={(e)=> setMail(e.target.value)} value={mail} type="email" placeholder='EMAIL'/>
                    <br />
                    <input name='sub' className="form-control" onChange={(e)=> setSub(e.target.value)} value={sub} type="text" placeholder='ENTER SUBJECT' />
                    <br />
                    <textarea name="message" className="form-control" onChange={(e)=> setVal(e.target.value)} value={val} id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <br />
                    <div className="text-center mb-3">
                      <input type="submit" value='Send' className='btn btn-success w-25 m-1 ' />
                      <input onClick={HandReset} value='Reset' className='btn btn-success w-25 m-1' />
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact