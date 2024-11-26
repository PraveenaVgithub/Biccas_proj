import React from 'react'
import { useNavigate } from 'react-router-dom';
import'./blog.css'
const Blog = () => {
  const navigate = useNavigate()
return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center">
      <h1 className="display-4 text-danger baqtxt">Under Construction.. 👷‍♀️⚠️</h1>
      <p className="lead text-muted">We're working hard to bring you the best experience. Please check back later!</p>
      <div className="mt-4">
        <button className="faqbut" onClick={()=>{(navigate('/'))}}>Go to Homepage</button>
      </div>
    </div>
  </div>
);
}

export default Blog