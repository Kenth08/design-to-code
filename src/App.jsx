import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => setCartCount(cartCount + 1)

  return (
    <div className="pt-16">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Categories />
        <Products addToCart={addToCart} />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
