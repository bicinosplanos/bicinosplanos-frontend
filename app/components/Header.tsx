import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerClass = isHome
    ? `fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-primary-600 shadow-lg" : "bg-transparent"
      }`
    : "bg-primary-600 text-white sticky top-0 z-50 shadow-md";

  const logoClass = isHome
    ? `flex items-center gap-3 transition-opacity duration-500 ${
        scrolled || mobileMenuOpen ? "opacity-100" : "opacity-0"
      }`
    : "flex items-center gap-3";

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className={logoClass}>
            <img src="/logo.png" alt="Bici nos Planos MS" className="h-12 w-12" />
            <span className="font-heading text-xl sm:text-2xl uppercase text-white">Bici nos Planos <span className="font-body font-thin">MS</span></span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/quem-somos" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/quem-somos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Quem Somos
            </Link>
            <Link to="/timeline" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/timeline' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Linha do Tempo
            </Link>
            <Link to="/eventos" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/eventos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Eventos
            </Link>
            <Link to="/blog" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/blog' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Blog
            </Link>
            <Link to="/galeria" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/galeria' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Galeria
            </Link>
            <Link to="/contato" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/contato' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Contato
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/quem-somos"
              className={`font-heading uppercase text-white hover:text-secondary-300 transition tracking-wider ${location.pathname === '/quem-somos' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              to="/timeline"
              className={`font-heading uppercase text-white hover:text-secondary-300 transition tracking-wider ${location.pathname === '/timeline' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Linha do Tempo
            </Link>
            <Link
              to="/eventos"
              className={`font-heading uppercase text-white hover:text-secondary-300 transition tracking-wider ${location.pathname === '/eventos' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              to="/blog"
              className={`font-heading uppercase text-white hover:text-secondary-300 transition tracking-wider ${location.pathname === '/blog' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/galeria"
              className={`font-heading uppercase text-white hover:text-secondary-300 transition tracking-wider ${location.pathname === '/galeria' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link
              to="/contato"
              className={`font-heading uppercase text-white hover:text-secondary-300 transition tracking-wider ${location.pathname === '/contato' ? 'text-secondary-400' : ''}`}
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
