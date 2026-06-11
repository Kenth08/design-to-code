import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Products from './components/Products'
import Features from './components/Features'

function App() {
  return (
  <div className="pt-16">

      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
    
  )
}

export default App
