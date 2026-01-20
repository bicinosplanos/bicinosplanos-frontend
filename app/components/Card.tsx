import type { ReactNode } from "react";
import { Link } from "react-router";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  icon?: ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  children?: ReactNode;
}

export function Card({
  title,
  description,
  image,
  imageAlt,
  link,
  icon,
  variant = "default",
  children,
}: CardProps) {
  const variantClasses = {
    default: "bg-white border-neutral-200 hover:border-primary-300",
    primary: "bg-primary-50 border-primary-200 hover:border-primary-400",
    secondary: "bg-secondary-50 border-secondary-200 hover:border-secondary-400",
    accent: "bg-accent-50 border-accent-200 hover:border-accent-400",
  };

  const content = (
    <>
      {image && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-4 text-primary-600">{icon}</div>}
        <h3 className="font-heading text-xl md:text-2xl uppercase mb-3 text-neutral-900">
          {title}
        </h3>
        {description && (
          <p className="font-body text-neutral-600 text-sm mb-4 line-clamp-3">{description}</p>
        )}
        {children}
      </div>
    </>
  );

  const baseClasses = `block border-2 rounded-lg transition-all duration-300 hover:shadow-lg ${variantClasses[variant]}`;

  if (link) {
    return (
      <Link to={link} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
