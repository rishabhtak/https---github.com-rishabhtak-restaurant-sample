import React from 'react'
import SecondHomepage from '../SecondHomepage'
import homepage2 from '../../assets/images/food1.webp'
import BookTable from '../Home/BookTable'
import Location from './Location'
import Blog from '../Blog'


function Index() {
    return (
        <>
            <SecondHomepage img={homepage2} title="booking table" pageName="bookingtable" />
            <BookTable />
            <Location />
            <Blog />
        </>
    )
}

export default Index