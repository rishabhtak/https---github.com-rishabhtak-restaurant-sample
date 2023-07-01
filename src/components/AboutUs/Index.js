import React from 'react'
import SecondHomepage from '../SecondHomepage'
import homepage2 from '../../assets/images/food1.webp'
import StoryAboutUs from './StoryAboutUs'
import Review from '../Review'
import Counters from '../Counters'
import Blog from '../Blog'


function Index() {
  return (
    <>
      <SecondHomepage img={homepage2} title="about us" pageName="AboutUs" />
      <StoryAboutUs />
      <Review />
      <Counters />
      <Blog />
      </>
  )
}

export default Index