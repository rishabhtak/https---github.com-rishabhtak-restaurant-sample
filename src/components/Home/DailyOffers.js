import React from 'react'
import sample from '../../assets/images/sample.jpg';
import MenuItems from '../MenuItems';
import Button from '../Button';
import SectionText from '../SectionText';




function DailyOffers() {
    const items = [
        {
            "title": "Cafe Alatee",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },
        {
            "title": "Black Magic Cake",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },
        {
            "title": "Peanut Butter Bars",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        }, {
            "title": "Cafe Alatee",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },
        {
            "title": "Black Magic Cake",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },
        {
            "title": "Peanut Butter Bars",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        }, {
            "title": "Cafe Alatee",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },
        {
            "title": "Black Magic Cake",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },
        {
            "title": "Peanut Butter Bars",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        }, {
            "title": "Black Magic Cake",
            "img": sample,
            "price": "$3.50",
            "desc": "Fresh beware coffe"
        },


    ];


    return (
        <>
            <div className='section' style={{ backgroundColor: '#101418' }}>
                <SectionText title='Try Our Daily Offers' smalltitle='From Our Menu' style="m-top" />
                <MenuItems items={items} />
                <Button text="our menu" positionCenter={true} marginBottom={true} />

            </div>
        </>


    )
}

export default DailyOffers