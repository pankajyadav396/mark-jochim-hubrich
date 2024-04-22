import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import Notfault from './components/Notfault';
import Selfesteem from './components/Selfesteem';
import Whatget from './components/Whatget';
import Targetsec from './components/Targetsec';
import Analysis from './components/Analysis';
import Overex from './components/Overex';
import Lawyer from './components/Lawyer';
import Client from './components/Client';
import Nonbinding from './components/Nonbinding';
import Footersec from './components/Footersec';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import Backtotop from './components/Backtotop';

function App() {
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500
    })
  }, [])

  return (
    <>
      {Loader ? (<div className=' vh-100 position-fixed w-100 d-flex align-items-center flex-column justify-content-center top-0 bottom-0 end-0 bg-body-secondary z-3'>
        <h1 className=' color-gradient ff-neue fw-800 fs-xl anime-bounce'>HUBRICH</h1>
        <div className="loader mt-5 "></div>
      </div>) :
        (
          <div className='position-relative'>
            <Hero />
            <Notfault />
            <Selfesteem />
            <Whatget />
            <Targetsec />
            <Analysis />
            <Overex />
            <Lawyer />
            <Client />
            <Nonbinding />
            <Footersec />
            <Backtotop />
          </div>)}
    </>
  )
}

export default App
