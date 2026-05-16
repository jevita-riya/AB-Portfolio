import photo1 from "../assets/img3.jpg";
import photo2 from "../assets/img2.jpg";
import photo3 from "../assets/img1.jpg";
import photo4 from "../assets/img6.jpg";
import photo5 from "../assets/img5.jpg";
import photo6 from "../assets/img4.jpg";
import photo7 from "../assets/img8.jpg";
import photo8 from "../assets/img7.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    image: photo1,
    title: "Suspended",
    year: "2023",
  },
  {
    image: photo2,
    title: "Last Booth",
    year: "2024",
  },
  {
    image: photo3,
    title: "Silent Light",
    year: "2025",
  },
  {
    image: photo4,
    title: "Concrete & Gold",
    year: "2025",
  },
  {
    image: photo5,
    title: "Through the Pines",
    year: "2025",
  },
  {
    image: photo6,
    title: "Tools of the Trade",
    year: "2025",
  },
  {
    image: photo7,
    title: "Suspended",
    year: "2025",
  },
  {
    image: photo8,
    title: "Last Booth",
    year: "2025",
  },
];

function Gallery() {
  return (
    <section id="work" className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="uppercase tracking-[5px] text-sm text-[#d4a74f]">
            Selected Work
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-112.5 sm:h-125 md:h-137.5 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Content */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="font-serif italic text-2xl text-white">
                  {project.title}
                </h2>

                <p className="text-white/50 text-sm">{project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
