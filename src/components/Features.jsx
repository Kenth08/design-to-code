const features = [
  {
    id: 1,
    emoji: "🚚",
    title: "Free Shipping",
    description: "Free delivery on all orders over $50. Fast and reliable.",
  },
  {
    id: 2,
    emoji: "↩️",
    title: "Easy Returns",
    description: "Not happy? Return anything within 30 days, no questions asked.",
  },
  {
    id: 3,
    emoji: "🔒",
    title: "Secure Payment",
    description: "Your payment information is always encrypted and protected.",
  },
  {
    id: 4,
    emoji: "⭐",
    title: "Quality Guarantee",
    description: "Every product is checked before it ships. We stand behind what we sell.",
  },
]

function FeatureCard({ emoji, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6">
      <span className="text-4xl">{emoji}</span>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">Why Shop With Us</h2>
          <p className="text-gray-500 mt-3 text-lg">We make it easy to love what you buy</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              emoji={feature.emoji}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
