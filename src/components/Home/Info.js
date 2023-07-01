import React from 'react'
import Button from '../Button'
import about3 from '../../assets/images/about3.jpg';

function AboutUs() {
    return (
        <div className="section" style={{ backgroundColor: '#101418' }}>
            <div className="row align-items-center flex-column-reverse flex-lg-row mt-md-3">
                <div className="col-lg-6 col-md-12 mt-lg-0">
                    <div className='section-title-style'>
                        <span className="section-sub-title">About Us</span>
                        <h5 className='section-title'>Discover Lorem From Flavors Within Wines.</h5>
                        <p className='mb-5 pe-2 lh-lg text-white'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.</p>
                        <Button text="read more" />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <img src={about3} alt="aboutus" className="info-img-width" />
                </div>
            </div>
        </div >
    )
}

export default AboutUs