import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bici nos Planos" },
    { name: "description", content: "Bici nos Planos" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Bici nos Planos - site</h1>
    </div>
  );
}
