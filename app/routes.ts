import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export const SITE_ROUTES = [
  { path: "quemsomos", label: "Quem Somos" },
  { path: "timeline", label: "Linha do Tempo" },
  { path: "eventos", label: "Eventos" },
  { path: "blog", label: "Blog" },
  { path: "galeria", label: "Galeria" },
  { path: "contato", label: "Contato" },
  { path: "identidade", label: "Identidade Visual" },
  { path: "teste", label: "Página de Teste" },
] as const;

export default [
  index("routes/_index.tsx"),
  layout("routes/_layout.tsx", 
    SITE_ROUTES.map(r => route(r.path, `routes/${r.path}.tsx`))
  ),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
