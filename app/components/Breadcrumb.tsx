import { Link, useLocation } from "react-router";
import { ChevronRight, Home } from "lucide-react";
import { SITE_ROUTES } from "~/routes";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNames = Object.fromEntries(
    SITE_ROUTES.map(route => [route.path, route.label])
  );

  return (
    <nav className="bg-primary-50 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm font-body">
          <li>
            <Link to="/" className="flex items-center gap-1 text-primary-700 hover:text-primary-800 transition">
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
                <ChevronRight className="w-4 h-4 text-primary-400" />
                {isLast ? (
                  <span className="text-primary-800 font-semibold">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-primary-700 hover:text-primary-800 transition">
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
