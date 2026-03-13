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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              About Project Mend
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Project Mend is a public humanities initiative that supports the creative and intellectual work of people impacted by incarceration. Through publishing, storytelling, apprenticeship, and community collaboration, Project Mend creates platforms for writers, artists, and organizers to share their work with broader publics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              title="Mend, The Journal"
              description="Mend is an annual open-access publication celebrating the lives and creative work of people impacted by incarceration."
              image={journalImage}
              imageAlt="Cover image for Mend journal"
              link="/journal"
            />

            <FeatureCard
              title="Editorial Apprenticeship"
              description="Project Mend offers students and community collaborators opportunities to participate in editing, publishing, and public humanities work."
              image={apprenticeImage}
              imageAlt="Project Mend apprenticeship"
              link="/apprenticeship"
            />

            <FeatureCard
              title="Mend Fences Podcast"
              description="Mend Fences extends conversations emerging from the pages of Mend and the growing Project Mend archive."
              image={podcastImage}
              imageAlt="Mend Fences podcast artwork"
              link="/podcast"
            />

            <FeatureCard
              title="Renderings and Creative Work"
              description="Project Mend highlights multimedia and creative work that engages justice, memory, community, and transformation."
              image={renderImage}
              imageAlt="Creative renderings and visual work"
              link="/renderings"
            />

            <FeatureCard
              title="Prison and Time"
              description="This documentary project explores incarceration, time, education, and the humanities through collaborative storytelling and film."
              image={prisonAndTimeImage}
              imageAlt="Prison and Time project image"
              link="/prison-and-time"
            />

            <FeatureCard
              title="News and Events"
              description="Read the latest updates about Project Mend, including publications, podcast episodes, events, and partnerships."
              image={newsImage}
              imageAlt="Project Mend news and events"
              link="/news"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
