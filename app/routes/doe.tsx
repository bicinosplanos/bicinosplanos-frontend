import type { MetaFunction } from "react-router";
import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Heart, Bike, Wrench, Sprout, Copy, Check } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Doações - Bici nos Planos MS" },
    { name: "description", content: "Apoie o coletivo Bici nos Planos MS com sua doação. Ajude a financiar bicicletadas, oficinas e ações de cicloativismo em MS." },
    
    { property: "og:title", content: "Doações - Bici nos Planos MS" },
    { property: "og:description", content: "Apoie o coletivo Bici nos Planos MS com sua doação. Ajude a financiar bicicletadas, oficinas e ações de cicloativismo em MS." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Doações - Bici nos Planos MS" },
    { name: "twitter:description", content: "Apoie o coletivo Bici nos Planos MS com sua doação. Ajude a financiar bicicletadas, oficinas e ações de cicloativismo em MS." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

export default function Doacoes() {
  const [copied, setCopied] = useState(false);
  const pixKey = "bicinosplanosms@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <PageBanner 
        title="Apoie o Coletivo" 
        subtitle="Sua doação financia nossas ações"
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-neutral-800 mb-4">
              Faça Parte da Mudança
            </h2>
            <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
              O Bici nos Planos MS é um coletivo independente que precisa do apoio da comunidade para realizar suas ações. Sua doação, de qualquer valor, nos ajuda a continuar promovendo a mobilidade ativa e o cicloativismo em Mato Grosso do Sul.
            </p>
          </div>

          <div className="bg-primary-50 border-2 border-primary-600 rounded-lg p-8 mb-12">
            <h3 className="font-heading text-2xl uppercase text-neutral-800 mb-6 text-center">
              Doe via PIX
            </h3>
            <div className="bg-white rounded-lg p-6 mb-4">
              <p className="font-body text-sm text-neutral-600 mb-2 text-center">Chave PIX (E-mail)</p>
              <div className="flex items-center justify-center gap-3">
                <p className="font-body text-xl md:text-2xl font-bold text-primary-600">
                  {pixKey}
                </p>
                <button
                  onClick={copyToClipboard}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition flex items-center gap-2"
                  title="Copiar chave PIX"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              {copied && (
                <p className="font-body text-sm text-primary-600 text-center mt-2">
                  ✓ Chave PIX copiada!
                </p>
              )}
            </div>
            <p className="font-body text-center text-neutral-600">
              Qualquer valor é bem-vindo e faz a diferença!
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-heading text-2xl uppercase text-neutral-800 mb-6 text-center">
              Para onde vão os recursos?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition">
                <Bike className="w-12 h-12 text-primary-600 mb-4" />
                <h4 className="font-heading text-xl uppercase text-neutral-800 mb-2">
                  Bicicletadas
                </h4>
                <p className="font-body text-neutral-600">
                  Organização de pedaladas coletivas para promover a mobilidade ativa e ocupar as ruas com segurança.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition">
                <Wrench className="w-12 h-12 text-primary-600 mb-4" />
                <h4 className="font-heading text-xl uppercase text-neutral-800 mb-2">
                  Oficinas
                </h4>
                <p className="font-body text-neutral-600">
                  Oficinas de manutenção de bicicletas e educação para mobilidade urbana sustentável.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition">
                <Sprout className="w-12 h-12 text-primary-600 mb-4" />
                <h4 className="font-heading text-xl uppercase text-neutral-800 mb-2">
                  Bicicultura
                </h4>
                <p className="font-body text-neutral-600">
                  Ações de conscientização e fortalecimento da cultura da bicicleta como meio de transporte.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition">
                <Heart className="w-12 h-12 text-primary-600 mb-4" />
                <h4 className="font-heading text-xl uppercase text-neutral-800 mb-2">
                  Outras Ações
                </h4>
                <p className="font-body text-neutral-600">
                  Materiais de divulgação, equipamentos e outras necessidades para fortalecer o movimento.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent-50 border-l-4 border-accent-600 rounded-lg p-8 text-center">
            <h3 className="font-heading text-2xl uppercase text-neutral-800 mb-4">
              Gratidão!
            </h3>
            <p className="font-body text-neutral-700 text-lg">
              Cada doação, independente do valor, nos ajuda a continuar pedalando por uma cidade mais humana, sustentável e acessível para todas as pessoas. Obrigado por fazer parte dessa transformação!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
