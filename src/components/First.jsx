import React from 'react'
import { Link } from 'react-scroll'
import '../App.css';
import image2 from '../images/Star3.png'
import image from '../images/jessica-radanavong-IchPBHFD0pw-unsplash@2x.png'
const First = () => {
  return (
    <div className='first' id='home' style={{ display: "flex", flexDirection: "column" }}>
      <div className="shopkart">ShopKart</div>
      <hr style={{ width: "80%", height: "1px", backgroundColor: "#FFF", marginLeft: "50px" }} />
      <section class="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button' style={{marginLeft:"100px"}}></div>
        </label>
        <ul class="menu">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </section>
<span className="one">
  Fresh
</span>
<span className="two">
  2022
</span>
<span className="three">
  Look
</span>
<span className='yellowbg'>

</span>
<img className='star3' alt='' src={image2}/>

<img className='manimage' alt='' src={image}/>
    </div>
  )
}

export default First