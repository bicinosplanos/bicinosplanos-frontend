import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Bike, Leaf, Users } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bici nos Planos MS - Coletivo de Cicloativismo do MS" },
    { name: "description", content: "Promovendo a bicicleta como meio de transporte e ferramenta de transformação social no Mato Grosso do Sul" },
    
    // Open Graph
    { property: "og:title", content: "Bici nos Planos MS - Coletivo de Cicloativismo do MS" },
    { property: "og:description", content: "Promovendo a bicicleta como meio de transporte e ferramenta de transformação social no Mato Grosso do Sul" },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Bici nos Planos MS - Coletivo de Cicloativismo do MS" },
    { name: "twitter:description", content: "Promovendo a bicicleta como meio de transporte e ferramenta de transformação social no Mato Grosso do Sul" },
    { name: "twitter:image", content: "/logo.png" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white h-screen flex items-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/logo.png)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-800/90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-left">
                <h1 className="font-heading text-6xl leading-tight md:text-7xl mb-4 md:mb-6 uppercase">
                  <span className="block">Bici</span>
                  <span className="block">nos</span>
                  <span className="block">Planos <span className="font-body font-thin text-7xl md:text-7xl">MS</span></span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-primary-100">
                  Coletivo de cicloativismo do Mato Grosso do Sul
                </p>
                <p className="text-base sm:text-lg mb-6 md:mb-8">
                  Promovendo a bicicleta como meio de transporte e ferramenta de transformação social
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center md:items-start">
                  <Link to="/quem-somos" className="bg-secondary-500 text-neutral-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition text-sm sm:text-base w-full sm:w-auto text-center">
                    Conheça o Coletivo
                  </Link>
                  <Link to="/eventos" className="border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition text-sm sm:text-base w-full sm:w-auto text-center">
                    Próximos Eventos
                  </Link>
                </div>
                <img src="/logo.png" alt="Bici nos Planos MS" className="w-80 sm:w-96 mx-auto mt-8 md:hidden" />
              </div>
              <div className="flex-1 hidden md:block">
                <img src="/logo.png" alt="Bici nos Planos MS" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 text-neutral-900">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Bike className="w-16 h-16 text-primary-600" />
                </div>
                <h3 className="font-heading text-2xl mb-4 text-neutral-900">Mobilidade Ativa</h3>
                <p className="text-neutral-600">
                  A bicicleta como meio de transporte sustentável e acessível para todos
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Leaf className="w-16 h-16 text-primary-600" />
                </div>
                <h3 className="font-heading text-2xl mb-4 text-neutral-900">Sustentabilidade</h3>
                <p className="text-neutral-600">
                  Cidades mais verdes, saudáveis e com qualidade de vida
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Users className="w-16 h-16 text-primary-600" />
                </div>
                <h3 className="font-heading text-2xl mb-4 text-neutral-900">Transformação Social</h3>
                <p className="text-neutral-600">
                  Ativismo político pela democratização do espaço urbano
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="font-heading text-3xl mb-4 text-neutral-900">Nossa História</h3>
                <p className="text-neutral-600 mb-6">
                  Conheça a trajetória do coletivo, nossas conquistas e os marcos que construímos juntos pela mobilidade urbana no MS.
                </p>
                <Link to="/timeline" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
                  Ver Linha do Tempo →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="font-heading text-3xl mb-4 text-neutral-900">Participe</h3>
                <p className="text-neutral-600 mb-6">
                  Junte-se ao movimento! Participe de nossas ações, eventos e campanhas pela mobilidade ativa.
                </p>
                <Link to="/eventos" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
                  Ver Eventos →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
