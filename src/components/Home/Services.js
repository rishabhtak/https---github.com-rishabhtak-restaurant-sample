import React from 'react'
import french from '../../assets/images/french-fries.svg';
import SectionText from '../SectionText';

function Services() {
    const servicesContent = [
        {
            "title": "Fresh Product",
            "img": french,
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin."
        },
        {
            "title": "Fresh Product",
            "img": french,
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin."
        },
        {
            "title": "Fresh Product",
            "img": french,
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin."
        }

    ];
    return (
        <div className='section'>
            <SectionText title='Try Our Special Offer' smalltitle='services' style="m-top" />
            <div className='row m-top'>
                {servicesContent.map((element, index) => {
                    return <div key={index} className={`col-sm-6 col-lg-4 ${index === 2 ? 'col-md-12' : 'col-md-6'} mb-4`}>
                        <div className="card card-style">
                            <img src={element.img} className="card-img-top mt-5 filter-color" alt="french-fries" />
                            <div className="card-body">
                                <h5 className="card-title text-center m-3">{element.title}</h5>
                                <p className="card-text text-center mb-5">{element.desc}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services