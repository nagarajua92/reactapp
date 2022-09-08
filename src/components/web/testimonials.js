import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AvatarMaker from '../../assets/img/AvatarMaker.png'
import AvatarMaker2 from '../../assets/img/AvatarMaker2.png'

export default function Testimonials() {
  return (
    <div className="testimonials com-pad">
        <div className='container'>
            <div className="title_section">
                {/* <h3>Customer Testimonial</h3> */}
                <h3>
                    Don't just take our word for it...
                </h3>
            </div>
            <div className="">

            <Splide aria-label="My Favorite Images" 
                options={ {
                    
                    type   : 'loop',
                    gap   : '1rem',
                    perPage: 1,
                    width:'100%',
                    pagination:false,
                    breakpoints:{
                        800:{
                            perPage:1
                        }
                    },
                } }
                
                
            >
            <SplideSlide>
                    <div className="testimonial_item">
                        <p>
                        "VSS Logistics has grown to be a strong partner of ours. We have worked closely with them for
    almost 4 years and have relied on their excellent service and communication, and fair
    rates. Their availability to help us after hours and on weekends offered us additional strong
    support. They are quick to adjust to the needs of their customers, with a “can-do” attitude. Any
    service issues are communicated right away with great attention and follow through. Thanks for
    all that you do for us! "
                        </p>
                        <div className="avator">
                            {/* <img src={AvatarMaker} alt="" /> */}
                            <div className="ava_content">
                                <div className="title">-Tessa Rawlette, Omni Linehaul Network  </div>
                                {/* <div className="sub_title">Marketing Director</div> */}
                            </div>
                        </div>
                    </div>
            </SplideSlide>
            {/* <SplideSlide>
                <div className="testimonial_item">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<strong> standard dummy text ever since the 1500s,</strong>
                                    </p>
                                    <div className="avator">
                                        <img src={AvatarMaker2} alt="" />
                                        <div className="ava_content">
                                            <div className="title">Isabella</div>
                                            <div className="sub_title">Marketing Director</div>
                                        </div>
                                    </div>
                                </div>
            </SplideSlide>
            <SplideSlide>
                    <div className="testimonial_item">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<strong> standard dummy text ever since the 1500s,</strong>
                                    </p>
                                    <div className="avator">
                                        <img src={AvatarMaker} alt="" />
                                        <div className="ava_content">
                                            <div className="title">Charlotte 3</div>
                                            <div className="sub_title">Marketing Director</div>
                                        </div>
                                    </div>
                                </div>
            </SplideSlide>
            <SplideSlide>
                            <div className="testimonial_item">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<strong> standard dummy text ever since the 1500s,</strong>
                                    </p>
                                    <div className="avator">
                                        <img src={AvatarMaker2} alt="" />
                                        <div className="ava_content">
                                            <div className="title">Isabella</div>
                                            <div className="sub_title">Marketing Director</div>
                                        </div>
                                    </div>
                                </div>
            </SplideSlide>
            <SplideSlide>
                        <div className="testimonial_item">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<strong> standard dummy text ever since the 1500s,</strong>
                            </p>
                            <div className="avator">
                                <img src={AvatarMaker} alt="" />
                                <div className="ava_content">
                                    <div className="title">Charlotte 5</div>
                                    <div className="sub_title">Marketing Director</div>
                                </div>
                            </div>
                        </div>
            </SplideSlide> */}
            </Splide>
            </div>
        </div>
    </div>
  )
}
