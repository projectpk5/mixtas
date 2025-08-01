import React from 'react'
import { myProducts } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const NewArrivals = () => {

  const navigate = useNavigate()
  const [ newProductPeek, setNewProductPeek ] = useState("");
  const [ newWishList, setNewWishList ] = useState("");
  useEffect( ()=> {
    const displayWishList = (id) => {
        var productWishList = "";
        myProducts.map((a) => {
            productWishList +=
                `
                    <div className="col-lg-6 col-md-3">
                        <img src=${a.img} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 col-md-3">
                        <h1>${a.name}</h1>
                        <h2>${a.price}</h2>
                        <h3>${a.desc}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cum quam odit! A ipsam facere dolore unde maiores repellendus exercitationem, expedita, nihil voluptas nesciunt alias.</p>
                        <button className='btn btn-dark'> Add to Cart </button>
                    </div> 
                `
            setNewWishList(productWishList);
        })}
  },[])

  return (
      <>
        <div className="container">
          <br />
          <h5>LATEST PRODUCTS</h5>
          <h1 className='display-1'>New Arrivals</h1>
          <br />

          <div className="row">
          {myProducts.filter((value)=> (value.category === "New Arrival")).map((value, index)=> (
            <div className="col-lg-3 col-md-6 my-3" key={index}>
              <div className="card border-0 my-3 mainContainer" >
                <img src={value.img} className='w-100' onClick={() => navigate(`/shop/${value.id}`)} />
                <div className="listIcons">
                    <i class="fa-solid fa-magnifying-glass fa-lg" onClick={() => setNewProductPeek(value.id)} 
                    data-bs-toggle="modal" data-bs-target="#peekProduct"></i>
                    <i class="fa-solid fa-cart-shopping fa-lg" onClick={()=> displayWishList(value.id)}
                      data-bs-toggle="modal" data-bs-target="#WishList"></i>
                    <i class="fa-solid fa-heart fa-lg"></i>
                </div>
              </div>
              <div className="card-body my-3 border-0">
                <h2>{value.name}</h2>
                <h4>{value.price}</h4>
                <p>{value.desc}</p>
              </div>
            </div>
          ))}
          </div>
        </div>

        {myProducts.filter( 
          (value) => (value.id === newProductPeek)).map(
              (value, index) => 
              <div class="modal fade" id="peekProduct" key={index}>
                  <div class="modal-dialog modal-lg modal-dialog-centered">
                      <div class="modal-content">
                          <div className="container p-5">
                            <div class="modal-header border-0">
                                <h3>Product Quicklook</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body" >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-3">
                                            <img src={value.img} alt="" className='img-fluid' />
                                        </div>
                                        <div className="col-lg-6 col-md-3">
                                            <h1>{value.name}</h1>
                                            <h2>{value.price}</h2>
                                            <h3>{value.desc}</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cum quam odit! A ipsam facere dolore unde maiores repellendus exercitationem, expedita, nihil voluptas nesciunt alias.</p>
                                            <button className='btn btn-dark'> Add to Cart </button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                          </div> 
                      </div>
                  </div>
              </div>)
          }

        {/* new arrivals wish list */}
          {myProducts.filter( 
          (value) => (value.id === newWishList)).map(
              (value, index) => 
              <div class="modal fade" id="WishList" key={index}>
                  <div class="modal-dialog modal-lg modal-dialog-centered">
                      <div class="modal-content">
                          <div className="container p-5">
                            <div class="modal-header border-0">
                                <h3>Product Quicklook</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body" >
                                <div className="container">
                                    {newWishList}
                                </div>
                            </div>
                          </div> 
                      </div>
                  </div>
              </div>)
          }
      </>
  )
}

export default NewArrivals