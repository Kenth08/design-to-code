const categories = [
  { id: 1, name: "Footwear", emoji: "👟", count: "24 items" },
  { id: 2, name: "Outerwear", emoji: "🧥", count: "18 items" },
  { id: 3, name: "Accessories", emoji: "⌚", count: "32 items" },
  { id: 4, name: "Tops", emoji: "👕", count: "45 items" },
  { id: 5, name: "Bottoms", emoji: "👖", count: "28 items" },
  { id: 6, name: "Bags", emoji: "👜", count: "15 items" },
]

function CategoryCard({ name, emoji, count }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:shadow-md transition-shadow border border-gray-100">
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-semibold text-foreground">{name}</h3>
      <span className="text-gray-400 text-sm">{count}</span>
    </div>
  )
}

function Categories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">Shop by Category</h2>
          <p className="text-gray-500 mt-3 text-lg">Browse our collections</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              name={cat.name}
              emoji={cat.emoji}
              count={cat.count}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Categories
