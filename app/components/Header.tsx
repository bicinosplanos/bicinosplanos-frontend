import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (location.pathname === '/links') return null;

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

  const logoImgClass = isHome
    ? `h-12 w-12 transition-all duration-700 relative z-10 ${
        scrolled || mobileMenuOpen ? "translate-x-0" : "translate-x-8"
      }`
    : "h-12 w-12 relative z-10";

  const logoTextClass = isHome
    ? `font-heading text-xl sm:text-2xl uppercase text-white transition-all duration-700 relative z-0 ${
        scrolled || mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
      }`
    : "font-heading text-xl sm:text-2xl uppercase text-white relative z-0";

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className={logoClass}>
              <img src="/logo-simplify-sm.png" alt="Bici nos Planos MS" className={logoImgClass} style={{ filter: 'drop-shadow(4px 4px 2px rgba(0,0,0,0.2))' }} />
              <span className={logoTextClass}>Bici nos Planos <span className="font-body font-thin">MS</span></span>
            </Link>
            
            <nav className="hidden md:flex gap-6">
              <Link to="/quemsomos" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/quemsomos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
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
              <Link to="/doe" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/doe' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
                Doe
              </Link>
              <Link to="/contato" className={`font-heading uppercase text-white hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/contato' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
                Contato
              </Link>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white z-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`md:hidden fixed inset-0 bg-primary-600/80 backdrop-blur-md z-40 transition-all duration-500 ${
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <nav className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-500 delay-100 ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}>
          <Link
            to="/quemsomos"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/quemsomos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Quem Somos
          </Link>
          <Link
            to="/timeline"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/timeline' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Linha do Tempo
          </Link>
          <Link
            to="/eventos"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/eventos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Eventos
          </Link>
          <Link
            to="/blog"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/blog' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/galeria"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/galeria' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Galeria
          </Link>
          <Link
            to="/doe"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/doe' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Doe
          </Link>
          <Link
            to="/contato"
            className={`font-heading uppercase text-white text-2xl hover:text-secondary-300 transition tracking-wider ${location.pathname === '/contato' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </Link>
        </nav>
      </div>
    </>
  );
}
