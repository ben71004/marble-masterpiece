import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { Phone, MapPin, Clock, Shield, Gem, Users, Wrench, Star, ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-marble.jpg";
import marbleResidential from "@/assets/marble-residential.jpg";
import marbleCommercial from "@/assets/marble-commercial.jpg";
import marbleCutting from "@/assets/marble-cutting.jpg";
import marbleKitchen from "@/assets/marble-kitchen.jpg";
import marbleStairs from "@/assets/marble-stairs.jpg";
import marbleMedallion from "@/assets/marble-medallion.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const whyChooseUs = [
  { icon: Gem, title: "Quality Materials", description: "We source only the finest marble from top quarries worldwide." },
  { icon: Users, title: "Experienced Workmanship", description: "Decades of expertise in marble cutting, finishing, and installation." },
  { icon: Wrench, title: "Custom Solutions", description: "Bespoke marble designs tailored to your residential or commercial project." },
  { icon: Shield, title: "Reliable Service", description: "On-time delivery and installation with guaranteed satisfaction." },
];

const services = [
  { title: "Marble Trading", image: marbleCommercial, description: "Premium marble slabs and tiles sourced globally." },
  { title: "Cutting & Finishing", image: marbleCutting, description: "Precision cutting and expert finishing services." },
  { title: "Installation", image: marbleResidential, description: "Professional marble installation for any space." },
  { title: "Custom Projects", image: marbleMedallion, description: "Bespoke marble designs and decorative inlays." },
];

const galleryImages = [
  { src: marbleKitchen, alt: "Marble kitchen countertop" },
  { src: marbleStairs, alt: "Marble staircase" },
  { src: marbleCommercial, alt: "Commercial marble lobby" },
  { src: marbleMedallion, alt: "Marble floor medallion" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Monaco Marble Trading showroom"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block text-xs font-body font-semibold tracking-[0.4em] uppercase text-accent mb-6">
              Sharjah, UAE
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-5xl mx-auto">
              Premium Marble Trading & Installation Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
              Supplying and installing the world's finest marble for residential and commercial projects across the UAE.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:065350588">
                  <Phone className="h-4 w-4 mr-2" /> Call Now
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">Welcome</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Monaco Marble Trading LLC</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Based in Sharjah's Industrial Area, Monaco Marble Trading LLC is a premier marble contractor and trading company
              serving clients across the UAE. With years of industry expertise, we provide end-to-end marble solutions — from sourcing
              and supply to precision cutting, finishing, and professional installation. Our commitment to quality materials
              and exceptional craftsmanship has made us a trusted partner for both residential and commercial projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-marble-bg">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Craftsmanship You Can Trust"
            description="We combine premium materials with expert workmanship to deliver marble solutions that exceed expectations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-lg text-center group hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Services"
            title="Complete Marble Solutions"
            description="From marble supply to bespoke installations, we cover every aspect of your project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="gold" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-marble-bg">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Work"
            title="Featured Projects"
            description="A glimpse of our finest marble installations across the UAE."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-lg aspect-square group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
          />
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-6 w-6 ${i < 3 ? "text-accent fill-accent" : "text-border"}`} />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">3.1/5</span>
            <span className="text-muted-foreground text-sm ml-1">(12 reviews)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground italic mb-4">"Quality & experience"</p>
              <p className="text-sm font-semibold text-foreground">— Ahmed W.</p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground italic mb-4">"Good selection of marble varieties. Reasonable pricing for the area."</p>
              <p className="text-sm font-semibold text-foreground">— Satisfied Customer</p>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-primary py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Phone className="h-5 w-5 text-accent" />
              <a href="tel:065350588" className="text-lg font-semibold text-primary-foreground">06 535 0588</a>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Industrial Area 15, Sharjah</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Clock className="h-5 w-5 text-accent" />
              <span>Open · Closes 9:00 PM</span>
            </div>
          </div>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
