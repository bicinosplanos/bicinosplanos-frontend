import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Bici nos Planos MS" className="h-12 w-12" />
            <span className="font-heading text-xl sm:text-2xl uppercase">Bici nos Planos <span className="font-body font-thin">MS</span></span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/quem-somos" className="hover:text-secondary-300 transition font-bold">
              Quem Somos
            </Link>
            <Link to="/timeline" className="hover:text-secondary-300 transition font-bold">
              Linha do Tempo
            </Link>
            <Link to="/eventos" className="hover:text-secondary-300 transition font-bold">
              Eventos
            </Link>
            <Link to="/blog" className="hover:text-secondary-300 transition font-bold">
              Blog
            </Link>
            <Link to="/contato" className="hover:text-secondary-300 transition font-bold">
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
              className="hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              to="/timeline"
              className="hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Linha do Tempo
            </Link>
            <Link
              to="/eventos"
              className="hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              to="/blog"
              className="hover:text-secondary-300 transition font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contato"
              className="hover:text-secondary-300 transition font-bold"
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
