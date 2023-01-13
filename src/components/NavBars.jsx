import React, {useEffect, useState} from 'react';
import "../css/Navbar.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Nav, Navbar } from 'react-bootstrap';
import Dark from "../images/dark theme icon/moon.png";
import Light from "../images/dark theme icon/sun.png";
import logo from "../img/logo.png"
import useSound from 'use-sound';
import boopSfx from "../sound/themeChange.mp3";
import btnClick from "../sound/clickSound.mp3";

function NavBars() {
    const [mode, setMode] = useState(Dark);
    const [play] = useSound(boopSfx);
    const [clkBtn] = useSound(btnClick);

    const Mode = () =>{
        if(mode === Dark){
            setMode(Light);
            document.body.style.background = "#2f3542";
            document.body.style.color  = "#fff";
            // console.log("Dark");
            return play();
        }else{
            setMode(Dark);
            document.body.style.background = "#fff";
            document.body.style.color = "black";
            // console.log("Light");
            return play();
        }
    };


    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <div>
        <div>
            <Navbar 
                fixed="top"
                bg="dark" 
                variant="dark" 
                expand="md" 
                collapseOnSelect
            >
                <Navbar.Brand className='ms-5'>
                    <a href="/" className='text-decoration-none d-flex '>
                        {/* <p>Al-Madad Welfare Society</p> */}
                        <img style={{width: "40px"}} src={logo} alt="logo" />
                    </a>
                </Navbar.Brand>
                <img className='ms-5 ms-auto me-4' onClick={Mode} src={mode} alt="Mode" style={{width: "30px", cursor: "pointer"}} />

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav className='ms-auto me-5' navbarScroll>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="/">Home</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#about">About</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#mission">Our Mission</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#gallery">Gallery</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#sponsors">Sponsors</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#award">Award & Certificates</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#team">Team Members</Nav.Link>
                        <Nav.Link onMouseEnter={()=>clkBtn()} id="achorTag" className="fw-bold" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
  )
}

export default NavBars