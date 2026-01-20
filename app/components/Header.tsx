import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-primary-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Bici nos Planos MS" className="h-12 w-12" />
            <span className="font-heading text-2xl uppercase">Bici nos Planos MS</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/quem-somos" className="hover:text-secondary-300 transition">
              Quem Somos
            </Link>
            <Link to="/timeline" className="hover:text-secondary-300 transition">
              Linha do Tempo
            </Link>
            <Link to="/eventos" className="hover:text-secondary-300 transition">
              Eventos
            </Link>
            <Link to="/blog" className="hover:text-secondary-300 transition">
              Blog
            </Link>
            <Link to="/contato" className="hover:text-secondary-300 transition">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
