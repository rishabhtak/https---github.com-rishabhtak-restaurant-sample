import React from 'react'
import SecondHomepage from '../SecondHomepage'
import homepage2 from '../../assets/images/food1.webp'
import FoodMenu from './FoodMenu'
import Blog from '../Blog'

function index() {

  return (
    <>
      <SecondHomepage img={homepage2} title="our menu" pageName="menu" />
      <FoodMenu />
      <Blog />
    </>
  )
}

export default index