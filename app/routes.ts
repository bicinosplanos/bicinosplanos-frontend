import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/_layout.tsx", [
    route("quem-somos", "routes/_layout.quem-somos.tsx"),
    route("identidade", "routes/_layout.identidade.tsx"),
    route("teste", "routes/_layout.teste.tsx"),
  ]),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
