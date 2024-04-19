import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import girmimg from '../assets/images/png/girlswiperimg.png'
import quoteimg from '../assets/images/png/quotes.png'
import { Scrollbar, Pagination, A11y } from 'swiper/modules';

const Client = () => {
    return (
        <>
            <div className=' pt-5 pt-md-0 mt-5 mt-md-0'>
                <div className=' container max-w-1140 pt-202 pb-5 position-relative'>
                    <img src={quoteimg} alt="img" className='position-absolute quote-img d-none d-md-block mt-5' />
                    <div className="d-lg-flex d-none flex-column align-items-baseline start-0 bottom-0 position-absolute z-n1">
                        <p className=" fw-300 color-black d-inline-block mb-2 pb-1 ff-poppins rotate-270">MJH</p>
                        <div className="d-flex align-items-end ps-1">
                            <div className=" box-line ms-2"></div>
                            <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">07</p>
                            <p className=' ff-neue color-black fs-md  text-name'>TAKE STEP</p>
                        </div>
                    </div>
                    <div className="d-none d-md-flex flex-column align-items-end end-0 top-0 position-absolute">
                        <p className=" fw-300 color-black d-inline-block mb-2 pb-1 ff-poppins rotate-270">MJH</p>
                        <div className="d-flex align-items-end ps-1">
                            <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">06</p>
                            <div className=" box-line2 h-201 me-3"></div>
                        </div>
                    </div>
                    <h2 className=' color-black ff-neue text-center fw-light fs-lg2 text-uppercase'>What our <span className=' color-orange'> clients </span> say</h2>
                    <Swiper
                        direction={'horizontal'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        Effect={'cube'}
                        cubeEffect={{
                            shadow: false,
                            slideShadow: false,
                            shadowOffset: 20,
                            shadowScale: 0.94
                        }}
                        modules={[A11y, Scrollbar, Pagination]}
                        breakpoints={{
                            890: {
                                direction: 'vertical'
                            },
                        }}
                        className='myswiper2 mb-lg-5'

                    >
                        <SwiperSlide className=' swiper-slide2'>
                            <div className=' max-w-820 mx-auto'>
                                <div className='row'>
                                    <div className='col-12 pt-5 mt-4 mb-4'>
                                        <div className=' client-card text-center'>
                                            <img src={girmimg} alt="girl" className=' transform-imgswiper' />
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center '>Marrie James-CEO</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 '>
                                        <div className=' client-card2 '>
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center'>Ralph Edwards-CEO</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 d-none d-sm-block mt-4 mt-sm-0'>
                                        <div className=' client-card2'>
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center'>Darrell Steward-Head</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' swiper-slide2'>
                            <div className=' max-w-820 mx-auto'>

                                <div className='row'>
                                    <div className='col-12 pt-5 mt-4 mb-4'>
                                        <div className=' client-card text-center'>
                                            <img src={girmimg} alt="girl" className=' transform-imgswiper' />
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center '>Marrie James-CEO</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 '>
                                        <div className=' client-card2 '>
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center'>Ralph Edwards-CEO</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 d-none d-sm-block mt-4 mt-sm-0'>
                                        <div className=' client-card2'>
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center'>Darrell Steward-Head</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' swiper-slide2'>
                            <div className=' max-w-820 mx-auto'>

                                <div className='row'>
                                    <div className='col-12 pt-5 mt-4 mb-4'>
                                        <div className=' client-card text-center'>
                                            <img src={girmimg} alt="girl" className=' transform-imgswiper' />
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center '>Marrie James-CEO</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 '>
                                        <div className=' client-card2 '>
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center'>Ralph Edwards-CEO</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 d-none d-sm-block mt-4 mt-sm-0'>
                                        <div className=' client-card2'>
                                            <p className=' fs-sm ff-poppins fw-normal color-black opacity-75 text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim. </p>
                                            <p className=' fs-sm ff-poppins fw-medium color-black m-0 lh-25 text-center'>Darrell Steward-Head</p>
                                            <p className='text-center fs-sm ff-poppins color-black opacity-75 fw-normal'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default Client