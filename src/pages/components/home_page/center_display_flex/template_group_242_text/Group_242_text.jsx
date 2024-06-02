import React from 'react'
import './grp242.css';
import curve_vector from './curve_vector.png'
const Group_242_text = () => {
  return (
    <>
      <div className="d-flex flex-column mb-3 whole_grp242 ms-5">
  <div className="p-2 ms-3">
  <h5> We’re here to Increase your Productivity</h5>
  </div>
 <img src={curve_vector} className="p-2 ms-2" alt='vect'/>

  <div className="p-3 ">
    <h6>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</h6>
  </div>
  <div className="d-flex mt-3">
  <button className='trial p-2 m-3'> Try free Trial </button>
  <button className='view_demo ms-4 text-center'><span className="material-symbols-outlined ">
play_circle </span> View Demo </button>
  </div>
  
</div>

    </>
  )
}

export default Group_242_text