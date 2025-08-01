import React from 'react'

const Discounts = () => {
  return (
      <>
        <div className="container">
          <br /><br />
          <h3>PROMOTIONS</h3>
          <h1 className='display-1'>Latest Discounts</h1>
          <div className="row imageOverflow">
            <div className="col-lg-6 ">
              <div className="image-wrapper">
                <div className="discountImage1 d-flex flex-column align-items-center justify-content-center">
                  <br /><br /><br />
                  <h1 className='m-5 text-light'>Super Discounts</h1>
                  <button className='my-5 btn btn-light'>Shop Now</button>
                  <br /><br /><br />
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="image-wrapper">
                <div className="discountImage2 d-flex flex-column align-items-center justify-content-center">
                  <br /><br /><br />
                  <h1 className='m-5 text-dark'>Good Collections</h1>
                  <button className='btn btn-dark m-5'>Shop Now</button>
                  <br /><br /><br />
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
  )
}

export default Discounts