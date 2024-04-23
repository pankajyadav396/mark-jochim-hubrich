import flower from "../assets/images/webp/flowerimg.webp"
import imgmessage from "../assets/images/png/message.png"
import flower1 from "../assets/images/png/flowerellipse2.png"
import flower2 from "../assets/images/png/flowerellipse1.png"
const Whatget = () => {
    return (
        <>
            <div className=" position-relative pb-5">
                <img src={flower2} alt="img" className=" position-absolute flower-ellipse1 end-0 d-none d-sm-block" />
                <img src={flower1} alt="img" className=" position-absolute bottom-0 start-0 d-none d-md-block" />
                <div className='container px-4 max-w-1140 mt-lg-5 pt-5 position-relative'>
                    <div className="d-lg-flex flex-column align-items-baseline d-none box-fault2 position-absolute">
                        <div className="d-flex align-items-end ps-1">
                            <div className=" box-line box-line3 ms-2"></div>
                            <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">03</p>
                            <p className=' ff-neue color-black fs-md  text-name'>GOAL</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center flex-column flex-lg-row mt-4'>
                        <p data-aos="zoom-in" className=' color-black ff-neue fs-lg2 lh-62'>WHAT YOU
                            <span className='d-block fs-xl lh-77'>
                                WILL<span className=' color-orange'> GET</span>
                            </span>
                        </p>
                        <div className="d-flex flex-column flex-sm-row align-items-center">
                            <img data-aos="zoom-in" src={flower} alt="img" className="ms-2 flower-img" />
                            <div className="head-box ps-2  max-w-432 ms-4 mt-4 mt-lg-0">
                                <p data-aos="zoom-in" className="color-black m-0 ff-poppins fs-sm lh-25">I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
                            </div>
                        </div>
                        <div className="d-none d-lg-flex flex-column align-items-end end-0 no-2 box-no2 position-absolute">
                            <p className=" fw-300 color-black d-inline-block mb-2 pb-1 ff-poppins rotate-270">MJH</p>
                            <div className="d-flex align-items-end ps-1">
                                <p className="ff-neue d-inline-block color-black fw-300 rotate-270 fs-lg text-number">02</p>
                                <div className=" box-line2 me-3"></div>
                            </div>
                        </div>
                    </div>
                    <p className="color-black mt-5 ff-neue fs-sm2 text-center mb-4 pb-1 fw-medium">In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 p-0" data-aos="zoom-in">  <div className=" get-box d-flex align-items-center justify-content-center">
                            <p>Why does your EX have to disappear from your life forever?</p>
                        </div> </div>
                        <div className="col-sm-6 col-lg-4 p-0" data-aos="zoom-in">  <div className=" get-box d-flex align-items-center justify-content-center">
                            <p> What should your everyday life as a single person look like now and how can you cope with the new challenges?</p>
                        </div> </div>
                        <div className="col-sm-6 col-lg-4 p-0" data-aos="zoom-in">  <div className=" get-box d-flex align-items-center justify-content-start justify-content-lg-center">
                            <p>Who are you without your EX?</p>
                        </div> </div>
                        <div className="col-sm-6 col-lg-4 p-0" data-aos="zoom-in">  <div className=" get-box d-flex align-items-center justify-content-center">
                            <p>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?</p>
                        </div> </div>
                        <div className="col-sm-6 col-lg-4 p-0" data-aos="zoom-in">  <div className=" get-box d-flex align-items-center justify-content-lg-center">
                            <p>What new dreams and hopes do you want to live?</p>
                        </div> </div>
                        <div className="col-sm-6 col-lg-4 p-0" data-aos="zoom-in">  <div className=" h-100 d-flex align-items-center justify-content-center">
                            <div className='cursor-pointer br-8 d-flex text-capitalize align-items-center color-gradient ff-inter fs-sm lh-24 br-8 fw-medium btn-head'><span><img src={imgmessage} alt="img" className=' max-w-50' /></span><p className="m-0">Book a non-binding initial consultation now</p></div>
                        </div> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whatget