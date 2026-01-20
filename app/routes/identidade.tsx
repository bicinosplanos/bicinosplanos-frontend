import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Card } from "~/components/Card";
import { Palette, Type, Layout, Bike } from "lucide-react";
import { useState } from "react";

export default function IdentidadePage() {
  const [selectedPalette, setSelectedPalette] = useState<"primary" | "secondary" | "neutral">("primary");

  const paletteInfo = {
    primary: { name: "Primary (Verde)", color: "primary" },
    secondary: { name: "Secondary (Amarelo)", color: "secondary" },
    neutral: { name: "Neutral (Azul Escuro)", color: "neutral" },
  };
  return (
    <>
      <PageBanner 
        title="Identidade Visual" 
        subtitle="Paleta de cores, tipografia e componentes do Bici nos Planos MS"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        
        {/* Paleta de Cores */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6 flex items-center gap-3">
            <Palette className="w-8 h-8" />
            Paleta de Cores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div onClick={() => setSelectedPalette("primary")} className="cursor-pointer h-full">
              <Card
                title="Verde Primary"
                description="Cor principal - sustentabilidade e mobilidade ativa"
                variant="primary"
              >
                <div className="space-y-2 min-h-[80px]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary-500 border-2 border-neutral-300"></div>
                    <span className="text-sm font-mono font-body">#258480</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-body">Botões, links, destaques</p>
                  {selectedPalette === "primary" && (
                    <p className="text-xs font-bold text-primary-700 font-body mt-2">✓ Selecionado</p>
                  )}
                </div>
              </Card>
            </div>

            <div onClick={() => setSelectedPalette("secondary")} className="cursor-pointer h-full">
              <Card
                title="Amarelo Secondary"
                description="Cor de apoio - energia e ativismo"
                variant="secondary"
              >
                <div className="space-y-2 min-h-[80px]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-secondary-500 border-2 border-neutral-300"></div>
                    <span className="text-sm font-mono font-body">#D9DD72</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-body">Destaques, badges, alertas</p>
                  {selectedPalette === "secondary" && (
                    <p className="text-xs font-bold text-secondary-700 font-body mt-2">✓ Selecionado</p>
                  )}
                </div>
              </Card>
            </div>

            <div onClick={() => setSelectedPalette("neutral")} className="cursor-pointer h-full">
              <Card
                title="Azul Neutral"
                description="Cor neutra - seriedade e profissionalismo"
                variant="accent"
              >
                <div className="space-y-2 min-h-[80px]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-neutral-700 border-2 border-neutral-300"></div>
                    <span className="text-sm font-mono font-body">#101F2E</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-body">Textos, fundos escuros</p>
                  {selectedPalette === "neutral" && (
                    <p className="text-xs font-bold text-neutral-700 font-body mt-2">✓ Selecionado</p>
                  )}
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6" key={selectedPalette}>
            <h3 className="font-body font-bold text-lg mb-4">Escala de Cores {paletteInfo[selectedPalette].name}</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade, index) => (
                <div 
                  key={shade} 
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-full h-16 rounded bg-${paletteInfo[selectedPalette].color}-${shade} border border-neutral-300 transition-transform hover:scale-110 hover:shadow-lg`}></div>
                  <span className="text-xs mt-1 block font-body group-hover:font-bold">{shade}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipografia */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6 flex items-center gap-3">
            <Type className="w-8 h-8" />
            Tipografia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Anton - Headings" variant="default">
              <div className="space-y-3">
                <p className="font-heading text-4xl uppercase">ANTON</p>
                <p className="font-heading text-3xl uppercase">Títulos</p>
                <p className="font-heading text-2xl uppercase">Destaques</p>
                <p className="text-sm text-neutral-600 font-body">Fonte display para títulos e destaques em UPPERCASE</p>
              </div>
            </Card>

            <Card title="Raleway - Body" variant="default">
              <div className="space-y-3">
                <p className="font-body text-2xl font-bold">Raleway Bold</p>
                <p className="font-body text-xl">Raleway Regular</p>
                <p className="font-body text-lg font-light">Raleway Light</p>
                <p className="text-sm text-neutral-600 font-body">Fonte para textos corridos e conteúdo</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Componentes */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6 flex items-center gap-3">
            <Layout className="w-8 h-8" />
            Componentes
          </h2>

          <h3 className="font-heading text-2xl uppercase text-neutral-700 mb-4">Cards Básicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              title="Card Default"
              description="Card básico com fundo branco e borda neutra"
              icon={<Bike className="w-8 h-8" />}
              variant="default"
            />
            
            <Card
              title="Card Primary"
              description="Card com destaque na cor principal verde"
              icon={<Bike className="w-8 h-8" />}
              variant="primary"
            />
            
            <Card
              title="Card Secondary"
              description="Card com destaque na cor secundária amarela"
              icon={<Bike className="w-8 h-8" />}
              variant="secondary"
            />
          </div>

          <h3 className="font-heading text-2xl uppercase text-neutral-700 mb-4">Cards com Imagem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              title="Evento Exemplo"
              description="Card com imagem, ideal para eventos e notícias."
              image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              imageAlt="Ciclistas"
              variant="default"
            />
            
            <Card
              title="Post do Blog"
              description="Card com imagem e link, perfeito para posts do blog."
              image="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
              imageAlt="Bicicleta"
              link="/blog"
              variant="accent"
            />
            
            <Card
              title="Galeria"
              description="Card com imagem destacada para galeria de fotos."
              image="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop"
              imageAlt="Ciclovia"
              icon={<Bike className="w-6 h-6" />}
              variant="primary"
            />
          </div>

          <h3 className="font-heading text-2xl uppercase text-neutral-700 mb-4">Cards Customizados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card
              title="Card com Conteúdo Custom"
              variant="secondary"
            >
              <div className="space-y-2">
                <p className="text-sm text-neutral-600 font-body">Você pode adicionar qualquer conteúdo dentro do card:</p>
                <ul className="list-disc list-inside text-sm text-neutral-600 font-body">
                  <li>Listas</li>
                  <li>Botões</li>
                  <li>Formulários</li>
                  <li>Qualquer componente React</li>
                </ul>
              </div>
            </Card>
            
            <Card
              title="Card Interativo"
              icon={<Bike className="w-8 h-8" />}
              variant="accent"
            >
              <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 active:bg-primary-800 transition font-body font-bold cursor-pointer">
                Ação do Card
              </button>
            </Card>
          </div>

          <h3 className="font-heading text-2xl uppercase text-neutral-700 mb-4">Botões</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white px-6 py-3 rounded-lg font-bold transition cursor-pointer">
              Botão Primary
            </button>
            <button className="bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-neutral-900 px-6 py-3 rounded-lg font-bold transition cursor-pointer">
              Botão Secondary
            </button>
            <button className="bg-white hover:bg-neutral-50 active:bg-neutral-100 text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-bold transition cursor-pointer">
              Botão Outline
            </button>
          </div>

          <h3 className="font-heading text-2xl uppercase text-neutral-700 mb-4">Badges</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
              Mobilidade
            </span>
            <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-semibold">
              Ativismo
            </span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold">
              Sustentabilidade
            </span>
          </div>
        </section>

        {/* Logo e Marca */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6 flex items-center gap-3">
            <Bike className="w-8 h-8" />
            Logo e Marca
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Logo Principal" variant="primary">
              <div className="flex items-center gap-3 p-4 bg-white rounded">
                <img src="/logo.png" alt="Bici nos Planos MS" className="h-16 w-16" />
                <div>
                  <p className="font-heading text-2xl uppercase text-primary-600">Bici nos Planos</p>
                  <p className="font-body text-lg text-neutral-600">MS</p>
                </div>
              </div>
            </Card>

            <Card title="Aplicação" variant="default">
              <div className="space-y-3">
                <p className="text-sm text-neutral-600 font-body">
                  <strong>Nome:</strong> Bici nos Planos MS
                </p>
                <p className="text-sm text-neutral-600 font-body">
                  <strong>Slogan:</strong> Coletivo de Cicloativismo do MS
                </p>
                <p className="text-sm text-neutral-600 font-body">
                  <strong>Uso:</strong> Sempre em UPPERCASE para "BICI NOS PLANOS"
                </p>
              </div>
            </Card>
          </div>
        </section>

      </div>
    </>
  );
}
