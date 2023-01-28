import React from 'react';
import ReactPlayer from 'react-player'

const VideoPlay = () => {
    const linkData = [
        {
            link: "https://youtu.be/0e0K3WidEnQ"
        },
        {
            link: "https://youtu.be/bWkZGWBVpRE"
        },
        {
            link: "https://youtu.be/lB6F374XhnQ"
        },
        {
            link: "https://www.youtube.com/watch?v=EJQYYWKy1t4"
        },
        {
            link: "https://youtu.be/kmEkybTKrMg"
        }
    ];

  return (
    <div>
        <div className="container mt-5 mb-5">
            <div className="row">
                    {linkData.map((val, ind)=>{
                        const {link} = val;
                        return(
                            <ReactPlayer 
                                key={ind}
                                controls={true}
                                loading="lazy"
                                width="480px"
                                height="260px"
                                url={link}
                                style={{
                                    margin: "0 auto",
                                    marginBottom: "25px"
                                }}
                            />
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default VideoPlay;