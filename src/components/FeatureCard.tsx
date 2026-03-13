import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: string;
  comingSoon?: boolean;
  external?: boolean;
}

const FeatureCard = ({
  title,
  description,
  image,
  imageAlt,
  link,
  comingSoon = false,
  external = false,
}: FeatureCardProps) => {
  const content = (
    <div className="group h-full bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      <div className="h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {comingSoon && (
            <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
              Coming soon
            </span>
          )}
        </div>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </div>
  );

  if (comingSoon || !link) {
    return <div className="cursor-default">{content}</div>;
  }

  if (external) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={link}
      className="block h-full focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
    >
      {content}
    </Link>
  );
};

export default FeatureCard;
