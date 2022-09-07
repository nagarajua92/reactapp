import React from 'react'

import Vsstg from '../../assets/img/PLogos/vsstg-logo.png'
import Mlc from '../../assets/img/PLogos/mlc-logo.jpg'
import Trimble from '../../assets/img/PLogos/Trimble-logo.png'
import Keefe from '../../assets/img/PLogos/keefe_group-logo.png'
import Aws from '../../assets/img/PLogos/aws-logo.png'
import Mach from '../../assets/img/PLogos/mach1-logo.png'
import OmniLogi from '../../assets/img/PLogos/omniLogo.png'

export default function Partners() {
  return (
    <div className="partners">
        <div className="title_section">
            <h3>Our Partners</h3>
            <p>companies switched to VSS logistics for their freight movemenet</p>
        </div>
        <div className="container">
            <ul className="partner_logos">
                <li><a href="/"><img src={OmniLogi} alt="" /></a></li>
                <li><a href="/"><img src={Vsstg} alt="" /></a></li>
                <li><a href="/"><img src={Mlc} alt="" /></a></li>
                <li><a href="/"><img src={Trimble} alt="" /></a></li>
                <li><a href="/"><img src={Keefe} alt="" /></a></li>
                <li><a href="/"><img src={Aws} alt="" /></a></li>
                <li><a href="/"><img src={Mach} alt="" /></a></li>
            
            </ul>
        </div>
   
    </div>
  )
}
