import React from 'react'
import Logo from '../../assets/img/VSSTG-Logo.png'

export default function footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="s_1">
                <a href="/" className="site_logo"><img src={Logo} alt="Vss Logistics" /></a>
            </div>
            <div className="s_2 flex s_between">
                <ul className="footer_nav">
                    <li><a href="/" className="pl0">Home</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                    {/* <li><a href="/">About Us</a></li>
                    <li><a href="/">Services</a>
                        <ul>
                            <li><a href="/">Dryvan</a></li>
                            <li><a href="/">Refrigerated</a></li>
                            <li><a href="/">Flatbed</a></li>
                            <li><a href="/">Expidited</a></li>
                            <li><a href="/">Dryage</a></li>
                            <li><a href="/">Warehousing</a></li>
                            <li><a href="/">Crossdock</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Specializations</a>
                        <ul>
                            <li><a href="/">Crossdeck</a></li>
                            <li><a href="/">Intermodal(Containers)</a></li>
                            <li><a href="/">Refrigerated Freight</a></li>
                        </ul>
                    </li>
                     */}
                </ul>
                <div className="footer_content">
                <div className="f_title">Contact</div>
               

               
                {/* <p>Domain: <a href="vsslogisticsgroup.com">vsslogisticsgroup.com</a> </p> */}
                <p>Number: <a href="tel:+18335007693">+1 833 500 7693</a></p>
                <p>Email: <a href="mailto:sales@vsslogisticsgroup.com">Sales@vsslogisticsgroup.com</a></p>
                <p>Address: 8840 Cypress Waters Blvd. Suite 190,<br/>
                    Dallas, TX 75019</p>

                <div className="">Copyright 2022 | VSS Logistics Inc.</div>
               
                </div>
            </div>
        </div>        
    </div>
  )
}
