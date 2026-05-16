import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-5">
        {/* Hero Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-[40vh] flex flex-col items-center justify-center text-center"
        >
          {" "}
          {/* Main Heading */}
          <h1 className="font-serif leading-none flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Selected
            </span>

            <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl italic text-[#d4a74f] font-light">
              frames
            </span>
          </h1>
          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
            Photographs by{" "}
            <span className="text-white font-medium">Ashlie Baretto</span> —
            capturing quiet moments, cinematic light, and timeless visual
            stories through an editorial lens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
