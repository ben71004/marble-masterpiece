import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import UserMenu from "./UserMenu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-foreground">
            MONACO
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Marble Trading
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:065350588" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            06 535 0588
          </a>
          <UserMenu />
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium tracking-wide py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:065350588" className="flex items-center gap-2 text-muted-foreground mt-2">
                <Phone className="h-4 w-4" />
                06 535 0588
              </a>
              <Button variant="gold" asChild className="mt-2">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
