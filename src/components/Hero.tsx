import React from 'react'
import Navber from './Navber'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile2.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%", backgroundPosition:"left 100px top 100px"}}
    >
      <Navber/>
      
<div className=' container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
    <div className='hidden lg:block'></div>
    <div className='text-[100px] sm:text-[80px]font-bold leading-tight flex justify-center items-center text-white'>
        <div>
            <p data-aos="flip-right">I'm</p>
            <p data-aos="flip-right"> Aman</p>
            <p data-aos="flip-right">khan</p>
        </div>

    

    </div>
</div>


    </div>
  )
}

export default Hero
