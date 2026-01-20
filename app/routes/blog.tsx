import type { MetaFunction } from "react-router";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Card } from "~/components/Card";
import { Calendar, User } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - Bici nos Planos MS" },
    { name: "description", content: "Acompanhe as últimas notícias, artigos e reflexões sobre mobilidade urbana, cicloativismo e sustentabilidade em Campo Grande." },
    
    { property: "og:title", content: "Blog - Bici nos Planos MS" },
    { property: "og:description", content: "Acompanhe as últimas notícias, artigos e reflexões sobre mobilidade urbana, cicloativismo e sustentabilidade em Campo Grande." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Blog - Bici nos Planos MS" },
    { name: "twitter:description", content: "Acompanhe as últimas notícias, artigos e reflexões sobre mobilidade urbana, cicloativismo e sustentabilidade em Campo Grande." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

const mockPosts = [
  {
    id: 1,
    title: "A Importância da Mobilidade Urbana Sustentável",
    excerpt: "Entenda como a bicicleta pode transformar a mobilidade nas cidades e contribuir para um futuro mais sustentável.",
    author: "Bici nos Planos",
    date: "2024-01-15",
    category: "Mobilidade",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
  },
  {
    id: 2,
    title: "Ciclovias em Campo Grande: Avanços e Desafios",
    excerpt: "Um panorama sobre a infraestrutura cicloviária na capital sul-mato-grossense e os próximos passos necessários.",
    author: "Bici nos Planos",
    date: "2024-01-10",
    category: "Infraestrutura",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: 3,
    title: "Benefícios da Bicicleta para a Saúde",
    excerpt: "Descubra como pedalar regularmente pode melhorar sua qualidade de vida e bem-estar físico e mental.",
    author: "Bici nos Planos",
    date: "2024-01-05",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
  },
];

export default function Blog() {
  return (
    <>
      <PageBanner 
        title="Blog" 
        subtitle="Notícias, artigos e reflexões sobre mobilidade urbana"
        image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1200&q=80"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-heading uppercase text-primary-600 mb-2">
                  {post.category}
                </span>
                <h3 className="font-heading text-xl uppercase text-neutral-800 mb-3">
                  {post.title}
                </h3>
                <p className="font-body text-neutral-600 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <button className="bg-primary-600 text-white font-heading uppercase px-6 py-2 rounded hover:bg-primary-700 transition text-sm">
                  Ler Mais
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
