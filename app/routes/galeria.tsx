import type { MetaFunction } from "react-router";
import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Lightbox } from "~/components/Lightbox";

export const meta: MetaFunction = () => {
  return [
    { title: "Galeria - Bici nos Planos MS" },
    { name: "description", content: "Confira fotos dos nossos eventos, ações e momentos marcantes do movimento cicloativista em Campo Grande." },
    
    { property: "og:title", content: "Galeria - Bici nos Planos MS" },
    { property: "og:description", content: "Confira fotos dos nossos eventos, ações e momentos marcantes do movimento cicloativista em Campo Grande." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Galeria - Bici nos Planos MS" },
    { name: "twitter:description", content: "Confira fotos dos nossos eventos, ações e momentos marcantes do movimento cicloativista em Campo Grande." },
    { name: "twitter:image", content: "/logo.png" },
  ];
};

const mockGallery = [
  { id: 1, title: "Bicicletada 2023", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 2, title: "Oficina de Manutenção", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80" },
  { id: 3, title: "Pedal Noturno", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80" },
  { id: 4, title: "Encontro Cicloativista", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80" },
  { id: 5, title: "Ação na Praça", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80" },
  { id: 6, title: "Passeio Ciclístico", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80" },
];

export default function Galeria() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockGallery.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mockGallery.length) % mockGallery.length);
  };

  return (
    <>
      <PageBanner 
        title="Galeria" 
        subtitle="Momentos marcantes do nosso movimento"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      />
      <Breadcrumb />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGallery.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="font-heading text-white uppercase p-4 text-lg">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={mockGallery}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}
