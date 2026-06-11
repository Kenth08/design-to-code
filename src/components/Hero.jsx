function Hero() {
  return (
    
    <section id="home"className="min-h-screen bg-background flex items-center">
      <div className="max-w-6xl mx-auto px-6 gridgrid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            New Collection 2025
          </span>
          <h1 className="text-4xl md:text-6xlfont-bold text-foreground leading-tight">
            Style That Speaks For Itself
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Discover premium products crafted for the modern lifestyle. 
            Quality you can feel, style you can trust.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Shop Now
            </button>
            <a href="#" className="text-foreground font-medium underline underline-offset-4">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Image placeholder */}
        <div className="bg-gray-100 rounded-3xl h-[500px] flex items-center justify-center">
          <span className="text-gray-400 text-sm">Product Image</span>
        </div>

      </div>
    </section>
  )
}

export default Hero
