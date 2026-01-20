import type { MetaFunction } from "react-router";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Calendar, MapPin, Users } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Linha do Tempo - Bici nos Planos MS" },
    { name: "description", content: "Conheça a história e trajetória do Bici nos Planos MS através de nossa linha do tempo com os principais marcos e conquistas do movimento cicloativista." },
    
    // Open Graph
    { property: "og:title", content: "Linha do Tempo - Bici nos Planos MS" },
    { property: "og:description", content: "Conheça a história e trajetória do Bici nos Planos MS através de nossa linha do tempo com os principais marcos e conquistas do movimento cicloativista." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Linha do Tempo - Bici nos Planos MS" },
    { name: "twitter:description", content: "Conheça a história e trajetória do Bici nos Planos MS através de nossa linha do tempo com os principais marcos e conquistas do movimento cicloativista." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

// Mock data - será substituído pela API
const timelineEvents = [
  {
    id: 1,
    year: 2015,
    title: "Fundação do Coletivo",
    description: "Nasce o Bici nos Planos MS, reunindo ciclistas e ativistas comprometidos com a mobilidade urbana sustentável no Mato Grosso do Sul.",
    location: "Campo Grande, MS",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 2,
    year: 2016,
    title: "Primeira Pedalada Coletiva",
    description: "Realização da primeira pedalada coletiva organizada pelo grupo, reunindo mais de 100 ciclistas pelas ruas de Campo Grande.",
    location: "Campo Grande, MS",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    id: 3,
    year: 2017,
    title: "Participação em Audiências Públicas",
    description: "Início da participação ativa em audiências públicas sobre mobilidade urbana, levando as demandas dos ciclistas aos gestores públicos.",
    location: "Campo Grande, MS",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    id: 4,
    year: 2018,
    title: "Campanha por Infraestrutura Cicloviária",
    description: "Lançamento de campanha pela construção de ciclovias e ciclofaixas seguras na capital e interior do estado.",
    location: "Mato Grosso do Sul",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    id: 5,
    year: 2019,
    title: "Expansão para o Interior",
    description: "Articulação com ciclistas e coletivos de outras cidades do MS, fortalecendo a rede estadual de cicloativismo.",
    location: "Mato Grosso do Sul",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 6,
    year: 2020,
    title: "Mobilização Digital",
    description: "Adaptação às restrições da pandemia com ações digitais, lives educativas e fortalecimento da presença nas redes sociais.",
    location: "Online",
    icon: <Calendar className="w-6 h-6" />,
  },
];

export default function Timeline() {
  return (
    <>
      <PageBanner 
        title="Linha do Tempo" 
        subtitle="Nossa história e trajetória"
        image="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        {/* Introdução */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-600 mb-6">
            Nossa Jornada
          </h2>
          <p className="font-body text-lg text-neutral-700 leading-relaxed">
            Desde nossa fundação, o Bici nos Planos MS tem construído uma história de luta, 
            conquistas e transformação. Conheça os principais marcos da nossa trajetória.
          </p>
        </section>

        {/* Timeline */}
        <section className="relative">
          {/* Linha vertical central (desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Conteúdo */}
                <div className="w-full md:w-5/12">
                  <div className={`bg-white p-6 rounded-lg border-2 border-primary-200 hover:border-primary-400 transition shadow-sm ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {/* Ano */}
                    <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full mb-4">
                      <span className="font-heading text-xl uppercase">{event.year}</span>
                    </div>
                    
                    {/* Título */}
                    <h3 className="font-heading text-xl md:text-2xl uppercase text-neutral-900 mb-3">
                      {event.title}
                    </h3>
                    
                    {/* Descrição */}
                    <p className="font-body text-neutral-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Localização */}
                    <div className={`flex items-center gap-2 text-primary-600 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <MapPin className="w-4 h-4" />
                      <span className="font-body text-sm font-bold">{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Ícone central */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="bg-primary-600 text-white p-4 rounded-full shadow-lg z-10">
                    {event.icon}
                  </div>
                </div>

                {/* Espaço vazio (para alternar lados) */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"></div>
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-white p-8 md:p-16 text-center">
            <h3 className="font-heading text-3xl md:text-4xl uppercase mb-4">
              Faça Parte da Nossa História
            </h3>
            <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-50">
              Nossa trajetória continua sendo escrita todos os dias. 
              Junte-se a nós e ajude a construir cidades mais humanas e sustentáveis.
            </p>
            <a
              href="/contato"
              className="inline-block bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-neutral-900 px-10 py-4 rounded-lg font-bold text-lg transition cursor-pointer shadow-lg hover:shadow-xl"
            >
              Entre em Contato
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
