import React from 'react'
import SecondHomepage from '../SecondHomepage'
import homepage2 from '../../assets/images/food1.webp'
import ContactBox from './ContactBox'
import ContactForm from './ContactForm'

function Index() {
  return (
    <>
      <SecondHomepage img={homepage2} title="contact us" pageName="ContactUs" />
      <ContactBox />
      <ContactForm />
    </>
  )
}

export default Index