import React from 'react'
import Logo from '../../assets/img/VSSTG-Logo.png'
import SearchForm from './SearchForm'
export default function Header(){
  return (
    <div className="header">
        <div className="header_line up"></div>
       <div className="header_title">
            SEA FREIGHT
       </div>
       <div className="header_line down"></div>
        <div className="container ">
            <div className="h_top">
                <a href="/" className="site_logo">
                  <img src={Logo} />
                  </a>
                <div className="flex">
                    <div className="phone_number">
                        <span>FOR QUERIES:</span> <a href="tel:+19724722729">972-472-2729</a>
                    </div>
                    <a href="/" className="menu"><i className="fa fa-bars" aria-hidden="true"></i></a>
                </div>
            </div>

            <div className="flex">
                <div className="col_50">

                </div>
                <div className="col_50 form-section">
                    <h3>PROFESSIONAL-CERTIFIED FREIGHT SERVICES</h3>
                    <h2>Simplify your freight <br/>destination search</h2>
                    

                        <div className="form-fields" id="form_fields" >
                            <SearchForm />
                        </div>
                    
                        <button type="submit" className="btn full-width">Get a quote</button>
                    

                </div>
            </div>
        </div>
    </div>
  )
}
