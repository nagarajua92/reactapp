import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AvatarMaker from '../../assets/img/AvatarMaker.png'
import AvatarMaker2 from '../../assets/img/AvatarMaker2.png'

export default function Testimonials() {
  return (
    <div className="testimonials">
        <div className="title_section">
            <h3>What people are saying about VSSTG</h3>
            <p>10,000+ companies switched to VSS logistics for their freight movemenet</p>
        </div>
        <div className="">

        <Splide aria-label="My Favorite Images" 
            options={ {
                
                type   : 'loop',
                gap   : '1rem',
                perPage: 4,
                width:'100%',
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<strong> standard dummy text ever since the 1500s,</strong>
                    </p>
                    <div className="avator">
                        <img src={AvatarMaker} alt="" />
                        <div className="ava_content">
                            <div className="title">Charlotte  </div>
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
        </SplideSlide>
        </Splide>
        </div>
    </div>
  )
}
