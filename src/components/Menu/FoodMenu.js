import React from 'react'
import MenuItems from '../MenuItems'
import Button from '../Button';
import SectionText from '../SectionText';
import sample from '../../assets/images/sample.jpg'
import bigimg from '../../assets/images/big-menu-img.png'
import bigimg2 from '../../assets/images/big-menu-img2.png'


function FoodMenu() {
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
            <div className='section' style={{ backgroundColor: '#101418', paddingTop: '6rem' }}>
                <SectionText title='Desserts' smalltitle='Sweet Dreams' />
                <MenuItems items={items} />
                <Button text="our menu" positionCenter={true} marginBottom={true} />
            </div>
            <div
                className="menu-bg-img"
                style={{ backgroundImage: `url(${bigimg})` }}
                alt='foods'
            ></div>
            <div className='section' style={{ backgroundColor: '#101418', paddingTop: '6rem' }}>
                <SectionText title='Main Courses' smalltitle='Reservations' />
                <MenuItems items={items} />
                <Button text="our menu" positionCenter={true} marginBottom={true} />
            </div>
            <div
                className="menu-bg-img"
                style={{ backgroundImage: `url(${bigimg2})` }}
                alt='foods'
            ></div>
        </>


    )
}

export default FoodMenu