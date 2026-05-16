function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-white/10 mt-20"
    >

      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[4px] text-sm text-[#d4a74f] mb-4">
              Contact
            </p>

            <h2 className="font-serif text-4xl md:text-6xl italic leading-tight">
              Let’s create
              <br />
              something timeless.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-4 text-sm md:text-base">

            <a
              href="mailto:ashlie@example.com"
              className="block text-white/70 hover:text-white transition"
            >
              ashlie@gmail.com
            </a>

            <a
              href="#"
              className="block text-white/70 hover:text-white transition"
            >
              Instagram
            </a>

            

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">

          <p>
            © 2026 Ashlie Baretto
          </p>

          <p>
            Designed with elegance.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer