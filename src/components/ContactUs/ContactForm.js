import React from 'react'
import contact from '../../assets/images/contact.jpg'



function ContactForm() {
    return (
        <div className="section" style={{ backgroundColor: '#101418' }}>
            <div className="row align-items-center mt-md-3">
                <div className='col-md-12 col-lg-12 col-xl-6'>
                    <img src={contact} alt="aboutus" className="contact-form-img" />
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 mt-lg-0">
                    <div className='section-title-style'>
                        <span className="section-sub-title">LET'S TALK</span>
                        <h5 className='section-title'>Get In Touch</h5>
                        <p className='lh-lg text-white'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
                    </div>
                    <div className="row contact-form">
                        <div className="col-lg-6 col-md-12">
                            <input type="text" placeholder='Your Name' id="name" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <input type="text" placeholder='Your Phone' id="number" />
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <input type="email" placeholder='Your Email Address ' id="email" />
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <textarea className='contact-form' placeholder='Message' rows="3" />
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <button className='contact-form'><a>Conatct Us</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactForm