import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import journalImage from "@/assets/cards/mend_journal.png";
import apprenticeImage from "@/assets/cards/apprentice.png";
import podcastImage from "@/assets/cards/podcast.png";
import renderImage from "@/assets/cards/render_cover.png";
import prisonAndTimeImage from "@/assets/cards/prison_and_time.png";
import newsImage from "@/assets/cards/news_events.jpg";

const About = () => {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 pr-[1in] pl-4 md:pl-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Row 1: 3 cards */}
            <FeatureCard
              title="Mend, the journal"
              description="Mend is an annual publication celebrating the lives and creative work of systems-impacted people."
              image={journalImage}
              imageAlt="Stack of Mend journals"
              link="https://surface.syr.edu/mend/"
              external
            />
            
            <FeatureCard
              title="Digital Media Publishing Apprenticeship"
              description="Impacted people in Syracuse build multimodal storytelling skills through our apprenticeship. Learn more about becoming an editor."
              image={apprenticeImage}
              imageAlt="Apprenticeship program participants"
              link="/join"
              external={false} 

            />
            
           <FeatureCard
          title={
          <span>
          <em>Mend</em> Fences: Our New Podcast Series
          </span>
          }
          description={
          <span>
          In <em>Mend</em> Fences, our new podcast series, editors reflect on themes 
          that appear in the journal and in our archive.
          </span>
          }
          image={podcastImage}
          imageAlt="Podcast recording setup"
          comingSoon
          />
            
            <FeatureCard
            title={<span>Special Issue: <em>render</em></span>}
            description={
            <span>
            <em>render</em>, created by Writing and Rhetoric graduate Katherine Nikolau,
            celebrates the creative work and activism of nine justice-impacted artists.
            </span>
            }
            image={renderImage}
            imageAlt="Cover of render special issue"
            link="https://surface.syr.edu/mendbooks/1/"
            external
            />

            {/* Row 2: 2 cards */}
            <FeatureCard
              title="Artist-Writer Collaborations: Prison and Time"
              description="In 'Prison and Time,' Mend writer Marvin Wade and Evan Bode, an award-winning experimental animator, collaborate on a powerful film."
              image={prisonAndTimeImage}
              imageAlt="Prison and Time film still"
              link="https://vimeo.com/1124375859/d7a60f58dc?share=copy"
              external
            />
            
            <FeatureCard
              title="News and Events"
              description="Find out about upcoming news and events."
              image={newsImage}
              imageAlt="Community gathering at event"
              link="/news"
              external={false} 
            />
          </div>
        </div>
      </section>

      {/* About Project Mend Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 pr-[1in] pl-4 md:pl-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Project Mend
          </h2>
          
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              Project Mend focuses on writing and publishing as a means by which formerly incarcerated individuals and their families can reimagine themselves, their communities, and their futures. Self-expression through writing holds a potential for the transformation of not only those who create, but for those who may read the published works.
            </p>
            
            <p>
              The initiative consists of two parts: Mend Syracuse, a publishing apprenticeship for justice-impacted people and Mend, a journal featuring the works of anyone impacted by mass incarceration. Both components concern the power of writing to bring about change, exploring how individuals learn to write themselves into new identities and new lives.
            </p>
            
            <p>
              Project Mend is made possible through collaboration with the Center for Community Alternatives and through an HNY Post-Incarceration Humanities Partnership, which is generously supported by the Mellon Foundation and the CNY Humanities Corridor. Additionally, the project has been supported at Syracuse University by the Engaged Humanities Network, the Humanities Center, the SOURCE, Syracuse University Libraries, and the Department of Writing Studies, Rhetoric, and Composition.
            </p>
            
            <p>
              For more information, contact Patrick W. Berry at{" "}
              <a 
                href="mailto:mendthejournal@gmail.com" 
                className="text-primary hover:text-primary-light transition-colors underline"
              >
                mendthejournal@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="text-foreground/90 leading-relaxed">
              <p className="font-semibold">Patrick W. Berry</p>
              <p>Associate Professor</p>
              <p>Writing and Rhetoric</p>
              <p>239 HB Crouse Hall</p>
              <p>Syracuse University</p>
              <p>Syracuse, NY 13244</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
