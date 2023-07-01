import React from 'react'

function ContactBox() {
    return (
        <div className='section' style={{ backgroundColor: '#101418' }}>
            <div className='row m-top'>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                    <div className="contact-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Our Location</h3>
                            <p className="contact-box-desc">Jaipur</p>
                            <p className="contact-box-desc">Rajasthan</p>

                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                    <div className="contact-box">
                        <i className="fa fa-phone"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Our Contact</h3>
                            <p className="contact-box-desc">+91-9876543210</p>
                            <p className="contact-box-desc">+91-9876543210</p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-12 col-lg-4'>
                    <div className="contact-box">
                        <i className="fa-regular fa-envelope"></i>
                        <div className="contact-box-container">
                            <h3 className="contact-box-title">Mail Us</h3>
                            <p className="contact-box-desc">demo@restaurant.com</p>
                            <p className="contact-box-desc">demo@restaurant.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ContactBox