import React from 'react'
import imglawyer from '../assets/images/webp/lawyerimg.webp'
import arrow from '../assets/images/svg/Arrow.svg'
import ellipse from '../assets/images/svg/lawyerellipse.svg'

const Lawyer = () => {
    return (
        <>
            <div className=' container max-w-1140 position-relative z-1 pt-240 mt-3'>
                <div className="d-lg-flex flex-column align-items-baseline d-none top-0 left-0 box-about position-absolute">
                    <div className="d-flex align-items-end ps-1">
                        <div className=" box-line box-line5 ms-2"></div>
                        <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">05</p>
                        <p className=' ff-neue color-black fs-md  text-name'>About</p>
                    </div>
                </div>

                <div className="row pt-5 mt-lg-0">
                    <div data-aos="fade-up" className="col-lg-6 col-sm-8 mx-auto text-xl-end">
                        <img src={imglawyer} alt="image" className=' max-w-584 me-lg-4 w-100' />
                    </div>
                    <div data-aos="fade-up" className="col-lg-6 mt-4 mt-lg-0 position-relative overflow-hidden z-1">
                        <h2 className='text-center text-lg-start  color-black fs-lg2 lh-62 ff-neue mb-1'>LAWYER <span className='color-orange'>&</span> DIVORCE <span className='d-sm-block'>COACH</span></h2>
                        <h3 className='text-center text-lg-start  color-black fs-lg3 ff-neue text-uppercase '><span className='color-orange'>M</span>arc <span className='color-orange'>J</span>oachim <span className='color-orange'>H</span>ubrich</h3>
                        <p className='text-center text-lg-start fs-md color-black ff-neue fw-800 mt-3 mb-3'>About The Tindset Agency Coach</p>
                        <p className='text-center text-lg-start fs-md fw-normal color-black opacity-75 ff-poppins mt-3 mb-3'>AMarc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                        <div className=' mx-auto mx-lg-0 cursor-pointer br-30 d-flex align-items-center color-gradient ff-inter ps-4 max-w-350 fs-sm lh-24 fw-medium pe-4 btn-head'><p className="m-0">Learn More About The Agency</p> <span className='arrow ps-3'><img src={arrow} alt="arrowuimg" /></span></div>
                        <img src={ellipse} alt="img" className='d-none d-lg-block position-absolute z-n1 bottom-0 w-100' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lawyer