function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="text-xl font-bold text-foreground">
          YourStore
        </span>

        {/* Nav Links */}
        <ul className="flex items-center gap-8 list-none">
          <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Home</a></li>
          <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Products</a></li>
          <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a></li>
        </ul>

        {/* Cart Button */}
        <button className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-full">
          Cart (0)
        </button>

      </div>
    </nav>
  )
}

export default Navbar
