function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
        <p className="text-gray-500 mt-3 text-lg mb-12">
          Have a question? We'd love to hear from you.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary resize-none"
          />
          <button className="bg-primary text-white font-medium py-3 rounded-full hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
