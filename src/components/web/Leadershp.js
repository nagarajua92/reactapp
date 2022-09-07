import React from 'react'
import AvatarMaker from '../../assets/img/AvatarMaker.png'
import AvatarMaker2 from '../../assets/img/AvatarMaker2.png'
export default function Leadershp() {
  return (
    <div className='our_leadershp'>
        <div className='container'>
            <div className='profile'>
                <img src={AvatarMaker} alt="" />
                    <div className='title'>Greg Card</div>  
                    <div className='subtitle'>Director of Operations</div>  
            </div>
            <div className='profile'>
                <img src={AvatarMaker2} alt="" />
                    <div className='title'>Ronald Stone</div>  
                    <div className='subtitle'>Vice President of Operations</div>  
            </div>
        </div>
    </div>
  )
}
