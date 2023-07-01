import React from 'react'


function MenuItems(props) {
    return (
        <>
            <div className='row m-top'>
                {props.items.map((element, index) => {
                    return <div key={index} className='col-lg-6 col-md-12'>

                        <div className='food-price-item'>
                            <div className="food-price-hoverimg">
                                <img src={element.img} alt="food" />
                            </div>
                            <div className='food-price-img'>
                                <img src={element.img} alt="food" />
                            </div>
                            <div className='food-price-content'>
                                <div className="food-price-top">
                                    <div className='food-item-title'>
                                        {element.title}
                                    </div>
                                    <div className="food-item-line"></div>
                                    <div className="food-item-price">
                                        {element.price}
                                    </div>
                                </div>

                                <div className="food-item-desc">{element.desc}</div>
                            </div>

                        </div>


                    </div>
                })}
            </div>
        </>
    )
}

export default MenuItems