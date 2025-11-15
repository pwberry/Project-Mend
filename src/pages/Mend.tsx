import { Button } from "@/components/ui/button";
import { BookOpen, Archive, Heart } from "lucide-react";

const MendPage = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mend: The Journal
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              An annual publication celebrating the lives and creative work of systems-impacted people
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground transition-all duration-300"
              asChild
            >
              <a 
                href="https://surface.syr.edu/mend/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2" size={20} />
                Read the Journal
              </a>
            </Button>
          </div>

          {/* About Mend */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                Amplifying voices and creative expression from within the justice system
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Annual Publication</h3>
              <p className="text-muted-foreground text-sm">
                A carefully curated collection released each year featuring diverse creative works
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Archive className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Full Archive</h3>
              <p className="text-muted-foreground text-sm">
                Access all past issues and explore our growing collection of creative works
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">About Mend</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mend is more than a journal—it's a testament to resilience, creativity, and the 
                transformative power of art. Each issue brings together poetry, prose, visual art, 
                and multimedia works created by systems-impacted individuals.
              </p>
              <p>
                Through Mend, we create space for authentic expression, challenge narratives about 
                incarceration, and celebrate the humanity and talent of our contributors. Every 
                piece published represents a voice that deserves to be heard.
              </p>
              <p>
                Our archive is freely accessible to everyone, ensuring that these powerful stories 
                and creative works can reach the widest possible audience. Explore past issues to 
                discover the depth and breadth of creative talent within our community.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in submitting your work to Mend?
            </p>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="/submit">Learn About Submissions</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MendPage;
