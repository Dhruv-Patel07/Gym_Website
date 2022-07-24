import React from 'react'
import './Reasons.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="blur blur-r"></div>
            <div className="left-r">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div><span className='stroke-text'>Why </span>
                    <span>Choose Us?</span>
                </div>
                
                <div className='details-r'>


                    <div>
                        <img src={tick} alt=""></img>
                        <span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>TRAIN SMARTER & FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>RELAIBLE PARTNERS</span>
                    </div>
                </div>
                <span style={{color:"var(--gray)",fontWeight:"normal"}}>OUR PARTNERS</span>
                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons