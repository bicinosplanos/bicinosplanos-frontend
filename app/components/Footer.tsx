import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl mb-4 uppercase">Bici nos Planos MS</h3>
            <p className="text-neutral-300 text-sm">
              Coletivo de cicloativismo do Mato Grosso do Sul
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/quem-somos" className="text-neutral-300 hover:text-primary-300 transition">
                Quem Somos
              </Link>
              <Link to="/timeline" className="text-neutral-300 hover:text-primary-300 transition">
                Linha do Tempo
              </Link>
              <Link to="/eventos" className="text-neutral-300 hover:text-primary-300 transition">
                Eventos
              </Link>
              <Link to="/blog" className="text-neutral-300 hover:text-primary-300 transition">
                Blog
              </Link>
              <Link to="/identidade" className="text-neutral-300 hover:text-primary-300 transition">
                Identidade Visual
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-neutral-300 text-sm">
              Entre em contato e participe do movimento pela mobilidade ativa no MS.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>© 2024 Bici nos Planos MS - Coletivo de Cicloativismo do MS</p>
        </div>
      </div>
    </footer>
  );
}
