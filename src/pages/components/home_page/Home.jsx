import React from 'react';

import './home.css';
// import Maincardd from './template_group138/maincard/Maincardd'
import Navbar from '../Navbar/Navbar';
import Center_display_group243 from './center_display_flex/Center_display_group243';
import Company from './company/Company';
import How_We_Support from './how_we_support_grp_240/How_We_Support';
import Our_Features from './OurFeatures/Our_Features';

const Home = () => {
  return (
    <>
<div className='wholehome '>

<Navbar/>
<Center_display_group243/>
<Company/>
<How_We_Support/>
<Our_Features/>
 </div>
  
    </>
  )
}

export default Home