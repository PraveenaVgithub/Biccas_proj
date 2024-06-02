import React from 'react'
import {useNavigate } from 'react-router-dom';
import './backarrow.css'



const Backarrow = () => {
   const navigate= useNavigate() ;
      
  return (
    
        <div>
       <button className="iconi" onClick={()=>{navigate(-1)}}><span className="material-symbols-outlined">arrow_back</span></button>
        </div>
      );
    
    
  
}

export default Backarrow;