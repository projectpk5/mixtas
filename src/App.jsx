import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Product from './pages/Product'
import FAQ from './pages/FAQ'
import Error from './pages/Error'

const App = () => {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/about" element = {<About />} />
              <Route path = "/contact" element = {<Contact />} />
              <Route path = "/shop" element = {<Shop />} />
              <Route path = "*" element = {<Error />} />
              <Route path = "/shop/:id" element = {<Product />} />
            <Route path = "/faq" element = {<FAQ />} />
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App