import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import { myBlogDetails } from '../../assets/assets'

const Blog = () => {
  return (
      <>
        <div className="container">
          <br />
          <h5>FOLLOW LATEST TRENDS</h5>
          <h1 className='display-1'>Blog Posts</h1>
          <br />
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{clickable : true}}
            autoplay={true}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView : 1
              },
              768 : {
                slidesPerView : 2
              },
              1024 : {
                slidesPerView : 4
              }
            }}
            >
              {myBlogDetails.map( (value, index) => (
                <SwiperSlide key={index}>
                  <img src={value.blogimg} height='320px' className = 'img-fluid' alt="" />
                  <h2>{value.blogtitle}</h2>
                  <p>{value.blogdesc}</p>
                  <br /><br />
                </SwiperSlide>
              ) )}
          </Swiper>
          <br /><br /><br />
        </div>
      </>
  )
}

export default Blog