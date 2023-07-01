import React from 'react'
import food4 from '../../assets/images/food4.jpg';
import SectionText from '../SectionText';

function FoodImages() {
    const foodimg = [
        {
            "img": food4
        },
        {
            "img": food4
        },
        {
            "img": food4
        },
        {
            "img": food4
        }
    ]

    return (
        <>
            <div style={{ backgroundColor: '#101418' }}>
                <div className='row'>
                    {foodimg.map((element, index) => {
                        return <div key={index} className='col-sm-6 col-lg-3 col-md-3 m-top'>
                            <div className="portfolio-food-img p-sm-3">
                                <img src={element.img} alt="food" />
                                <div className="portfolio-food-info">
                                    <div className='portfolio-food-content'>
                                        <div className="portfolio-food-link">
                                            <a href="/">Food</a>
                                            <h5><a href="/">Chicken Osso</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })}
                </div >
            </div>
        </>

    )
}

export default FoodImages