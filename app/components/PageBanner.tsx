interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
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
