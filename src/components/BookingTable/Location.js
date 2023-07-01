import React from 'react'
import SectionText from '../SectionText';
import contact from '../../assets/images/contact.jpg'



function Location() {
    return (
        <div className='section' style={{ backgroundColor: '#101418' }}>
            <SectionText title='Find Us Location' smalltitle='Visit Us' style="m-top" />
            <div className="row align-items-center mt-md-3">
                <div className='col-md-12 col-lg-12 col-xl-6'>
                    <img src={contact} alt="aboutus" className="contact-form-img" />
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-3'>
                    <div className="contact-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Our Location</h3>
                            <p className="contact-box-desc">Jaipur</p>
                            <p className="contact-box-desc">Rajasthan</p>

                        </div>
                    </div>
                    <div className="contact-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Our Location</h3>
                            <p className="contact-box-desc">Jaipur</p>
                            <p className="contact-box-desc">Rajasthan</p>

                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-3'>
                    <div className="contact-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Our Location</h3>
                            <p className="contact-box-desc">Jaipur</p>
                            <p className="contact-box-desc">Rajasthan</p>

                        </div>
                    </div>
                    <div className="contact-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Our Location</h3>
                            <p className="contact-box-desc">Jaipur</p>
                            <p className="contact-box-desc">Rajasthan</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location