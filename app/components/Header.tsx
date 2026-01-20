import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Bici nos Planos MS" className="h-12 w-12" />
            <span className="font-heading text-xl sm:text-2xl uppercase">Bici nos Planos <span className="font-body font-thin">MS</span></span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/quem-somos" className={`font-heading uppercase hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/quem-somos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Quem Somos
            </Link>
            <Link to="/timeline" className={`font-heading uppercase hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/timeline' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Linha do Tempo
            </Link>
            <Link to="/eventos" className={`font-heading uppercase hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/eventos' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Eventos
            </Link>
            <Link to="/blog" className={`font-heading uppercase hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/blog' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Blog
            </Link>
            <Link to="/contato" className={`font-heading uppercase hover:text-secondary-300 transition text-sm tracking-wider ${location.pathname === '/contato' ? 'text-secondary-400 border-b-2 border-secondary-400' : ''}`}>
              Contato
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/quem-somos"
              className={`font-heading uppercase hover:text-secondary-300 transition tracking-wider ${location.pathname === '/quem-somos' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              to="/timeline"
              className={`font-heading uppercase hover:text-secondary-300 transition tracking-wider ${location.pathname === '/timeline' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Linha do Tempo
            </Link>
            <Link
              to="/eventos"
              className={`font-heading uppercase hover:text-secondary-300 transition tracking-wider ${location.pathname === '/eventos' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              to="/blog"
              className={`font-heading uppercase hover:text-secondary-300 transition tracking-wider ${location.pathname === '/blog' ? 'text-secondary-400' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contato"
              className={`font-heading uppercase hover:text-secondary-300 transition tracking-wider ${location.pathname === '/contato' ? 'text-secondary-400' : ''}`}
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
