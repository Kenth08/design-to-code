const products = [
  { id: 1, name: "Premium Sneakers", category: "Footwear", price: "$120.00" },
  { id: 2, name: "Leather Jacket", category: "Outerwear", price: "$280.00" },
  { id: 3, name: "Classic Watch", category: "Accessories", price: "$195.00" },
  { id: 4, name: "Slim Chinos", category: "Bottoms", price: "$85.00" },
  { id: 5, name: "Linen Shirt", category: "Tops", price: "$65.00" },
  { id: 6, name: "Canvas Bag", category: "Bags", price: "$110.00" },
  { id: 7, name: "Wool Sweater", category: "Tops", price: "$145.00" },
  { id: 8, name: "Running Cap", category: "Accessories", price: "$45.00" },
]

function ProductCard({ name, category, price }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="bg-gray-100 h-56 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <span className="text-gray-400 text-sm">Image</span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <span className="text-primary text-xs font-medium uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-semibold text-foreground">{name}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-foreground font-bold">{price}</span>
          <button className="bg-primary text-white text-xs font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}


function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">Our Products</h2>
          <p className="text-gray-500 mt-3 text-lg">Find something you'll love</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products
