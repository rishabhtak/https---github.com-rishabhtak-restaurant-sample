import React from 'react'
import Button from '../Button'
import about from '../../assets/images/about.jpg';
import fork from '../../assets/images/fork.svg';


function StoryAboutUs() {
    return (
        <div className="section" style={{ backgroundColor: '#101418' }}>
            <div className="row align-items-center mt-md-3">
                <div className='col-md-12 col-lg-12 col-xl-6'>
                    <img src={about} alt="aboutus" className="about-img-width" />
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 mt-lg-0">
                    <div className='section-title-style'>
                        <span className="section-sub-title">Story About Us</span>
                        <h5 className='section-title'>That Flavors Within Wines.</h5>
                        <p className='mb-5 pe-2 lh-lg text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo At vero eos et accusamus, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem</p>
                        <div className='row'>
                            <div className='col-sm-6 col-md-12 col-lg-6 about-icon-main'>
                                <img className='filter-color' src={fork} alt='fork' />
                                <div className='about-icon-main-content'>
                                    <h3>Speciallst</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-12 col-lg-6 about-icon-main'>
                                <img className='filter-color' src={fork} alt='fork' />
                                <div className='about-icon-main-content'>
                                    <h3>Restaurant</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>

                        <Button text="our menu" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StoryAboutUs