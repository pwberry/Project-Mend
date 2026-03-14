import { useState, FormEvent } from "react";
import {
  Calendar,
  ExternalLink,
  Instagram,
  Facebook,
  Music,
  Podcast,
  Headphones
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
      "Join us as we celebrate the fourth issue of Mend and showcase art and films that are now part of the Project Mend archive.",
    content: `We are thrilled to celebrate the fourth issue of <em>Mend</em>, marking the fourth year of this collaborative project showcasing the writing and art of people impacted by the criminal legal system.

At the event, we will celebrate the journal while also showcasing art and films that are now part of the Project Mend archive.

📅 Date: Saturday, March 21, 2026
⏰ Time: 12:00 p.m. - 1:30 p.m.
📍 Location: Art in the Atrium, 201 E Washington Street, Syracuse, NY 13202 and on Zoom

This event will include a light lunch.

The event will also be available on Zoom for those who wish to attend remotely.

This gathering highlights the continued growth of Project Mend and the powerful creative work of our contributors and collaborators.`,
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
      "Project Mend is pleased to announce the launch of Mend Fences, a new podcast series.",
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
    appleLink:
      "https://podcastsconnect.apple.com/my-podcasts/show/mend-fences/09cee090-07ae-4827-bc6b-00013d9300a9",
  },

  /* remaining articles unchanged */

];

const News = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const featuredArticles = articles.filter((article) => article.featured);

  const handleSignupSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "You've been added to our mailing list.",
    });

    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-8">

          {featuredArticles.map((article) => (

            <article
              key={article.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 border-b pb-8 ${
                article.id === "12" ? "bg-muted/20 rounded-xl p-8 shadow-sm" : ""
              }`}
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

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <time>{article.date}</time>
                </div>

                <h3
                  className={`font-bold mb-4 ${
                    article.id === "12" ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {article.id === "12" ? (
                    <>
                      Celebrating the 2026 Issue of <em>Mend</em>
                    </>
                  ) : article.id === "13" ? (
                    <>
                      Project Mend Launches New Podcast Series:{" "}
                      <em>Mend Fences</em>
                    </>
                  ) : (
                    article.title
                  )}
                </h3>

                {article.id === "12" ? (
                  <>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      We are thrilled to celebrate the fourth issue of{" "}
                      <em>Mend</em>, marking the fourth year of this
                      collaborative project showcasing the writing and art of
                      people impacted by the criminal legal system.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      At the event, we will celebrate the journal while also
                      showcasing art and films that are now part of the Project
                      Mend archive.
                    </p>

                    <div className="bg-muted/40 border rounded-lg p-6 space-y-4 text-sm md:text-base">

                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>
                          <strong>Date:</strong> Saturday, March 21, 2026
                        </span>
                      </div>

                      <div>
                        <strong>Time:</strong> 12:00 p.m. - 1:30 p.m.
                      </div>

                      <div>
                        <strong>Location:</strong> Art in the Atrium
                        <br />
                        201 E Washington Street
                        <br />
                        Syracuse, NY 13202
                      </div>

                      <div>
                        <strong>Also available:</strong> Attend on Zoom
                      </div>

                    </div>

                    <p className="text-muted-foreground leading-relaxed mt-6">
                      This event will include a light lunch. This gathering
                      highlights the continued growth of Project Mend and the
                      powerful creative work of our contributors and
                      collaborators.
                    </p>
                  </>
                ) : (
                  <div
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                )}

                {(article.spotifyLink || article.amazonLink || article.appleLink) && (
                  <div className="mt-6 flex flex-wrap gap-3">

                    {article.spotifyLink && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(article.spotifyLink, "_blank")
                        }
                      >
                        <Music size={16} />
                        Spotify
                      </Button>
                    )}

                    {article.amazonLink && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(article.amazonLink, "_blank")
                        }
                      >
                        <Headphones size={16} />
                        Amazon Music
                      </Button>
                    )}

                    {article.appleLink && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(article.appleLink, "_blank")
                        }
                      >
                        <Podcast size={16} />
                        Apple Podcasts
                      </Button>
                    )}

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
