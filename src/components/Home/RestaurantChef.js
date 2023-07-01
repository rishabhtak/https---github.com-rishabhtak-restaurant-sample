import React from 'react';
import Carousel from 'react-multi-carousel';
import michal from '../../assets/images/michal.jpg';
import daniel from '../../assets/images/daniel.jpg';
import alex from '../../assets/images/alex.jpg';
import SectionText from '../SectionText';




function RestaurantChef() {

    const restarantChefData = [

        {
            "img": daniel,
            "name": "danial frankie",
            "job": "japanese cuisine"
        },
        {
            "img": alex,
            "name": "alex john",
            "job": "japanese cuisine"
        },
        {
            "img": michal,
            "name": "michal smart",
            "job": "japanese cuisine"
        },
        {
            "img": alex,
            "name": "alex john",
            "job": "japanese cuisine"
        },
        {
            "img": michal,
            "name": "michal smart",
            "job": "japanese cuisine"
        },

    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='section' style={{ backgroundColor: '#101418' }}>
            <SectionText title='Meet Our Professionals' smalltitle='Team Of Restaurant' style="m-top" />
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >

                {restarantChefData.map((element, index) => {
                    return <div key={index} className='chef-img-carousel'>
                        <img src={element.img} alt="daniel" />
                        <ul>
                            <li className='list-unstyled chef-portfolio'>
                                <a href="/" target="_blank" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="/" target="_blank" className="text-white"><i className="fa-brands fa-instagram"></i></a>
                                <a href="/" target="_blank" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                        </ul>
                        <div className='chef-details'>
                            <h5>{element.name}</h5>
                            <p>{element.job}</p>
                        </div>
                    </div>
                })}

            </Carousel>
        </div>
    )
}

export default RestaurantChef