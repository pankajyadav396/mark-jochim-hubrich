import React from 'react'
import imgmessage from "../assets/images/png/message.png"
const Selfesteem = () => {

    return (
        <>
            <div className=' bg-self px-3 py-4 py-md-0' >
                <div className='container max-w-1000'>
                    <div className='row justify-content-lg-end justify-content-center'>
                        <div className=' col-lg-9 col-12'>
                            <div className='row justify-content-center'>
                                <div data-aos="fade-up" className='col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-self'>
                                    <p className=' fw-normal ff-poppins lh-25 fs-sm color-white'>Your self-esteem is in the basement.</p>
                                </div>
                                <div data-aos="fade-up" className='col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-self'>
                                    <p className=' fw-normal ff-poppins lh-25 fs-sm color-white'>You keep asking yourself what you did wrong.</p>
                                </div>
                                <div data-aos="fade-up" className='col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-self'>
                                    <p className=' fw-normal ff-poppins lh-25 fs-sm color-white'>The feeling of helplessness is your constant companion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4 justify-content-center justify-content-lg-start pt-2'>
                        <div className='col-lg-9 col-12'>
                            <div className='row justify-content-center'>
                                <div data-aos="fade-up" className='col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-self2'>
                                    <p className=' fw-normal ff-poppins lh-25 fs-sm color-white'>You spend the nights alone and lonely.</p>
                                </div>
                                <div data-aos="fade-up" className='col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-self2'>
                                    <p className=' fw-normal ff-poppins lh-25 fs-sm color-white'>You have stopped going out and spend the time crying in your room.</p>
                                </div>
                                <div data-aos="fade-up" className='col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-self2'>
                                    <p className=' fw-normal ff-poppins lh-25 fs-sm color-white'>An emotional chaos is raging inside you.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <p data-aos="fade-up" className=' ff-poppins color-black pb-1 fw-normal text-center mt-5'>You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
            <div data-aos="fade-up"><a href='#' className='  cursor-pointer d-flex align-items-center max-w-432 mx-auto color-gradient ff-inter fs-sm lh-24 fw-medium btn-head'><span><img src={imgmessage} alt="img" className=' max-w-50' /></span><p className="m-0">Book a non-binding initial consultation now</p></a></div>
        </>
    )
}

export default Selfesteem