import { Link, useLocation } from "react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNames: Record<string, string> = {
    "quem-somos": "Quem Somos",
    "timeline": "Linha do Tempo",
    "eventos": "Eventos",
    "blog": "Blog",
    "contato": "Contato",
    "identidade": "Identidade Visual",
    "teste": "Página de Teste",
  };

  return (
    <nav className="bg-neutral-100 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="flex items-center gap-1 text-neutral-600 hover:text-primary-600 transition">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Início</span>
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[name] || name;

            return (
              <li key={name} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-neutral-400" />
                {isLast ? (
                  <span className="text-primary-600 font-semibold">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-neutral-600 hover:text-primary-600 transition">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
