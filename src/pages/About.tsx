import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Shield, Gem, Target, Award } from "lucide-react";

import marbleTexture from "@/assets/marble-texture.jpg";
import marbleCommercial from "@/assets/marble-commercial.jpg";

const values = [
  { icon: Gem, title: "Premium Quality", description: "We source only the finest marble from renowned quarries to ensure lasting beauty and durability." },
  { icon: Shield, title: "Integrity", description: "Honest pricing, transparent communication, and reliable delivery on every project." },
  { icon: Target, title: "Precision", description: "Expert craftsmanship with meticulous attention to detail in every cut and installation." },
  { icon: Award, title: "Excellence", description: "We strive to exceed expectations and deliver results that stand the test of time." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={marbleTexture} alt="Marble texture" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-accent mb-4 block">Our Story</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Marble Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Monaco Marble Trading LLC is a Sharjah-based marble contractor and trading company specializing in the supply,
                  fabrication, and installation of premium marble and natural stone. Located in Industrial Area 15, we serve
                  clients across the UAE with a comprehensive range of marble solutions.
                </p>
                <p>
                  With years of experience in the marble industry, our team combines traditional craftsmanship with modern
                  technology to deliver exceptional results. From sourcing the finest marble slabs worldwide to precision
                  cutting and expert installation, we handle every aspect of your project with care and professionalism.
                </p>
                <p>
                  Our portfolio spans residential villas, commercial towers, hospitality venues, and bespoke architectural
                  projects — each completed to the highest standards of quality and finishing.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={marbleCommercial} alt="Monaco marble project" loading="lazy" className="rounded-lg shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-marble-bg">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforming Spaces with Natural Stone
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to provide the UAE market with world-class marble products and installation services,
              combining the finest natural materials with expert craftsmanship. We are dedicated to transforming
              residential and commercial spaces into timeless works of art through the beauty of marble.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading subtitle="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
