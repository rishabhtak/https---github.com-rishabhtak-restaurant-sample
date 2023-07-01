import React from 'react'
import Carousel from 'react-multi-carousel';
import icon from '../assets/images/icon.png';


function Review() {
    const reviewData = [{
        name: 'susan smith',
        job: 'cook',
        img: icon,
        review: 'It is a long estabdlished fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem is simply text of the printing and. All the Lorem Ipsum generators on the Internet tend to repeat predefined hunks as necessary.'

    },
    {
        name: 'anna johnson',
        job: 'cook',
        img: icon,
        review: 'It is a long estabdlished fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem is simply text of the printing and. All the Lorem Ipsum generators on the Internet tend to repeat predefined hunks as necessary.'

    },
    {
        name: 'peter jones',
        job: 'cook',
        img: icon,
        review: 'It is a long estabdlished fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem is simply text of the printing and. All the Lorem Ipsum generators on the Internet tend to repeat predefined hunks as necessary.'

    },
    {
        name: 'robert anderson',
        job: 'cook',
        img: icon,
        review: 'It is a long estabdlished fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem is simply text of the printing and. All the Lorem Ipsum generators on the Internet tend to repeat predefined hunks as necessary.'

    }
    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className='section'>
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                showDots={true}
                infinite={true}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                {reviewData.map((element, index) => {
                    return <div key={index} className='card-review mb-5'>
                        <div className='card-review-img'>
                            <img src={element.img} alt={element.name}></img>
                            <div className='card-review-title'>
                                <h4>{element.name}</h4>
                                <p>{element.job}</p>
                            </div>
                        </div>
                        <div className='card-review-content'>{element.review}</div>
                        <div className='card-review-star'>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                })}

            </Carousel>



        </div>
    )
}

export default Review