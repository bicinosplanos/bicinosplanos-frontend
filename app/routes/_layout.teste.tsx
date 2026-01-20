import { Bike, Calendar, MapPin } from "lucide-react";
import { Card } from "~/components/Card";
import { Breadcrumb } from "~/components/Breadcrumb";

export default function Teste() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-6xl uppercase mb-4">
            Título da Página
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Conteúdo Principal */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-6 text-neutral-900">
            Título da Seção
          </h2>
          
          <p className="text-neutral-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <p className="text-neutral-700 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <p className="text-neutral-700 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <h3 className="font-heading text-2xl uppercase mb-4 text-primary-600">
            Subtítulo da Seção
          </h3>
          
          <p className="text-neutral-700 mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white">
        <h2 className="font-heading text-3xl md:text-4xl uppercase mb-8 text-neutral-900">
          Cards de Destaque
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Primeiro Card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            icon={<Bike className="w-8 h-8" />}
            variant="primary"
          />
          
          <Card
            title="Segundo Card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            icon={<Calendar className="w-8 h-8" />}
            variant="secondary"
          />
          
          <Card
            title="Terceiro Card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            icon={<MapPin className="w-8 h-8" />}
            variant="accent"
          />
        </div>
      </section>

      {/* Botões */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-heading text-3xl md:text-4xl uppercase mb-8 text-neutral-900">
          Chamadas para Ação
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
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
      </section>
    </div>
  );
}
