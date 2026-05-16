import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-white/10 relative">

      <nav className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-light tracking-wide z-50">

          <span className="text-[#d4a74f] italic font-serif">
            Ashlie
          </span>{" "}

          <span className="font-serif">
            Baretto
          </span>

        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[4px]">

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

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50"
        >

          {
            menuOpen
              ? <X size={28} />
              : <Menu size={28} />
          }

        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          fixed
          top-0
          right-0
          w-full
          h-screen
          bg-[#050505]
          flex
          flex-col
          items-center
          justify-center
          gap-10
          text-2xl
          uppercase
          tracking-[6px]
          transition-all
          duration-500
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        <a
          href="#work"
          onClick={() => setMenuOpen(false)}
          className="text-[#d4a74f]"
        >
          Work
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-white/70"
        >
          Contact
        </a>

      </div>

    </header>
  )
}

export default Navbar