import React from 'react'
import food1 from '../../assets/images/food1.webp';
import food2 from '../../assets/images/food2.webp';
import food3 from '../../assets/images/food3.webp';
import Button from '../Button';




function HomeSlider() {

    const sliderheading = [
        {
            "heading": "experience the best only test of itlay",
            "img": food1
        },
        {
            "heading": "delicious food the best only taste wonder",
            "img": food2
        },
        {
            "heading": "enjoy an exceptional journey of taste",
            "img": food3
        },

    ];


    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-touch="true" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    {sliderheading.map((element, index) => {
                        return <div key={element.img} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div
                                className="carousel-inner-img"
                                style={{ backgroundImage: `url(${element.img})` }}
                                alt='foods'
                            ></div>
                            <div className="carousel-caption text-capitalize">
                                <div className="home-slider-text mb-3">
                                    <h1>{element.heading}</h1>

                                </div>
                                <p className='mb-5 display-none'>mistaken idea of denouncing pleasure and praising pain</p>
                                <Button text="book table" position="center" />
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}

export default HomeSlider