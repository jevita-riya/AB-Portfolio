function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      
      <nav className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-light tracking-wide">
          <span className="text-[#d4a74f] italic font-serif">
            Ashlie
          </span>{" "}
          <span className="font-serif">
            Baretto
          </span>
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm md:text-base uppercase tracking-[4px]">
          <a
            href="#work"
            className="text-[#d4a74f] hover:opacity-80 transition"
          >
            Work
          </a>

          <a
            href="#contact"
            className="text-white/70 hover:text-white transition"
          >
            Contact
          </a>
        </div>

      </nav>

    </header>
  )
}

export default Navbar