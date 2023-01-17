import React, {useEffect} from 'react'

const Adv2 = () => {

    useEffect(()=>{
        try{
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }catch(err){
            console.log(err);
        }
    },[]);

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ins class="adsbygoogle"
                        style={{display: "block"}}
                        data-ad-client={process.env.REACT_APP_CLIENT2}
                        data-ad-slot={process.env.REACT_APP_SLOT2}
                        data-ad-format="auto"
                        data-full-width-responsive="true">
                    </ins>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adv2;
