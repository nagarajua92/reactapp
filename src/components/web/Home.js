import React from 'react'

import Header from './header'
import Partners from './partners'
import Footer from './footer'
import Testimonials from './testimonials'
import Leadershp from './Leadershp'
import Services from './Services'

export default function Home() {
  return (
    <div>
         <Header />
        <Services />
        <Testimonials />
        <Partners />
        {/* <Leadershp /> */}
        <Footer />
    </div>
  )
}
