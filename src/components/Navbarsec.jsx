import React, { useState } from 'react'
import logo from '../assets/images/webp/Logo.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbarsec = () => {
    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("overflow-max-hidden")
            document.getElementById('menu').classList.add("menu-opened");
        }
        else {
            document.body.classList.remove("overflow-max-hidden")
            document.getElementById('menu').classList.remove("menu-opened");
        }
    };
    return (
        <>
            <div className='h-90 w-100 d-flex align-items-center'>
                <div className='h-100 container-lg max-w-1140 justify-content-between d-flex align-items-center'>
                    <img src={logo} alt="image" className='cursor-pointer logo d-inline' />
                    <div className='d-flex gap-4 align-items-center'>
                        <ul className={`${nav ? "open" : "not-open"
                            } d-flex justify-content-center align-items-center m-0 p-0 gap-4 mobileView`}>
                            <li><a onClick={show} href="#benefits" className='home fs-sm fw-normal ff-neue nav-links lh-24 text-decoration-none list-unstyled'>Benefits</a></li>
                            <li><a onClick={show} href="#testimonial" className='home fs-sm fw-normal ff-neue nav-links lh-24 text-decoration-none list-unstyled'>Testimonials</a></li>
                            <li onClick={show} className='ms-2 d-sm-none'><button className='btn-nav color-white ff-inter fw-medium'>Book consultation now</button></li>
                        </ul>
                        <li className='ms-2 d-none d-sm-block'><button className=' btn-nav color-white ff-inter fw-medium'>Book Consultation Now</button></li>
                        <label className='cursor-pointer' id='menu' onClick={show}>
                            {nav ? (
                                <div id='menu' className='relative z-40'>
                                    <span className=' span1'></span>
                                    <span className=' span2'></span>
                                    <span className=' span3'></span>
                                </div>
                            ) : (
                                <div className='relative z-40'>
                                    <span className=' span4'></span>
                                    <span className='span5'></span>
                                    <span className=' span6'></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbarsec