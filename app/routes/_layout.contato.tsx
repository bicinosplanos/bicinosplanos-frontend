import type { MetaFunction } from "react-router";
import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Card } from "~/components/Card";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contato - Bici nos Planos MS" },
    { name: "description", content: "Entre em contato conosco e participe do movimento cicloativista em Campo Grande. Junte-se a nós!" },
    
    { property: "og:title", content: "Contato - Bici nos Planos MS" },
    { property: "og:description", content: "Entre em contato conosco e participe do movimento cicloativista em Campo Grande. Junte-se a nós!" },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contato - Bici nos Planos MS" },
    { name: "twitter:description", content: "Entre em contato conosco e participe do movimento cicloativista em Campo Grande. Junte-se a nós!" },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

export default function Contato() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [lgpdAccepted, setLgpdAccepted] = useState(false);

  return (
    <>
      <PageBanner 
        title="Contato" 
        subtitle="Fale conosco e participe do movimento"
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl uppercase text-neutral-800 mb-6">
              Entre em Contato
            </h2>
            <form className="space-y-6">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-2 focus:ring-primary-500"
                />
                <label htmlFor="anonymous" className="font-body text-sm text-neutral-500 cursor-pointer">
                  Enviar mensagem anônima
                </label>
              </div>

              {!isAnonymous && (
                <>
                  <div>
                    <label htmlFor="name" className="block font-body font-semibold text-neutral-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body font-semibold text-neutral-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </>
              )}
              
              <div>
                <label htmlFor="subject" className="block font-body font-semibold text-neutral-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Sobre o que você quer falar?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-body font-semibold text-neutral-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              {!isAnonymous && (
                <div className="bg-accent-50 rounded-lg p-4">
                  <p className="font-body text-sm text-neutral-700 mb-3">
                    <strong>Proteção de Dados Pessoais (LGPD):</strong> Ao enviar este formulário com seus dados pessoais (nome e e-mail), você autoriza o Bici nos Planos MS a armazenar e utilizar essas informações exclusivamente para responder sua mensagem e manter contato relacionado às atividades do coletivo. Seus dados não serão compartilhados com terceiros e você pode solicitar sua exclusão a qualquer momento. Para mais informações sobre seus direitos, consulte a{" "}
                    <a 
                      href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline font-semibold"
                    >
                      Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
                    </a>.
                  </p>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="lgpd"
                      checked={lgpdAccepted}
                      onChange={(e) => setLgpdAccepted(e.target.checked)}
                      required
                      className="w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-2 focus:ring-primary-500 mt-0.5"
                    />
                    <label htmlFor="lgpd" className="font-body text-sm text-neutral-700 cursor-pointer">
                      Li e concordo com o tratamento dos meus dados pessoais conforme a LGPD
                    </label>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-heading uppercase px-8 py-4 rounded-lg hover:bg-primary-700 transition text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <h2 className="font-heading text-3xl uppercase text-neutral-800 mb-6">
              Como Participar
            </h2>
            
            <Card>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg uppercase text-neutral-800 mb-2">
                    E-mail
                  </h3>
                  <p className="font-body text-neutral-600">
                    contato@bicinosplanosms.com.br
                  </p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg uppercase text-neutral-800 mb-2">
                    Localização
                  </h3>
                  <p className="font-body text-neutral-600">
                    Campo Grande - MS<br />
                    Mato Grosso do Sul, Brasil
                  </p>
                </div>
              </div>
            </Card>
            
            <Card>
              <h3 className="font-heading text-lg uppercase text-neutral-800 mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-body">Instagram</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-body">Facebook</span>
                </a>
              </div>
            </Card>
            
            <div className="bg-accent-50 border-l-4 border-accent-600 p-6 rounded">
              <h3 className="font-heading text-lg uppercase text-neutral-800 mb-3">
                Participe dos Nossos Eventos
              </h3>
              <p className="font-body text-neutral-700 mb-4">
                Junte-se a nós nas bicicletadas, oficinas e ações pela mobilidade urbana sustentável em Campo Grande.
              </p>
              <a 
                href="/eventos" 
                className="inline-block bg-primary-600 text-white font-heading uppercase px-6 py-2 rounded hover:bg-primary-700 transition text-sm"
              >
                Ver Eventos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
