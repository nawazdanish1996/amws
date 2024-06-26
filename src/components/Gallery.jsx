import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import "../css/Gallery.scss";
import img1 from "../img/gallery/1.jfif";
import img2 from "../img/gallery/2.jfif";
import img3 from "../img/gallery/3.jfif";
import img4 from "../img/gallery/4.jfif";
import img5 from "../img/gallery/5.jfif";
import img6 from "../img/gallery/6.jfif";
import img7 from "../img/gallery/7.jfif";
import img8 from "../img/gallery/8.jfif";
import img9 from "../img/gallery/9.jfif";
import img10 from "../img/gallery/10.jfif";
import img11 from "../img/gallery/11.jfif";
import img12 from "../img/gallery/12.jfif";
import img13 from "../img/jan2623/1.jfif";
import img14 from "../img/gallery/13.jfif"
import img15 from "../img/gallery/14.jpg"
import VideoPlay from './VideoPlay';



const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img3
    },
    {
      id: 4,
      imgSrc: img4
    },
    {
      id: 5,
      imgSrc: img5
    },
    {
      id: 6,
      imgSrc: img6
    },
    {
      id: 7,
      imgSrc: img7
    },
    {
      id: 8,
      imgSrc: img8
    },
    {
      id: 9,
      imgSrc: img9
    },
    {
      id: 10,
      imgSrc: img10
    },
    {
      id: 11,
      imgSrc: img11
    },
    {
      id: 12,
      imgSrc: img12
    },
    {
      id: 13,
      imgSrc: img13
    },
    {
      id: 14,
      imgSrc: img14
    },
    {
      id: 15,
      imgSrc: img15
    },
    {
      id: 16
    }
  ]
  // console.log(data[0].imgSrc);
  const myObj = {
    show: "popup-image",
    hide: "popup-image-dup"
  }

  const [models, setModels] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModels(true);
    console.log(setModels(true));

  }

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='gallery'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <div className="grid-wrapperss">
            <h2 style={{fontFamily: "cursive"}} className=' pt-3 pb-2 text-decoration-underline'>Our Impact</h2>
                <div className="image-container">
                  <div className={models ? myObj.show : myObj.hide} >
                    {/* <span >&times;</span> */}
                    <img onClick={()=> setModels(false)} src={tempImgSrc} alt="X" style={{cursor: "pointer"}} />
                  </div>

                  {
                    data.map((val, ind)=>{
                      return(
                        <div className="image" key={ind} onClick={()=> getImg(val.imgSrc)} >
                          <img loading="lazy" src={val.imgSrc} alt="Gallery images" style={{width: "100%"}} />
                        </div>
                      )
                    })
                  }
                  
                </div>
              </div>
            </div>

        </div>
      </div>

      <VideoPlay />
    </div>
  )
}

export default Gallery;