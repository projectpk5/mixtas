import React from 'react'

const TopBanner = () => {
  return (
    <>
     <div className="container">
      <div className="row g-2">

            <div className="col-lg-10 d-md-block d-none">
              <p><small>We ship to all over the world</small></p>
            </div>

            <div className="col-lg-1 col-md-1 col-sm-1">
              <div className="dropdown">
                <button className="btn btn-white btn-sm dropdown-toggle"  data-bs-toggle="dropdown">
                  Language
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">English</li>
                  <li className="dropdown-item">German</li>
                  <li className="dropdown-item">Japanese</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-1 col-md-1 col-sm-1">
                <div className="dropdown">
                  <button className="btn btn-white btn-sm dropdown-toggle"  data-bs-toggle="dropdown">
                    Currency
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">USD</li>
                    <li className="dropdown-item">AUD</li>
                    <li className="dropdown-item">EUR</li>
                  </ul>
                </div>
              </div>
        

        </div>
      </div>
     <hr />
    </>
  )
}

export default TopBanner