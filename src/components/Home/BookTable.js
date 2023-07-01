import React from 'react'
import Button from '../Button';
import SectionText from '../SectionText';

function BookTable() {
    return (
        <div className='section' style={{ backgroundColor: '#101418' }}>
            
            <SectionText title='Book A Table On Time' smalltitle='Make A Reserve'/>

            <div className="row m-top">
                <div className="col-lg-6 col-md-12">
                    <input type="text" placeholder='Your Name' id="name" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <input type="text" placeholder='Your Phone' id="number" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <input type="text" placeholder='Persons' id="persons" />
                </div>
                <div className="col-lg-4 col-md-12">
                    <input type="date" id="date" />
                </div>
                <div className="col-lg-4 col-md-12">
                    <input type="text" placeholder='Time' id="time" />
                </div>
            </div>
            <Button text="book table" positionCenter={true} marginBottom={true} />

        </div>
    )
}

export default BookTable