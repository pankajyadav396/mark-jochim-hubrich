import React from 'react'
import logo from '../assets/images/webp/footerlogo.webp'
import { Email, Fbicon, Insta, Twitter } from './Icon';
const Footersec = () => {
  const d = new Date();
  const newyear = d.getFullYear();
  return (
    <>
      <div className='bg-footer px-2'>
        <div className=' container text-center position-relative'>
          <img src={logo} alt="logo" className=' logo' width={241} />
          <p className=' ff-poppins text-center fw-normal mt-3 pt-1 mb-0 fs-sm lh-25 color-white'>(c) <span>{newyear}</span> MARC JOACHIM HUBRICH <span className='d-block'></span>
            All Rights Reserved</p>
          <div className='position-absolute top-0 end-0 d-flex flex-column gap-3'>
            <a target='_blank' href="https://www.facebook.com/"> <Fbicon /></a>
            <a target='_blank' href="https://www.twitter.com/"> <Twitter /></a>
            <a target='_blank' href="https://www.gmail.com/"> <Email /></a>
            <a target='_blank' href="https://www.instagram.com/"> <Insta /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footersec;