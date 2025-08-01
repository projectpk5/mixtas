import React from 'react'
import { myTeam } from '../../assets/assets'
const Team = () => {
  return (
      <>
      <br /><br />
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
                <h1 className='display-4'>Meet Our Team</h1>
                
            </div>
          </div>
          <br /><br />
          <div className="row">

            {myTeam.map( (value,index) => (
              <div className="col-lg-3" key={index}>
                <div className="card">
                  <img src={value.pic} alt="" />
                </div>
                <div className="card-body">
                  <h3>{value.name}</h3>
                  <h6>{value.job}</h6>
                </div>
              </div>
            ) )}
          </div>
          <br /><br />
        </div>
      </>
  )
}

export default Team