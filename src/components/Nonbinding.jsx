import imgmessage from "../assets/images/png/message.png";

const Nonbinding = () => {
    return (
        <>
            <div className='py-5 bg-skyblue2 overflow-hidden'>
                <div className='container max-w-1140'>
                    <div className='row justify-content-center justify-content-md-end align-items-center'>
                        <div className=" col-md-7">
                            <p className=' fs-lg2 color-black d-inline-block float-md-end float-lg-none  text-uppercase ff-neue m-0'>Request your  <span className='d-block color-orange'> non-binding <span className='color-black'>strategy</span> </span>meeting now!</p>
                        </div>
                        <div className='col-md-5 mt-4 mt-md-0'>
                            <div className=' head-box ps-2'>
                                <p className='color-white color-black m-0 ff-neue fs-sm'>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-nonbinding overflow-hidden'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 px-4'>
                            <div className='row justify-content-center'>
                                <div className=' col-lg-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>How do I let go of my EX so I can finally leave him behind?</p>
                                </div>
                                <div className=' col-lg-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>How does the divorce process work?</p>
                                </div>
                                <div className=' col-lg-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>Do I need a lawyer?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11 px-4 mt-4">
                            <div className='row justify-content-center'>
                                <div className=' col-lg-3 col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center col-12 box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>How much will the divorce cost?</p>
                                </div>
                                <div className=' col-lg-3 col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center col-12 box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>What will happen to my children?</p>
                                </div>
                                <div className=' col-lg-3 col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center col-12 box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>What does my future as a single person look like now?</p>
                                </div>
                                <div className=' col-lg-3 col-md-4 col-sm-6 d-flex d-sm-block justify-content-center align-items-center col-12 box-nonbinding'>
                                    <p className=' ff-poppins fs-sm fw-normal m-0 color-white'>How do I rebuild my self-esteem?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white max-w-432 br-btn mx-auto mt-5">
                        <div className=' cursor-pointer mx-auto d-flex align-items-center color-gradient max-w-452 ff-inter fs-sm lh-24 fw-medium btn-head'><span><img src={imgmessage} alt="img" className=' max-w-50' /></span><p className="m-0">Book a non-binding initial consultation now</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nonbinding