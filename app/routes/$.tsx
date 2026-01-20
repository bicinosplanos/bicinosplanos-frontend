import type { MetaFunction } from "react-router";
import { Link, useLocation } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Página não encontrada - Bici nos Planos MS" },
    { name: "description", content: "A página que você procura não existe. Volte para a página inicial ou explore nosso site." },
    
    // Open Graph
    { property: "og:title", content: "Página não encontrada - Bici nos Planos MS" },
    { property: "og:description", content: "A página que você procura não existe. Volte para a página inicial ou explore nosso site." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Página não encontrada - Bici nos Planos MS" },
    { name: "twitter:description", content: "A página que você procura não existe. Volte para a página inicial ou explore nosso site." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.png" alt="Bici nos Planos MS" className="h-20 w-20 mx-auto" />
        </div>

        {/* 404 */}
        <h1 className="font-heading text-7xl md:text-8xl uppercase text-primary-600 mb-3">
          404
        </h1>

        {/* Mensagem */}
        <h2 className="font-heading text-xl md:text-2xl uppercase text-neutral-900 mb-2">
          Página não encontrada
        </h2>
        <p className="font-body text-sm text-neutral-400 mb-5">
          <code className="font-mono">{location.pathname}</code>
        </p>
        <p className="font-body text-base text-neutral-600 mb-7">
          Ops! Parece que você pedalou para um caminho que não existe. 
          Vamos te ajudar a voltar para a rota certa.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            to="/"
            className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white px-6 py-3 rounded-lg font-bold transition cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Voltar para Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-neutral-50 active:bg-neutral-100 text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-bold transition cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>

        {/* Links úteis */}
        <div className="bg-white p-6 rounded-lg border-2 border-neutral-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-5 h-5 text-primary-600" />
            <h3 className="font-heading text-xl uppercase text-neutral-900">
              Páginas úteis
            </h3>
          </div>
          <nav className="flex flex-wrap gap-4 justify-center">
            <Link to="/quem-somos" className="text-primary-600 hover:text-primary-700 font-bold transition">
              Quem Somos
            </Link>
            <Link to="/timeline" className="text-primary-600 hover:text-primary-700 font-bold transition">
              Linha do Tempo
            </Link>
            <Link to="/eventos" className="text-primary-600 hover:text-primary-700 font-bold transition">
              Eventos
            </Link>
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-bold transition">
              Blog
            </Link>
            <Link to="/contato" className="text-primary-600 hover:text-primary-700 font-bold transition">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
