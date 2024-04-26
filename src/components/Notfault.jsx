import ellipse from '../assets/images/svg/faultellipse.svg'
const Notfault = () => {
    return (
        <>
            <div className=' position-relative'>
                <img src={ellipse} alt="img" className=' position-absolute top-0 end-0 d-none d-lg-block' />
                <div className='container max-w-1140 mt-md-5 pt-md-5 position-relative z-1'>
                    <div className='row pt-md-5 justify-content-center justify-content-lg-start align-items-center'>

                        <div className='col-lg-7 col-12 d-flex flex-column align-items-lg-end align-items-center'>
                            <h2 data-aos="zoom-in" className='ff-neue  color-black fs-xl lh-77'>IT'S NOT <span className='d-block ms-5 ps-2 color-orange'>YOUR <span className='color-black'> FAULT</span></span></h2>
                        </div>
                        <div className='col-sm-8 col-lg-4 x'>
                            <div className='head-box ps-2 ms-lg-5'>
                                <p data-aos="fade-up" className='color-black ff-poppins fs-sm'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p data-aos="fade-up" className='color-black px-3 fw-800 ff-neue text-center mt-5 mb-4 text-capitalize'>How would you know when you are busy with completely different things at the moment:</p>
            </div>
        </>
    )
}

export default Notfault