import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl mb-3 uppercase">Bici nos Planos MS</h3>
            <p className="text-neutral-300 text-sm">
              Coletivo de cicloativismo do Mato Grosso do Sul
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/quemsomos" className="text-neutral-300 hover:text-primary-300 transition text-sm">
                Quem Somos
              </Link>
              <Link to="/blog" className="text-neutral-300 hover:text-primary-300 transition text-sm">
                Blog
              </Link>
              <Link to="/timeline" className="text-neutral-300 hover:text-primary-300 transition text-sm">
                Linha do Tempo
              </Link>
              <Link to="/galeria" className="text-neutral-300 hover:text-primary-300 transition text-sm">
                Galeria
              </Link>
              <Link to="/eventos" className="text-neutral-300 hover:text-primary-300 transition text-sm">
                Eventos
              </Link>
              <Link to="/contato" className="text-neutral-300 hover:text-primary-300 transition text-sm">
                Contato
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Outros</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/identidade" className="text-neutral-300 hover:text-primary-300 transition">
                Identidade Visual
              </Link>
              <Link to="/teste" className="text-neutral-300 hover:text-primary-300 transition">
                Página de Teste
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Contato</h4>
            <p className="text-neutral-300 text-sm mb-3">
              Entre em contato e participe do movimento pela mobilidade ativa no MS.
            </p>
            <Link to="/contato" className="text-neutral-300 hover:text-primary-300 transition text-sm underline">
              Fale conosco
            </Link>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-6 pt-6 text-center text-xs text-neutral-400">
          <p>© 2026 Bici nos Planos MS - Coletivo de Cicloativismo do MS</p>
        </div>
      </div>
    </footer>
  );
}
