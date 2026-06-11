function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-4 gap-8">

          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">YourStore</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium products for the modern lifestyle.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Shop</h4>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">All Products</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">New Arrivals</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Sale</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Support</h4>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">FAQs</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Shipping Info</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Follow Us</h4>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Facebook</a>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2025 YourStore. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
