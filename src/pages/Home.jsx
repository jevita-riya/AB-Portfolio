import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <Hero />

      <Gallery />

      <Footer />

    </main>
  )
}

export default Home