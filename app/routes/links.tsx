import type { MetaFunction } from "react-router";
import { Instagram, Mail, Globe, Users, Clock, Calendar, BookOpen, Image } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Links - Bici nos Planos MS" },
    { name: "description", content: "Todos os links do Coletivo Bici nos Planos - Redes sociais, contato e site oficial" },
    { property: "og:title", content: "Links - Bici nos Planos MS" },
    { property: "og:description", content: "Todos os links do Coletivo Bici nos Planos - Redes sociais, contato e site oficial" },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Links - Bici nos Planos MS" },
    { name: "twitter:description", content: "Todos os links do Coletivo Bici nos Planos - Redes sociais, contato e site oficial" },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

const links = [
  {
    title: "Site Oficial",
    url: "/",
    icon: Globe,
    description: "Conheça nosso site completo",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
  },
  {
    title: "Quem Somos",
    url: "/quemsomos",
    icon: Users,
    description: "Conheça nossa história e ideologia",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
  },
  {
    title: "Linha do Tempo",
    url: "/timeline",
    icon: Clock,
    description: "Nossa trajetória e conquistas",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    title: "Eventos",
    url: "/eventos",
    icon: Calendar,
    description: "Pedaladas e ações do coletivo",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    title: "Blog",
    url: "/blog",
    icon: BookOpen,
    description: "Notícias e artigos sobre cicloativismo",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80"
  },
  {
    title: "Galeria",
    url: "/galeria",
    icon: Image,
    description: "Fotos das nossas ações",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80"
  },
  {
    title: "Contato",
    url: "/contato",
    icon: Mail,
    description: "Entre em contato conosco",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/bicinosplanos",
    icon: Instagram,
    description: "@bicinosplanos",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
];

export default function Links() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <img 
              src="/logo.png" 
              alt="Bici nos Planos" 
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6"
            />
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white uppercase mb-2 sm:mb-3">
              Bici nos Planos
            </h1>
            <p className="font-body text-white/90 text-base sm:text-lg px-4">
              Coletivo de cicloativistas - Mato Grosso do Sul
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 sm:hover:scale-105"
                >
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <img 
                      src={link.image} 
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h2 className="font-heading text-lg sm:text-xl text-neutral-800 uppercase mb-1">
                      {link.title}
                    </h2>
                    <p className="font-body text-neutral-600 text-sm">
                      {link.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <p className="font-body text-white/80 text-xs sm:text-sm">
              Mobilidade ativa • Justiça social • Sustentabilidade
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
