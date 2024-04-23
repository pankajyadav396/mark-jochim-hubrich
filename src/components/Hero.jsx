import React from 'react'
import Navbarsec from './Navbarsec'
import ellipse from "../assets/images/png/ellipse-header.png"
import imgmessage from "../assets/images/png/message.png"
import call from "../assets/images/svg/callicon.svg"
const Hero = () => {
    return (
        <div className=' ff-neue fw-normal color-black text-xxl bg-header d-flex flex-column position-relative z-1'>
            <img src={ellipse} alt="ellipse" className=' position-absolute top-0 left-0 ellipse-1 z-n1' />
            <Navbarsec />
            <div className=' max-w-1140 container p-0 flex-grow-1 d-flex align-items-center justify-content-center position-relative'>
                <div className="d-lg-flex d-none flex-column align-items-baseline start-0 box-fault position-absolute z-n1">
                    <p className=" fw-300 color-black d-inline-block mb-2 pb-1 ff-poppins rotate-270">MJH</p>
                    <div className="d-flex align-items-end ps-1">
                        <div className=" box-line ms-2"></div>
                        <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">01</p>
                        <p className=' ff-neue color-black fs-md  text-name'>FAULT</p>
                    </div>
                </div>
                <div className=' row w-100 h-90vh'>
                    <div className='col-lg-6 col-12'>
                        <p className=' color-orange fs-sm1 ff-neue fw-bold mb-0 mt-5'>Marc Joachim Hubrich</p>
                        <h1 className='color-black fs-xl letter-spacing text-capitalize ff-neue1 lh-77 fw-300'>Now I let you
                            <span className='d-block'>go!</span> </h1>
                        <p className='ff-poppins mb-2 fs-sm opacity-75 fw-normal color-black'>For women who do not want to be completely dragged down <span className=' d-block'>by a SEPARATION.</span>
                            How to let go of your EX so you can leave him behind
                            without <span className='d-block'>having to run to a therapist right away.</span> </p>
                        <div className=' d-flex pt-4'>
                            <div className=' cursor-pointer br-30 d-flex text-capitalize align-items-center color-gradient ff-inter fs-sm lh-24 fw-medium btn-head'><span><img src={imgmessage} alt="img" className=' max-w-50' /></span><p className="m-0">Book a non-binding initial consultation now</p></div>
                            <a href="tel:91798774789" className=' d-flex justify-content-center align-items-center'> <img src={call} className='ms-3 cursor-pointer' alt="call" /></a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex align-items-lg-end w-100 h-lg-100 pb-lg-5 pb-xl-0 mt-5-1160'>
                            <div className=' head-box ps-2 ms-lg-5'>
                                <p className='color-white color-lg-black text-uppercase m-0 ff-neue fs-sm'>Die wichtigsten <span className='d-block'>    Aspekte einer</span> Trennung:</p>
                            </div>
                            <ul className='ms-sm-5'>
                                <li className='list-disc color-lg-black ff-poppins fw-medium color-white fs-sm lh-24'>
                                    Physische Trennung
                                </li>
                                <li className='list-disc color-lg-black ff-poppins fw-medium color-white fs-sm lh-24'>
                                    Mentale Trennung
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero