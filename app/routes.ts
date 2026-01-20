import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  layout("routes/_layout.tsx", [
    route("quem-somos", "routes/_layout.quem-somos.tsx"),
    route("timeline", "routes/_layout.timeline.tsx"),
    route("eventos", "routes/_layout.eventos.tsx"),
    route("blog", "routes/_layout.blog.tsx"),
    route("galeria", "routes/_layout.galeria.tsx"),
    route("contato", "routes/_layout.contato.tsx"),
    route("identidade", "routes/_layout.identidade.tsx"),
    route("teste", "routes/_layout.teste.tsx"),
  ]),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
