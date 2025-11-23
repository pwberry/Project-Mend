import syracuseLogo from "@/assets/footer/syracuse.png";
import humanitiesNyLogo from "@/assets/footer/humanities_ny.png";
import ccaLogo from "@/assets/footer/cca.png";
import pinwheelLogo from "@/assets/footer/pinwheel.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Partner Logos with Social Media */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          {/* Social Media - Left Side */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect With Us</span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089772678410"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/mend_syracuse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Divider - Desktop Only */}
          <div className="hidden lg:block h-20 w-px bg-border"></div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img 
              src={syracuseLogo} 
              alt="Syracuse University" 
              className="h-16 w-auto object-contain"
            />
            <img 
              src={humanitiesNyLogo} 
              alt="Humanities New York" 
              className="h-16 w-auto object-contain"
            />
            <img 
              src={ccaLogo} 
              alt="Center for Community Alternatives" 
              className="h-16 w-auto object-contain"
            />
            <img 
              src={pinwheelLogo} 
              alt="Partner Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t border-border pt-6">
          <p>© {new Date().getFullYear()} Project Mend. All rights reserved.</p>
          <a 
            href="mailto:mend@project-mend.net" 
            className="hover:text-primary transition-colors"
            aria-label="Email us"
          >
            mend@project-mend.net
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
