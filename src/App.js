import React from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/components/home_page/Home';
import Blog from './pages/components/blog/Blog';
import Product from './pages/components/product/Product';
import Faq from './pages/components/faq/Faq';
import Aboutus from './pages/components/aboutus/Aboutus';
import SignUp from './pages/components/Signup/SignUp';
import Login from './pages/components/Login/Login';
const App = () => {
  return (
    <HashRouter>
 <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/about" element={<Aboutus />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>


    </HashRouter>
  )
}

export default App