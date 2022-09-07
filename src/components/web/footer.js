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
                    <li><a href="/">Contact Us</a></li> */}
                </ul>
                <div className="footer_content">
                <div className="f_title">Contact</div>
               

               
                <p>Domain: vsslogisticsgroup.com</p>
                <p>Number: +1 833 500 7693</p>
                <p>Email: Sales@vsslogisticsgroup.com</p>
                <p><strong>Address:</strong> 8840 Cypress Waters Blvd. Suite 190,<br/>
                    Dallas, TX 75019</p>

                <div className="f_title">Copyright 2022 | VSS Global Logistics Inc.</div>
               
                </div>
            </div>
        </div>        
    </div>
  )
}
