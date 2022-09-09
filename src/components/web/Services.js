import React from 'react'
import AvatarMaker from '../../assets/img/AvatarMaker.png'
export default function Services() {
  return (
    <div className='our_services com-pad'>
      <div className='container'>
          <div className='service_item'>
            <i className="fa fa-road" aria-hidden="true"></i>
              <h2>Ground freight</h2>
              <p>
              VSS Logistics provides customers with a variety of OTR freight options to best meet your needs.
From dry vans to sprinter vans, flatbeds to RGNs, expedited to temp-controlled, and full
truckload to partial, our team will provide the most customer-centric option to meet your needs
              </p>
          </div>

          <div className='service_item'>
              <i className="fa fa-fighter-jet" aria-hidden="true"></i>
              <h2>Air freight</h2>
              <p>
              Expedited not fast enough? Need faster than fast? Consider our air options to get your freight
moving quickly.
              </p>
          </div>
        

          <div className='service_item'>
              <i className="fa fa-home" aria-hidden="true"></i>
              <h2>Warehousing and Distribution</h2>
              <p>
              Whether it’s our facility or our network of partner warehouses, we can find ways to store,
cross-dock, and distribute your product around the United States, Canada, and Mexico.
              </p>
          </div>
          <div className='clearfix'></div>
          <div className='service_item'>
          <i class="fa fa-tint" aria-hidden="true"></i>

              <h2>Ocean and Forwarding</h2>
              <p>
              We can be your intermediary with freight forwarders to arrange your ocean freight international
shipments.
              </p>
          </div>

         

          <div className='service_item'>
              <i className="fa fa-road" aria-hidden="true"></i>
              <h2>North America Cross-Border</h2>
              <p>
              We have authority to manage cross-border shipments in and out of Canada and Mexico
following all USMCA requirements to efficiently move your North American freight.
              </p>
          </div>
         
          <div className='service_item'>
              <i className="fa fa-ship" aria-hidden="true"></i>
              <h2>Drayage</h2>
              <p>
              Your freight can be delivered right to your door from the port or rail. Or, if you have freight to
move by port or rail, we can be your freight partner to provide this at competitive pricing with
quick results. Our experienced team will work with your forwarding and customs partners to get
your freight moving as soon as possible.
              </p>
          </div>
          <div className='clearfix'></div>
        </div>
    </div>
  )
}
