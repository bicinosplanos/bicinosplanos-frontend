import type { MetaFunction } from "react-router";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Card } from "~/components/Card";
import { Bike, Users, Target, Heart } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Quem Somos - Bici nos Planos MS" },
    { name: "description", content: "Conheça o Bici nos Planos MS, coletivo de cicloativistas do Mato Grosso do Sul que promove a bicicleta como meio de transporte e ferramenta de transformação social." },
    
    // Open Graph
    { property: "og:title", content: "Quem Somos - Bici nos Planos MS" },
    { property: "og:description", content: "Conheça o Bici nos Planos MS, coletivo de cicloativistas do Mato Grosso do Sul que promove a bicicleta como meio de transporte e ferramenta de transformação social." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Quem Somos - Bici nos Planos MS" },
    { name: "twitter:description", content: "Conheça o Bici nos Planos MS, coletivo de cicloativistas do Mato Grosso do Sul que promove a bicicleta como meio de transporte e ferramenta de transformação social." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

export default function QuemSomos() {
  return (
    <>
      <Breadcrumb />
      <PageBanner 
        title="Quem Somos" 
        subtitle="Conheça nossa história, missão e valores"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Introdução */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6">
            Bici nos Planos MS
          </h2>
          <p className="font-body text-lg text-neutral-700 leading-relaxed mb-4">
            Somos um coletivo de cicloativistas do Mato Grosso do Sul que atua na promoção da bicicleta 
            como meio de transporte, ferramenta de transformação social e elemento central da mobilidade 
            urbana sustentável.
          </p>
          <p className="font-body text-lg text-neutral-700 leading-relaxed">
            Acreditamos que a bicicleta é mais do que um veículo: é um instrumento de mudança, 
            democratização do espaço urbano e construção de cidades mais humanas, justas e sustentáveis.
          </p>
        </section>

        {/* Cards de Valores */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-8 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Mobilidade"
              description="Promovemos a bicicleta como meio de transporte eficiente e acessível para todos."
              icon={<Bike className="w-10 h-10" />}
              variant="primary"
            />
            <Card
              title="Coletividade"
              description="Construímos juntos um movimento forte e inclusivo de transformação urbana."
              icon={<Users className="w-10 h-10" />}
              variant="secondary"
            />
            <Card
              title="Propósito"
              description="Lutamos por cidades mais humanas, sustentáveis e democráticas para todas as pessoas."
              icon={<Target className="w-10 h-10" />}
              variant="secondary"
            />
            <Card
              title="Paixão"
              description="Pedalamos com amor pelo que fazemos e pelo território que habitamos."
              icon={<Heart className="w-10 h-10" />}
              variant="primary"
            />
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-200">
              <h3 className="font-heading text-2xl md:text-3xl uppercase text-primary-700 mb-4">
                Nossa Missão
              </h3>
              <p className="font-body text-neutral-700 leading-relaxed">
                Promover a cultura da bicicleta como meio de transporte e ferramenta de transformação 
                social, lutando por políticas públicas que garantam infraestrutura adequada e segura 
                para ciclistas em todo o Mato Grosso do Sul.
              </p>
            </div>
            <div className="bg-secondary-50 p-8 rounded-lg border-2 border-secondary-200">
              <h3 className="font-heading text-2xl md:text-3xl uppercase text-secondary-700 mb-4">
                Nossa Visão
              </h3>
              <p className="font-body text-neutral-700 leading-relaxed">
                Construir cidades sul-mato-grossenses onde a bicicleta seja reconhecida como modal 
                prioritário, com infraestrutura de qualidade, respeito no trânsito e acesso 
                democrático à mobilidade urbana para todas as pessoas.
              </p>
            </div>
          </div>
        </section>

        {/* Atuação */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6">
            Como Atuamos
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition">
              <h4 className="font-heading text-xl uppercase text-neutral-900 mb-2">
                Incidência Política
              </h4>
              <p className="font-body text-neutral-600">
                Participamos de audiências públicas, elaboração de planos cicloviários e diálogo 
                com gestores públicos para garantir políticas de mobilidade ativa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition">
              <h4 className="font-heading text-xl uppercase text-neutral-900 mb-2">
                Mobilização Social
              </h4>
              <p className="font-body text-neutral-600">
                Organizamos pedaladas, eventos e ações coletivas que ocupam as ruas e demonstram 
                a força do movimento cicloativista.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition">
              <h4 className="font-heading text-xl uppercase text-neutral-900 mb-2">
                Educação e Conscientização
              </h4>
              <p className="font-body text-neutral-600">
                Promovemos oficinas, debates e produção de conteúdo sobre mobilidade urbana, 
                direitos dos ciclistas e uso seguro da bicicleta.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition">
              <h4 className="font-heading text-xl uppercase text-neutral-900 mb-2">
                Articulação em Rede
              </h4>
              <p className="font-body text-neutral-600">
                Conectamos ciclistas, coletivos e organizações em todo o estado, fortalecendo 
                o movimento de mobilidade ativa no Mato Grosso do Sul.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
