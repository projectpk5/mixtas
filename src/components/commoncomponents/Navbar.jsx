import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myImages } from '../../assets'
import { useState } from 'react'
import { myProducts } from '../../assets/assets'

const Navbar = () => {
  const [ searchProduct, setSearchProduct ] = useState("");
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#showNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="logo">
              <img src={myImages.logo} height='50px' width='100px' alt="" />
            </div>

          <div className="collapse navbar-collapse justify-content-center" id="showNavbar">
            <div className="navbar-nav gap-5">
              <Link className='text-decoration-none text-dark' to="/">HOME</Link>
              <Link className='text-decoration-none text-dark' to="/about">ABOUT</Link>
              <Link className='text-decoration-none text-dark' to="/shop">SHOP</Link>
              <Link className='text-decoration-none text-dark' to="/faq">FAQ</Link>
              <Link className='text-decoration-none text-dark' to="/contact">CONTACT</Link>
            </div>
          </div>
          <div className="icons d-flex flex-row gap-3 justify-content-end">
            <div>
              <a href="#" data-bs-toggle = "offcanvas" data-bs-target="#login" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
              </a>
            </div>
            <div>
              <a href="" data-bs-toggle = "modal" data-bs-target="#search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
              </a>
            </div>
            <div>
              <a href="" data-bs-toggle = "modal" data-bs-target="#wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
              </a>
            </div>
            <div>
              <a href="" data-bs-toggle="offcanvas" data-bs-target="#cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
              </a>
            </div>  
          </div>
        </div>
      </nav>
                
      {/* Login - Offcanvas */}

      <div class="offcanvas offcanvas-end " id="login" >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="login">LOGIN</h3>
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <div className="container">
          <input type="text" name="" className='form-control' placeholder='E-mail'/><br /><br />
          <input type="password" className='form-control' name="" placeholder='Password' /><br /><br />
          <input type="checkbox" name="" id="rememberme" />
          <label for="rememberme">Remember Me</label>
          <br /><br />
          <button className='btn btn-dark form-control'>Login</button>
          <br /><br />
          <a className="form-control border-0" href="#">Lost Your Password</a>
          <br />
          <div className='text-center form-control border-0'><p>Not a member? <a href="#">Register Here</a></p></div>
          </div>
        </div>
      </div>

      {/* Shopping Cart - Offcanvas */}

      <div class="offcanvas offcanvas-end"  id="cart" >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="cart">SHOPPING CART</h3>
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas"></button>
          <hr />
        </div>
        <hr />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
        <div class="offcanvas-body">
          <div className="row">
            <div className="col d-flex flex-row justify-content-between">
              <p>Sub total</p>
              <p>$0.00</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <form className='input-group gap-1 my-2'>
                <button className='btn btn-dark form-control p-3'>View Cart</button>
                <button className='btn btn-outline-dark form-control p-3'>Checkout</button>  
            </form>  
            </div>
          </div>
        </div>
      </div>

      {/* Search - Modal */}

      <div class="modal fade" id="search" >
        <div class="modal-dialog modal-fullscreen modal-dialog-centered">
          <div class="modal-content ">
            <div className="container p-5">
            <div class="modal-header border-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div> 
              <br /><br /><br /><br />
              <form className='input-group gap-1'>
                <input type="text" name="" placeholder='Search Products' 
                onChange={(e)=>setSearchProduct(e.target.value)} 
                className='form-control border-bottom border-0' />
                <i class="fa-solid fa-magnifying-glass"></i>
              </form>
              <div className="container">
                <div className="modal-body" style= {{ maxHeight:'70vh', overflowY: 'scroll' }}>
                  <div className="row g-3 m-3">
                    {searchProduct.length > 0 &&
                      myProducts.filter((value) => 
                        value.name.toLowerCase().includes(searchProduct.toLowerCase())
                      ).map(
                          (value, index) => (
                            <div className="col-lg-3">
                              <div className="card my-3" key={index}>
                                <img src={value.img} alt="" />
                              </div>
                              <div className="card-body">
                                <h1>{value.name}</h1>
                                <h2>{value.price}</h2>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist - Modal */}

      <div class="modal fade" id="wishlist" >
        <div class="modal-dialog modal-lg">
          <div class="modal-content ">
            <div className="container p-5">
            <div class="modal-header border-0">
              <h1>Wishlist</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div> 
              <div className="container">
                <div className="modal-body" style= {{ maxHeight:'70vh', overflowY: 'scroll' }}>
                  <div className="row g-3 m-3">
                    {searchProduct.length > 0 &&
                      myProducts.filter((value) => 
                        value.name.toLowerCase().includes(searchProduct.toLowerCase())
                      ).map(
                          (value, index) => (
                            <div className="col-lg-3">
                              <div className="card my-3" key={index}>
                                <img src={value.img} alt="" />
                              </div>
                              <div className="card-body">
                                <h1>{value.name}</h1>
                                <h2>{value.price}</h2>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar
