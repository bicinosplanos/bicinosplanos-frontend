import type { MetaFunction } from "react-router";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Card } from "~/components/Card";
import { Calendar, MapPin, Clock } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Eventos e Ações - Bici nos Planos MS" },
    { name: "description", content: "Participe dos eventos, pedaladas e ações do Bici nos Planos MS. Confira nossa agenda de mobilizações e atividades de cicloativismo." },
    
    // Open Graph
    { property: "og:title", content: "Eventos e Ações - Bici nos Planos MS" },
    { property: "og:description", content: "Participe dos eventos, pedaladas e ações do Bici nos Planos MS. Confira nossa agenda de mobilizações e atividades de cicloativismo." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Eventos e Ações - Bici nos Planos MS" },
    { name: "twitter:description", content: "Participe dos eventos, pedaladas e ações do Bici nos Planos MS. Confira nossa agenda de mobilizações e atividades de cicloativismo." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

// Mock data - será substituído pela API
const eventos = [
  {
    id: 1,
    title: "Pedalada Noturna",
    date: "2024-02-15",
    time: "19:00",
    location: "Praça Ary Coelho, Campo Grande",
    description: "Pedalada coletiva pelas ruas de Campo Grande para promover a visibilidade dos ciclistas no trânsito.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    type: "Pedalada",
  },
  {
    id: 2,
    title: "Oficina de Manutenção de Bikes",
    date: "2024-02-20",
    time: "14:00",
    location: "Centro Comunitário, Dourados",
    description: "Aprenda técnicas básicas de manutenção e reparo de bicicletas com nossos voluntários.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    type: "Oficina",
  },
  {
    id: 3,
    title: "Audiência Pública - Plano Cicloviário",
    date: "2024-02-25",
    time: "18:00",
    location: "Câmara Municipal, Campo Grande",
    description: "Participação na audiência sobre o novo plano cicloviário da capital.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
    type: "Mobilização",
  },
  {
    id: 4,
    title: "Bicicletada Familiar",
    date: "2024-03-05",
    time: "09:00",
    location: "Parque das Nações Indígenas",
    description: "Pedalada leve e inclusiva para toda a família, com atividades para crianças.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    type: "Pedalada",
  },
  {
    id: 5,
    title: "Debate: Mobilidade Urbana Sustentável",
    date: "2024-03-10",
    time: "19:30",
    location: "UFMS, Campo Grande",
    description: "Mesa redonda sobre políticas públicas de mobilidade ativa e transporte sustentável.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    type: "Debate",
  },
  {
    id: 6,
    title: "Massa Crítica MS",
    date: "2024-03-15",
    time: "18:00",
    location: "Praça Ary Coelho, Campo Grande",
    description: "Encontro mensal de ciclistas para ocupar as ruas e reivindicar respeito no trânsito.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    type: "Mobilização",
  },
];

export default function Eventos() {
  return (
    <>
      <PageBanner 
        title="Eventos e Ações" 
        subtitle="Participe das nossas atividades"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        {/* Introdução */}
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6">
            Agenda de Atividades
          </h2>
          <p className="font-body text-lg text-neutral-700 leading-relaxed">
            Confira nossa programação de eventos, pedaladas, oficinas e mobilizações. 
            Junte-se a nós na construção de cidades mais humanas e sustentáveis!
          </p>
        </section>

        {/* Grid de Eventos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eventos.map((evento) => (
            <div key={evento.id} className="bg-white rounded-lg border-2 border-neutral-200 hover:border-primary-400 transition overflow-hidden">
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={evento.image} 
                  alt={evento.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full">
                  <span className="font-body text-sm font-bold">{evento.type}</span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="font-heading text-xl uppercase text-neutral-900 mb-3">
                  {evento.title}
                </h3>
                
                <p className="font-body text-neutral-600 mb-4 leading-relaxed">
                  {evento.description}
                </p>

                {/* Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-primary-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body font-bold">
                      {new Date(evento.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-body font-bold">{evento.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-600">
                    <MapPin className="w-4 h-4" />
                    <span className="font-body font-bold">{evento.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"></div>
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-white p-8 md:p-16 text-center">
            <h3 className="font-heading text-3xl md:text-4xl uppercase mb-4">
              Quer Organizar um Evento?
            </h3>
            <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-50">
              Tem uma ideia de ação ou evento? Entre em contato conosco e vamos construir juntos!
            </p>
            <a
              href="/contato"
              className="inline-block bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-neutral-900 px-10 py-4 rounded-lg font-bold text-lg transition cursor-pointer shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
