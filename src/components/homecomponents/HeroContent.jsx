import React from 'react'
import { myImages } from '../../assets'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const HeroContent = () => {
  return (
      <>
        <Swiper 
          navigation={true}
          pagination = {{clickable: true}}
          autoplay={true}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}>
          <SwiperSlide>
              <div className='bgImage1 display-1'>
                <h1 className='p-5 m-5'>Buy Discounted Clothing now</h1>
                <p className='p-5 m-5'>Superior Collections</p>
                <div className="text-center">
                <button className='btn btn-dark p-3'>Shop Now</button>
                </div>
                <br /><br /><br />
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='bgImage2 display-1'>
                <h1 className='p-5 m-5'>FALL CLOTHING TREND</h1>

                <p className='p-5 m-5'>Superior Collections</p>

                <div className="text-center">
                <button className='btn btn-dark p-3'>Shop Now</button>
                </div>              
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='bgImage3 display-1'>
                <h1 className='p-5 m-5'>EVENING HIGH TEA</h1>

                <p className='p-5 m-5'>Superior Collections</p>

                <div className="text-center">
                <button className='btn btn-dark p-3'>Shop Now</button>
                </div>              
                </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='bgImage1 display-1'>
                <h1 className='p-5 m-5'>NEW FASHION TRENDS</h1>

                <p className='p-5 m-5'>Superior Collections</p>

                <div className="text-center">
                <button className='btn btn-dark p-3'>Shop Now</button>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </>
  )
}

export default HeroContent