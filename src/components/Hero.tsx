import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Slideshow from "./Slideshow";

const Hero = () => {
  return (
    <section className="w-full md:max-h-[70vh]">
      <div className="grid md:grid-cols-2 md:h-full md:min-h-[500px] md:max-h-[70vh]">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 py-12 md:py-0 bg-background">
          <div className="max-w-xl text-center">
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Project Mend is a multimodal, grassroots-level, open-access national archive centered on the work of incarcerated and formerly incarcerated individuals and their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground transition-all duration-300"
              >
                <a 
                  href="https://surface.syr.edu/mend/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read the Journal
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Link to="/news">
                  News & Events
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Slideshow */}
        <div className="h-[400px] md:h-full md:min-h-0 overflow-hidden md:pr-[1in] pr-4">
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Hero;