import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Star, Quote } from "lucide-react";

import marbleTexture from "@/assets/marble-texture.jpg";

const reviews = [
  {
    name: "Ahmed W.",
    rating: 5,
    text: "Quality & experience. Monaco Marble delivered exactly what we needed for our villa project. The installation team was professional and the finish is flawless.",
    date: "2 months ago",
  },
  {
    name: "Sarah K.",
    rating: 4,
    text: "Good selection of marble varieties and reasonable pricing. The team was helpful in choosing the right marble for our commercial lobby renovation.",
    date: "3 months ago",
  },
  {
    name: "Marc Chahwan",
    rating: 1,
    text: "After 1 month of chasing this company, I got unmatched tiles with horrible finishes. I would stay away...",
    date: "5 months ago",
  },
  {
    name: "Khalid A.",
    rating: 5,
    text: "Excellent marble quality and professional installation. Our hotel lobby looks stunning. Would highly recommend for commercial projects.",
    date: "1 month ago",
  },
  {
    name: "Fatima R.",
    rating: 4,
    text: "Beautiful marble work in our kitchen and bathrooms. The team was punctual and clean. Minor delays but overall satisfied with the result.",
    date: "4 months ago",
  },
  {
    name: "Hassan M.",
    rating: 3,
    text: "Decent quality marble at competitive prices. Communication could be improved but the final work was acceptable.",
    date: "6 months ago",
  },
];

const Reviews = () => {
  const avgRating = 3.1;
  const totalReviews = 12;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={marbleTexture} alt="Reviews" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-accent mb-4 block">Testimonials</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Client Reviews</h1>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl font-display font-bold text-foreground mb-2">{avgRating}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < Math.round(avgRating) ? "text-accent fill-accent" : "text-border"}`} />
              ))}
            </div>
            <p className="text-muted-foreground">Based on {totalReviews} reviews</p>
          </motion.div>

          <SectionHeading subtitle="Reviews" title="What People Are Saying" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 relative"
              >
                <Quote className="h-8 w-8 text-accent/20 absolute top-4 right-4" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < review.rating ? "text-accent fill-accent" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
