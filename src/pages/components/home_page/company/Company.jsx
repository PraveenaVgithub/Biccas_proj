import React from 'react';
import './company.css';
import company_data from './company_data';
const Company = () => {
  return (
<>
<div className="d-flex flex-column  m-auto mb-5 mt-5 whole_company">
  <div className="p-2"><h2>More than 25,000 teams use Collabs</h2></div>
  <div className="p-2 d-flex justify-content-evenly mt-4  ">

   {company_data.map((curdata)=>{
        return( 
            <div className='d-flex  '  key={curdata.id}>
                <img src={curdata.logo} width='40px'alt='imag'/>
                <p className='logoname m-1'>{curdata.Name}</p>
            </div>
    );
    })}

  </div>
 
</div>

</>
  )
}

export default Company