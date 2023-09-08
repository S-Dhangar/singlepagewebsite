import React from 'react'
import one from '../images/Group 6.svg';
import two from '../images/Vector7.svg';
import three from '../images/Vector (8).svg';
import four from '../images/Vector (9).svg';
import truck from '../images/Layer 156.png';
const Topbar = () => {
    return (
        <div className='topbar row'>
            <div className="col-6 d-flex" style={{alignItems:"center"}}>
                <img className='truck ml-4' src={truck} />

                <div className="delivery ml-3">Free Delivery</div>
                <div className="policy ml-3">Return Policy</div>
            </div>
            <div className="col-6 d-flex justify-content-end" style={{alignItems:"center"}}>
                <div className="login mr-5">Login</div>
                <div className="follow ml-2">Follow us</div>

                <img className='two ml-3' src={two} />
                <img className='three ml-2' src={three} />
                <img className='four ml-2' src={four} />

                <img className='one ml-2' src={one} />

            </div>
        </div>
    )
}

export default Topbar