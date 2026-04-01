import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

import marbleResidential from "@/assets/marble-residential.jpg";
import marbleCommercial from "@/assets/marble-commercial.jpg";
import marbleCutting from "@/assets/marble-cutting.jpg";
import marbleKitchen from "@/assets/marble-kitchen.jpg";
import marbleStairs from "@/assets/marble-stairs.jpg";
import marbleMedallion from "@/assets/marble-medallion.jpg";
import heroMarble from "@/assets/hero-marble.jpg";
import marbleTexture from "@/assets/marble-texture.jpg";

const categories = ["All", "Residential", "Commercial", "Custom", "Showroom"];

const galleryItems = [
  { src: marbleKitchen, alt: "Luxury marble kitchen countertop", category: "Residential" },
  { src: marbleCommercial, alt: "Commercial lobby marble installation", category: "Commercial" },
  { src: marbleStairs, alt: "Grand marble staircase", category: "Residential" },
  { src: marbleMedallion, alt: "Custom marble floor medallion", category: "Custom" },
  { src: marbleResidential, alt: "Marble bathroom design", category: "Residential" },
  { src: heroMarble, alt: "Marble showroom display", category: "Showroom" },
  { src: marbleCutting, alt: "Marble fabrication workshop", category: "Showroom" },
  { src: marbleTexture, alt: "Calacatta marble slab", category: "Commercial" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={marbleStairs} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-accent mb-4 block">Portfolio</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Our Gallery</h1>
          </motion.div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Projects"
            title="Our Finest Marble Work"
            description="Browse our portfolio of completed marble installations across the UAE."
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src + item.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer overflow-hidden rounded-lg aspect-square"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
