interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-16 overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/70 to-primary-700/70" />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-heading text-3xl md:text-5xl uppercase mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
