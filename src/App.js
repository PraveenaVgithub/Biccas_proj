import React, { Suspense } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/components/home_page/Home';
import Blog from './pages/components/blog/Blog';
// import Product from './pages/components/product/Product';
import Faq from './pages/components/faq/Faq';
import Aboutus from './pages/components/aboutus/Aboutus';
import LoadingFallback from './Components/loadingFAllback/LoadingFallback';
// import SignUp from './pages/components/Signup/SignUp';
// import Login from './pages/components/Login/Login';
const LazyProduct = React.lazy(() => import('./pages/components/product/Product'));
const LazySignUp = React.lazy(() => import('./pages/components/Signup/SignUp'));
const LazyLogin = React.lazy(() => import('./pages/components/Login/Login'));


const App = () => {
  return (
    <HashRouter>
 <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>} />
          <Route path="/product" element={ <Suspense fallback={<LoadingFallback />}><LazyProduct /> </Suspense>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/about" element={<Aboutus />}/>
          <Route path="/signup" element={<Suspense fallback={<h2>Loading..</h2>}><LazySignUp/></Suspense>} />
          <Route path="/login"  element={<Suspense fallback={<h2>Loading..</h2>}><LazyLogin/></Suspense>} />
          
      </Routes>


    </HashRouter>
  )
}

export default App