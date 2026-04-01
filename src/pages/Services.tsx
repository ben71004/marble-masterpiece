import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";

import marbleTexture from "@/assets/marble-texture.jpg";
import marbleResidential from "@/assets/marble-residential.jpg";
import marbleCommercial from "@/assets/marble-commercial.jpg";
import marbleCutting from "@/assets/marble-cutting.jpg";
import marbleKitchen from "@/assets/marble-kitchen.jpg";
import marbleStairs from "@/assets/marble-stairs.jpg";
import marbleMedallion from "@/assets/marble-medallion.jpg";
import heroMarble from "@/assets/hero-marble.jpg";

const services = [
  {
    title: "Marble Trading",
    description: "We source and trade premium marble from the world's finest quarries. Our extensive network ensures access to a wide selection of marble types, colors, and finishes to suit any project requirement.",
    image: heroMarble,
  },
  {
    title: "Marble Supply",
    description: "Reliable supply of marble slabs, tiles, and blocks in various dimensions. We maintain large inventories and work with trusted quarries to ensure consistent quality and timely delivery.",
    image: marbleCommercial,
  },
  {
    title: "Cutting & Finishing",
    description: "State-of-the-art cutting and finishing services for precise dimensions and flawless surfaces. From polished to honed, brushed to sandblasted — we achieve the exact finish your project demands.",
    image: marbleCutting,
  },
  {
    title: "Marble Installation",
    description: "Professional marble installation by experienced craftsmen. We handle flooring, wall cladding, countertops, staircases, and more — ensuring perfect alignment, grouting, and sealing.",
    image: marbleStairs,
  },
  {
    title: "Residential Marble Works",
    description: "Transform your home with elegant marble solutions. From bathroom vanities to kitchen countertops, living room flooring to entrance foyers — we bring luxury into every room.",
    image: marbleResidential,
  },
  {
    title: "Commercial Marble Works",
    description: "Large-scale marble installations for hotels, offices, malls, and commercial towers. We manage complex projects with precision, meeting tight deadlines without compromising quality.",
    image: marbleKitchen,
  },
  {
    title: "Custom Marble Projects",
    description: "Bespoke marble designs including medallions, inlays, mosaics, and sculptural elements. Our artisans create unique pieces that become the centerpiece of any space.",
    image: marbleMedallion,
  },
  {
    title: "Maintenance & Polishing",
    description: "Professional marble care services to restore and maintain the natural beauty of your marble surfaces. We offer cleaning, polishing, sealing, and crack repair to keep your marble looking pristine.",
    image: marbleTexture,
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={marbleCutting} alt="Marble services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-accent mb-4 block">What We Do</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Our Services</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Comprehensive marble solutions from trading to installation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Services"
            title="End-to-End Marble Solutions"
            description="From sourcing the finest marble to expert installation, we handle every aspect of your project."
          />
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Button variant="gold" asChild>
                    <Link to="/contact">
                      Request a Quote <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
