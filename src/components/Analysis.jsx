import linesvg from '../assets/images/png/analysisellipse.png';
import imgmessage from "../assets/images/png/message.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ellipseswipe from "../assets/images/png/swiperellipse.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Analysis = () => {

    return (
        <>
            <div className=' position-relative overflow-hidden z-1'>
                <img src={linesvg} alt="svg" className=' position-absolute analipse z-n1 start-0' />
                <div className=' container pt-300 max-w-1140 position-relative z-1 pb-4'>
                    <div className="d-none d-xl-flex flex-column align-items-end mt-3 no-2 box-no4 top-0 position-absolute">
                        <p className=" fw-300 color-black d-inline-block mb-2 pb-1 ff-poppins rotate-270">MJH</p>
                        <div className="d-flex align-items-end ps-1">
                            <p className=' ff-neue color-black fs-md text-name'>ANALYSIS</p>
                            <p className="ff-neue d-inline-block color-black fw-300 rotate-90 fs-lg text-number">04</p>
                            <div className=" box-line2 box-line-analyse me-3"></div>
                        </div>
                    </div>
                    <div className="d-lg-flex d-none d-xl-none flex-column align-items-baseline start-0 top-0 box-fault position-absolute z-n1">
                        <p className=" fw-300 color-black d-inline-block mb-2 mt-4 pb-1 ff-poppins rotate-270">MJH</p>
                        <div className="d-flex align-items-end ps-1">
                            <div className=" box-line box-line-analyse ms-2"></div>
                            <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">04</p>
                            <p className=' ff-neue color-black fs-md  text-name'>ANALYSIS</p>
                        </div>
                    </div>

                    <div className=' row flex-column flex-lg-row pb-5'>
                        <div data-aos="fade-up" className=' col-lg-5 col-md-8 mt-lg-4 mx-auto pt-lg-2 separation'>
                            <h2 className='text-center text-lg-start ff-neue fs-md4 color-black'>THE FOUR PHASE OF <span className='d-block fs-lg2'> SEPARATION <span className=' color-orange'>MINFSET </span></span></h2>
                            <p className=' ff-poppins fw-normal mt-3 text-center text-lg-start pt-1 color-black opacity-75 fs-sm'>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                            <div className='max-w-452 br-30 mx-auto ms-lg-0 cursor-pointer text-capitalize d-flex align-items-center color-gradient ff-inter fs-sm lh-24 fw-medium btn-head'><span><img src={imgmessage} alt="img" className=' max-w-50' /></span><p className="m-0">Book a non-binding initial consultation now</p></div>
                        </div>
                        <div data-aos="fade-up" className=' col-lg-7 mt-4 mt-sm-5 mt-lg-0 separation2'>
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                <img src={ellipseswipe} alt="ellipser" className=' position-absolute z-1 d-none d-sm-block bottom-0 end-0' />

                                <SwiperSlide className=' d-flex  flex-column align-items-center swiper-slide1 justify-content-center'>
                                    <p className=' fs-md ff-poppins color-white fw-medium text-center'>1st phase <span className='d-block'></span>
                                        "The not-wanting-to-be-true"</p>
                                    <p className=' ff-poppins fs-sm color-white fw-normal text-center'>This phase is characterized by denial and <span className='d-block'></span> ignoring the final separation.</p>
                                </SwiperSlide>

                                <SwiperSlide className=' d-flex flex-column align-items-center swiper-slide1 justify-content-center'>
                                    <p className=' fs-md ff-poppins color-white fw-medium text-center'>2nd phase <span className='d-block'></span>
                                        "The Emotional Chaos"</p>
                                    <p className=' ff-poppins fs-sm color-white fw-normal text-center'>The Second Phase Is Characterized By Strong
                                        <span className='d-block'></span>Mood Swings And Disorientation.</p>
                                </SwiperSlide>

                                <SwiperSlide className=' d-flex flex-column align-items-center swiper-slide1 justify-content-center'>
                                    <p className=' fs-md ff-poppins color-white fw-medium text-center'>3rd phase <span className='d-block'></span>
                                        "The Reconstruction"</p>
                                    <p className=' ff-poppins fs-sm color-white fw-normal text-center'>Apart From Occasional Setbacks, You Now
                                        <span className='d-block'> Begin To Actively Take Control Of Your Life</span>
                                        <span className='d-block'>again.</span></p>
                                </SwiperSlide>

                                <SwiperSlide className=' d-flex flex-column align-items-center swiper-slide1 justify-content-center'>
                                    <p className=' fs-md ff-poppins color-white fw-medium text-center'>4th phase <span className='d-block'></span>
                                        "The New Concept Of Life"</p>
                                    <p className=' ff-poppins fs-sm color-white fw-normal text-center'>Through The Breakup You Have Learned To <span className='d-block'></span> Find Your Strengths. You Develop A New <span className='d-block'>Life. YourLive</span></p>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analysis;