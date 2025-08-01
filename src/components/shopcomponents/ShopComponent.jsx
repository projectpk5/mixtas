import React from 'react'
import { myProducts } from '../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const ShopComponent = () => {

    const navigate = useNavigate()
    const [ productPeek, setProductPeek ] = useState("");
    return (
        <>
            <div className="container">
                <br />
                <h1 className='display-2'>Shop</h1>
                <br /><br />
                <div className="row">
                    {myProducts.filter((value)=>(value.category === "Shop")).map(
                        (value, index) => (
                            <div className="col-lg-3 my-3" key={index}>
                                <div className="card border-0 my-3 mainContainer">
                                    <img src={value.img} onClick={() => navigate(`/shop/${value.id}`)}
                                    alt="" className='displayImage'/>
                                    <div className="listIcons">
                                        <i className="fa-solid fa-magnifying-glass fa-lg" 
                                        data-bs-toggle = "modal" data-bs-target="#peekProduct"
                                        onClick={()=> setProductPeek(value.id)}></i>
                                        <i className="fa-solid fa-cart-shopping fa-lg"></i>
                                        <i className="fa-solid fa-heart fa-lg"></i>
                                    </div>
                                </div>
                                <div className="card-body my-3">
                                    <h2>{value.name}</h2>
                                    <h4>{value.price}</h4>
                                    <p>{value.desc}</p>
                                </div>
                            </div>)
                    )}
                </div>
            </div>


        {myProducts.filter( 
            (value) => (value.id === productPeek)).map(
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
                </div>)}
    </>
  )
}

export default ShopComponent