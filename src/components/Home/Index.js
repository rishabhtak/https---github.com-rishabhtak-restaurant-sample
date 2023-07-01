import React from 'react'
import HomeSlider from './HomeSlider';
import Info from './Info';
import Services from './Services';
import DailyOffers from './DailyOffers';
import BookTable from './BookTable';
import FoodImages from './FoodImages';
import Counters from '../Counters';
import RestaurantChef from './RestaurantChef';
import Review from '../Review';
import Blog from '../Blog';

function Home() {
    return (
        <>
            <HomeSlider />
            <Info />
            <Services />
            <DailyOffers />
            <BookTable />
            <FoodImages />
            <Counters />
            <RestaurantChef />
            <Review />
            <Blog />
        </>
    )
}

export default Home