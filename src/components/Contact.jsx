import React from 'react'

const Contact = () => {
  return (
    <div className='contact container-fluid' id='contact'>
        <div className="row">
            <div className="col-md-5 py-5 px-5">
                <p className='newsletter'>Newsletter</p>
                <p className='newsletter-p'>Get news about daily articles and updates in your inbox</p>
                </div>
            <div className="col-md-7">
                    <form action="" className='contact-form py-5 px-5'>
                        <input className='contact-name' placeholder='NAME' type="text" />
                        <hr />
                        <input className='contact-name' placeholder='EMAIL' type="text" />
                        <hr />
                        <input className='contact-name' placeholder='MESSAGE' type="text" />
                        <hr />
                    </form>
                </div>
        </div>
        <div className="row getintouchdiv">
            <div className="getintouch col-md-8">
            GET IN TOUCH

            </div>
            <div className='circle'><p className='send'>Send</p></div>
        </div>
    </div>
  )
}

export default Contact