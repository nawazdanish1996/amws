import React from 'react';
import FeqObj from '../data/feq';

const Faq = () => {
    console.log(FeqObj);
    return (
    <div className='mt-5 mb-5' id="faq">
        <h4>Frequentry Asked Questions {`(FAQs)`}</h4>
        <div class="accordion" id="accordionExample">
            {
                FeqObj.map((val, ind)=>{
                    const {qNo, accordionHeader, callapse, title, ans} = val;
                    return(
                        <div class="accordion-item" key={ind}>
                            <h2 class="accordion-header" id={accordionHeader}>
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${callapse}`} aria-expanded="true" aria-controls={callapse}>
                                <p>{qNo}. {title}</p>
                            </button>
                            </h2>
                            <div id={callapse} class="accordion-collapse collapse show" aria-labelledby={accordionHeader} data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>{ans}</p>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Faq;