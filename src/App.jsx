import { useState } from 'react'
import { Footer, Navbar } from './Components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Cart, ProductDetails } from './Pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
