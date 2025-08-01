import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import { myProducts } from '../../assets/assets'
import { useParams } from 'react-router-dom'

const ProductDynamic = () => {
  var [ count, setCount ] = useState(0);
  const { id } = useParams()
  const selectedProduct = myProducts.find((a) => a.id === Number(id))

  return (
      <>
        <div className="container">
          <br /><br />
          <div className="display-2">Product Details</div>
          <br /><br />
          <div className="row">
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-lg-12 g-2">
                  {/* <img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/> */}
                  <img src={selectedProduct.img} alt="" className=' w-100 img-fluid' />
                </div>      
                <div className="col-lg-2 g-2"><img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/></div>
                <div className="col-lg-2 g-2"><img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/></div>
                <div className="col-lg-2 g-2"><img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/></div>
                <div className="col-lg-2 g-2"><img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/></div>
                <div className="col-lg-2 g-2"><img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/></div>
                <div className="col-lg-2 g-2"><img src="src/assets/clothes/shop12.png" alt="" className='img-fluid'/></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card bg-white">
                <div className="card-header bg-white border-bottom">
                  <h1>{selectedProduct.name}</h1>
                  <h3>{selectedProduct.price}</h3>
                </div>
                <div className="card-body">
                  <p>A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.</p>
                  <div className="d-flex align-items-center border-1 gap-2">
                    <button className='btn btn-outline-light' onClick={() =>
                      (count >= 0 ? setCount(count--) : 0)}> - </button>
                    <h3> {count} </h3>
                    <button className='btn btn-outline-light' onClick={() => 
                    setCount(++count) }> + </button>
                    <button className='btn btn-dark'> Add to Cart </button>
                  </div>
                  <br /><br />
                  <span><i class="fa-regular fa-heart"></i> &nbsp; Add to Wishlist</span>
                  <br />
                </div>
                <div className="card-footer bg-white">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                          <strong>Description</strong>
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          {selectedProduct.desc}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" >
                          <strong>Additional Information</strong>
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          
                          <table className='table'>
                            <tbody>
                              <tr>
                                <td>Color</td>
                                <td>Blue, Gray, Green, Red, Yellow</td>
                              </tr>
                              <tr>
                                <td>Size</td>
                                <td>Large, Medium, Small</td>
                              </tr>
                            </tbody>

                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" >
                          <strong>Reviews</strong>
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse"  data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                          <h3>There are no reviews yet</h3>
                          <p>Be the first one to post a review</p>
                          <span>
                            Your rating here: &nbsp;
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                          </span>
                          <br /><br />
                          <div className="row g-3">
                            <div className="col-md-6 g-3">
                              <label for="nameColumn">Your Name</label>
                              <input type="text" className='form-control' id="nameColumn" />
                            </div>
                            <div className="col-md-6">
                              <label for="nameColumn">Your Name</label>
                              <input type="text" className='form-control' id="nameColumn" />
                            </div>
                            <div className="col-lg-12">
                              <label for="exampleFormControlTextarea1" class="form-label">Your Review</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-lg-12">
                              <input type="checkbox" name="" id="checkbox1" />
                              <label for="checkbox1">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <div className="col-lg-3">
                              <button className='btn btn-dark'>Submit</button>
                            </div>
                          </div>
                          <br />
                          <div className="d-flex">
                            <i class="fa-brands mt-1 mx-1 fa-facebook"></i>
                            <p>Facebook</p>
                            <i class="fa-brands mt-1 mx-1 fa-x-twitter"></i>
                            <p>Twitter</p>
                            <i class="fa-brands mt-1 mx-1 fa-pinterest"></i>
                            <p>Pinterest</p>
                            <i class="fa-brands mt-1 mx-1 fa-whatsapp"></i>
                            <p>Whatsapp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <br /><br /><br /><br />

          {/*  */}
          <div className="display-5">You may also like...</div>
          <br /><br /><br />
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
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
              {myProducts.map( (value, index) => (
                <SwiperSlide key={index}>
                  <img src={value.img} height='300px' width='280px' alt="" />
                  <h2>{value.name}</h2>
                  <p>{value.price}</p>
                  <br /><br />
                </SwiperSlide>
              ) )}
          </Swiper>
        </div>
      </>
  )
}

export default ProductDynamic