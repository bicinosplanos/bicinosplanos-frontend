import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-primary-600 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className={`flex items-center gap-3 transition-opacity duration-500 ${
              scrolled || mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src="/logo.png" alt="Bici nos Planos MS" className="h-12 w-12" />
            <span className="font-heading text-2xl uppercase text-white">Bici nos Planos <span className="font-body font-thin text-2xl">MS</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            <Link
              to="/quem-somos"
              className="text-white hover:text-secondary-300 transition font-bold"
            >
              Quem Somos
            </Link>
            <Link
              to="/timeline"
              className="text-white hover:text-secondary-300 transition font-bold"
            >
              Linha do Tempo
            </Link>
            <Link
              to="/eventos"
              className="text-white hover:text-secondary-300 transition font-bold"
            >
              Eventos
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-secondary-300 transition font-bold"
            >
              Blog
            </Link>
            <Link
              to="/contato"
              className="text-white hover:text-secondary-300 transition font-bold"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/quem-somos"
              className="text-white hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              to="/timeline"
              className="text-white hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Linha do Tempo
            </Link>
            <Link
              to="/eventos"
              className="text-white hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contato"
              className="text-white hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
