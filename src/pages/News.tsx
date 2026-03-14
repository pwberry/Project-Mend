import { Calendar, ExternalLink, Music, Podcast, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

import mendFencesArtImage from "@/assets/news/mend_fences_art.png";
import projectMendLaunchImage from "@/assets/news/project_mend_launch.png";
import johnnyMoiraImage from "@/assets/news/johnny_moira.jpg";
import launchPartyImage from "@/assets/news/launch_party_2025.png";
import alexAndersonImage from "@/assets/news/alex_anderson.png";
import mendTeamImage from "@/assets/news/mend_team_2024.jpg";
import unitedWeEndRacismImage from "@/assets/news/united_we_end_racism.jpg";
import writingNewFuturesImage from "@/assets/news/writing_new_futures.jpg";
import whenIThinkOfFreedomImage from "@/assets/news/when_i_think_of_freedom.jpg";
import centralCurrentImage from "@/assets/news/central_current.jpg";
import prison_and_timeImage from "@/assets/news/prison_and_time.png";

interface Article {
  id: string;
  title: string;
  date: string;
  category:
    | "Featured"
    | "Client Stories"
    | "In The Media"
    | "Our News"
    | "Awards and Recognitions";
  excerpt: string;
  content: string;
  image?: string;
  slug: string;
  featured: boolean;
  externalLink?: string;
  isVideo?: boolean;
  videoId?: string;
  secondVideoId?: string;
  zoomRegistrationLink?: string;
  spotifyLink?: string;
  amazonLink?: string;
  appleLink?: string;
}

const articles: Article[] = [
  {
    id: "12",
    title: "Celebrating the 2026 Issue of Mend",
    date: "March 21, 2026",
    category: "Featured",
    excerpt:
      "Join us as we celebrate the fourth issue of <em>Mend</em> and showcase art and films that are now part of the Project Mend archive.",
    content: `We are thrilled to celebrate the fourth issue of <em>Mend</em>,  showcasing the writing and art of people impacted by the criminal legal system.

At the event, we will celebrate the journal while also showcasing art and films that are now part of the Project Mend archive.`,
    slug: "celebrating-2026-issue-mend",
    featured: true,
    image: projectMendLaunchImage,
    zoomRegistrationLink:
      "https://syracuseuniversity.zoom.us/meeting/register/G9tomhACShySYQpOEELq9w",
  },

  {
    id: "13",
    title: "Project Mend Launches New Podcast Series: Mend Fences",
    date: "March 13, 2026",
    category: "Featured",
    excerpt:
      "Project Mend announces Mend Fences, a new podcast series extending the conversations emerging from the pages of Mend.",
    content: `Project Mend is pleased to announce the launch of <em>Mend Fences</em>, a new podcast series that extends the conversations emerging from the pages of <em>Mend</em> and the Project Mend digital archive.

In <em>Mend Fences</em>, editors and collaborators reflect on themes that appear in the journal and in the growing Project Mend archive. Through conversation and storytelling, the podcast explores the creative work of writers and artists who have been impacted by incarceration.

The first episode of <em>Mend Fences</em> was inspired by Rebekah Nilsen’s “Permission to Grieve,” which appears in the 2026 issue of <em>Mend</em>.

<em>Mend Fences</em> is available on major podcast platforms.`,
    slug: "mend-fences-podcast-launch",
    featured: true,
    image: mendFencesArtImage,
    spotifyLink: "https://open.spotify.com/show/78G3PLCIz4Hhhr9r6pnqmU",
    amazonLink:
      "https://music.amazon.com/podcasts/a91b8d75-168c-4d90-9bd5-0cbe5e264661/mend-fences",
    appleLink: "https://podcasts.apple.com/us/podcast/mend-fences/id1884876834",
  },

  {
    id: "14",
    title: "Is Writing Enough?",
    date: "February 23, 2026",
    category: "In The Media",
    excerpt:
      "Drew Murphy and Camren Wyche reflect on creativity and justice-impacted storytelling.",
    content: `Congratulations to Drew Murphy and Camren Wyche on their article “Is Writing Enough?” reflecting on a Humanities Center Syracuse Symposium event.`,
    slug: "is-writing-enough",
    featured: true,
    image: johnnyMoiraImage,
    externalLink:
      "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/is-writing-enough/",
  },

  {
    id: "11",
    title: "Prison and Time",
    date: "November 23, 2025",
    category: "Awards and Recognitions",
    excerpt:
      "Congratulations to Marvin Wade and Evan Bode on their film Prison and Time.",
    content:
      "Prison and Time premiered in Auburn at the Seymour Library and later screened in London.",
    slug: "prison-and-time-2025",
    featured: true,
    image: prison_and_timeImage,
    externalLink: "https://www.evanbode.net/project-mend/",
  },

  {
    id: "9",
    title: "Formerly incarcerated writers talk freedom at Auburn library",
    date: "November 13, 2025",
    category: "In The Media",
    excerpt:
      "The Seymour Library in Auburn hosted a reading featuring justice-impacted writers.",
    content:
      "The event highlighted writing and storytelling from people impacted by incarceration.",
    slug: "project-mend-at-auburn",
    featured: true,
    externalLink:
      "https://auburnpub.com/news/local/article_c919b805-e55b-476b-8519-ccbc0c065053.html",
  },

  {
    id: "6",
    title: "Writing New Futures",
    date: "November 11, 2025",
    category: "In The Media",
    excerpt:
      "Project Mend receives the 2025 Outstanding College-Community Partnership Award.",
    content:
      "The Coalition for Community Writing honored Project Mend for its collaborative work with justice-impacted communities.",
    slug: "writing-new-futures",
    featured: true,
    image: writingNewFuturesImage,
    externalLink:
      "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/writing-new-futures/",
  },

  {
    id: "7",
    title: "When I Think of Freedom...",
    date: "July 30, 2025",
    category: "In The Media",
    excerpt:
      "Alexis Kirkpatrick reflects on a public reading and creative workshop.",
    content:
      "The event showcased creative writing from individuals impacted by incarceration.",
    slug: "when-i-think-of-freedom",
    featured: true,
    image: whenIThinkOfFreedomImage,
    externalLink:
      "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/when-i-think-of-freedom/",
  },

  {
    id: "8",
    title:
      "How Project Mend is helping formerly incarcerated people tell their stories",
    date: "March 27, 2025",
    category: "In The Media",
    excerpt:
      "Central Current features Project Mend's work with formerly incarcerated individuals.",
    content:
      "Central Current highlights storytelling initiatives from Project Mend.",
    slug: "central-current-project-mend",
    featured: true,
    image: centralCurrentImage,
    externalLink:
      "https://centralcurrent.org/how-project-mend-is-helping-formerly-incarcerated-people-and-their-families-tell-their-stories/",
  },

  {
    id: "1",
    title: "Celebrating the 2025 Issue of Mend",
    date: "February 15, 2025",
    category: "Featured",
    excerpt: "Celebrating the third issue of Mend.",
    content: "The third issue of Mend highlights writing and art.",
    slug: "celebrating-2025-issue-mend",
    featured: true,
    image: launchPartyImage,
  },

  {
    id: "3",
    title: "Alex Anderson visits Project Mend",
    date: "September 19, 2024",
    category: "Our News",
    excerpt:
      "Alex Anderson from Reentry Theater of Harlem joined us to share insights.",
    content:
      "Alex Anderson spoke about theater, storytelling, and reentry programs.",
    slug: "alex-anderson-visit",
    featured: true,
    image: alexAndersonImage,
  },

  {
    id: "4",
    title: "Congratulations to Mend editor Ilhy Gomez Del Campo Rojas",
    date: "May 2024",
    category: "Client Stories",
    excerpt: "Celebrating the achievements of a Mend editor.",
    content:
      "Ilhy Gomez Del Campo Rojas continues to make meaningful contributions to the publication.",
    slug: "congratulations-ilhy-gomez",
    featured: true,
    image: mendTeamImage,
  },

  {
    id: "5",
    title: "United We End Racism Festival",
    date: "June 8, 2024",
    category: "Our News",
    excerpt:
      "Project Mend participated in the United We End Racism community festival.",
    content:
      "The festival highlighted community collaboration and storytelling.",
    slug: "united-we-end-racism-festival",
    featured: true,
    image: unitedWeEndRacismImage,
  },
];

const News = () => {
  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-10">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b pb-10"
            >
              <div className="flex justify-center">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-w-xl w-full object-contain"
                  />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} />
                  <time>{article.date}</time>
                </div>

                <h3 className="text-2xl font-bold mb-4">{article.title}</h3>

                {article.id === "12" ? (
                  <div className="text-muted-foreground leading-relaxed space-y-5">
                    <p>
                      We are thrilled to celebrate the fourth issue of <em>Mend</em>,
                      marking the fourth year of this collaborative project
                      showcasing the writing and art of people impacted by the
                      criminal legal system.
                    </p>

                    <p>
                      At the event, we will celebrate the journal while also
                      showcasing art and films that are now part of the Project Mend
                      archive.
                    </p>

                    <div className="rounded-lg border bg-muted/40 p-4 space-y-2 text-sm md:text-base">
                      <p>
                        <span className="font-semibold">Date:</span> Saturday, March
                        21, 2026
                      </p>
                      <p>
                        <span className="font-semibold">Time:</span> 12:00 p.m. –
                        1:30 p.m.
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span> Art in the
                        Atrium, 201 E Washington Street, Syracuse, NY 13202
                      </p>
                      <p>
                        <span className="font-semibold">Remote option:</span> Attend
                        on Zoom
                      </p>
                    </div>

                    <p>
                      This gathering highlights the continued growth of Project Mend
                      and the powerful creative work of our contributors and
                      collaborators.
                    </p>

                    <p>This event will include a light lunch.</p>
                  </div>
                ) : (
                  <div
                    className="text-muted-foreground leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                )}

                {(article.spotifyLink ||
                  article.amazonLink ||
                  article.appleLink) && (
                  <div className="mt-6 flex gap-3 flex-wrap">
                    {article.spotifyLink && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(article.spotifyLink, "_blank")
                        }
                      >
                        <Music size={16} className="mr-2" />
                        Spotify
                      </Button>
                    )}

                    {article.amazonLink && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(article.amazonLink, "_blank")
                        }
                      >
                        <Headphones size={16} className="mr-2" />
                        Amazon Music
                      </Button>
                    )}

                    {article.appleLink && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(article.appleLink, "_blank")
                        }
                      >
                        <Podcast size={16} className="mr-2" />
                        Apple Podcasts
                      </Button>
                    )}
                  </div>
                )}

                {article.externalLink && (
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      onClick={() => window.open(article.externalLink, "_blank")}
                    >
                      Read More
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                )}

                {article.zoomRegistrationLink && (
                  <div className="mt-6">
                    <Button
                      onClick={() =>
                        window.open(article.zoomRegistrationLink, "_blank")
                      }
                    >
                      Register for Zoom
                    </Button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
