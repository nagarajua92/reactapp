import React from 'react'

import Header from './header'
import Partners from './partners'
import Footer from './footer'
import Testimonials from './testimonials'
import Leadershp from './Leadershp'
import Services from './Services'

export default function Contact() {
  return (
    <div className='contact-page'>
         <Header />
        <div className='contact-section'>
            <div className="container">
                <h1>Our Office Information</h1>
                8840 Cypress Waters Blvd<br/>
                Carrollton, TX<br/>
                <strong>Director of Operations</strong> - Greg Card<br/>
                <strong>Vice President of Operations </strong>- Ronald Stone<br/>
                <strong>Toll Free:</strong> <a href="tel:+18335007693">(833) 500 7693</a><br/>
                <a href="mailto:sales@vsslogisticsgroup.com">Sales@vsslogisticsgroup.com</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}
