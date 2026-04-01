import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">MONACO</h3>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 text-primary-foreground/60">Marble Trading LLC</p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium marble trading, supply, and installation solutions for residential and commercial projects across the UAE.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Reviews", path: "/reviews" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Marble Trading</li>
              <li>Marble Supply</li>
              <li>Cutting & Finishing</li>
              <li>Installation</li>
              <li>Custom Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                Industrial Area 15, Sharjah, UAE
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:065350588" className="hover:text-accent transition-colors">06 535 0588</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                Open · Closes 9:00 PM
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                info@monacomarble.ae
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Monaco Marble Trading LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
