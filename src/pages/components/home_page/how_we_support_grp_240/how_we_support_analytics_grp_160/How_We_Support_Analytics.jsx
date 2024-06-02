import React from 'react';
import './analytics_grp_160.css';
import data_160 from './analytics_160';
const How_We_Support_Analytics = () => {
    return(
        <>
<div>
<div className='d-flex flex-column mt-5 '>

  {data_160.map((curdta, index) => {
    return (
      <div className='row justify-content-between w-50' key={index}>
        <div className='col-6'>
         <img src={curdta.imag} alt='imaig'/>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-column heading'>
            <h4>{curdta.head}</h4>
            <p>{curdta.para}</p>
          </div>
        </div>
      </div>
    );
  })}
</div>
</div>
</>
 )
}

export default How_We_Support_Analytics