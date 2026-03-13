import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface FeatureCardProps {
  title: ReactNode;
  description: ReactNode;
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

      <div className="p-6 flex flex-col gap-3 h-full">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold leading-snug">{title}</h3>
          {external && link && (
            <ExternalLink className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
          )}
        </div>

        <div className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </div>

        {comingSoon && (
          <p className="text-sm font-medium text-primary pt-2">Coming soon</p>
        )}
      </div>
    </div>
  );

  if (comingSoon || !link) {
    return content;
  }

  if (external) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={link} className="block h-full">
      {content}
    </Link>
  );
};

export default FeatureCard;
