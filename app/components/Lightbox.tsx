import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";

interface LightboxProps {
  images: { id: number; title: string; image: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "+" || e.key === "=") setZoom(prev => Math.min(prev + 0.25, 3));
      if (e.key === "-") setZoom(prev => Math.max(prev - 0.25, 0.5));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (zoom === 1) {
      setZoom(2);
    } else {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center">
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <img src="/logo.png" alt="Bici nos Planos MS" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="font-heading text-lg uppercase text-white leading-tight">
            Bici nos Planos <span className="font-body font-thin">MS</span>
          </span>
          <span className="font-body text-xs text-neutral-200 uppercase">
            Galeria
          </span>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-secondary-400 transition z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="absolute top-4 right-16 flex gap-2 z-10">
        <button
          onClick={() => setZoom(prev => Math.min(prev + 0.25, 3))}
          className="text-white hover:text-secondary-400 transition p-2 bg-black/50 rounded"
          title="Zoom In (+)"
        >
          <ZoomIn className="w-6 h-6" />
        </button>
        <button
          onClick={() => setZoom(prev => Math.max(prev - 0.25, 0.5))}
          className="text-white hover:text-secondary-400 transition p-2 bg-black/50 rounded"
          title="Zoom Out (-)"
        >
          <ZoomOut className="w-6 h-6" />
        </button>
      </div>

      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-secondary-400 transition z-10"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-secondary-400 transition z-10"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      <div className="flex-1 flex items-center justify-center w-full px-20">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={current.image}
            alt={current.title}
            style={{ 
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
            className="max-w-full max-h-[70vh] object-contain transition-transform duration-200 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            draggable={false}
          />
        </div>
      </div>

      <div className="py-4 text-center z-10">
        <p className="text-white font-heading text-xl uppercase mb-2">
          {current.title}
        </p>
        <p className="text-neutral-400 text-sm">
          {currentIndex + 1} / {images.length} | Zoom: {Math.round(zoom * 100)}%
        </p>
      </div>
    </div>
  );
}
