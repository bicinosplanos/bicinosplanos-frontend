import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bici nos Planos - Coletivo de Cicloativismo do MS" },
    { name: "description", content: "Promovendo a bicicleta como meio de transporte e ferramenta de transformação social no Mato Grosso do Sul" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-heading text-5xl md:text-7xl mb-6">
                  Bici nos Planos
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-primary-100">
                  Coletivo de cicloativismo do Mato Grosso do Sul
                </p>
                <p className="text-lg mb-8">
                  Promovendo a bicicleta como meio de transporte e ferramenta de transformação social
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/quem-somos" className="bg-secondary-500 text-neutral-900 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition">
                    Conheça o Coletivo
                  </Link>
                  <Link to="/eventos" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition">
                    Próximos Eventos
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <img src="/logo.png" alt="Bici nos Planos" className="w-full max-w-md mx-auto" />
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
                <div className="text-6xl mb-6">🚴</div>
                <h3 className="font-heading text-2xl mb-4 text-neutral-900">Mobilidade Ativa</h3>
                <p className="text-neutral-600">
                  A bicicleta como meio de transporte sustentável e acessível para todos
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="font-heading text-2xl mb-4 text-neutral-900">Sustentabilidade</h3>
                <p className="text-neutral-600">
                  Cidades mais verdes, saudáveis e com qualidade de vida
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">✊</div>
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
