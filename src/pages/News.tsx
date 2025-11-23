import { useState, FormEvent } from "react";
import { Calendar, ExternalLink, Instagram, Facebook } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

import prison_and_timeImage from "@/assets/news/prison_and_time.png";
import launchPartyImage from "@/assets/news/launch_party_2025.png";
import alexAndersonImage from "@/assets/news/alex_anderson.png";
import mendTeamImage from "@/assets/news/mend_team_2024.jpg";
import unitedWeEndRacismImage from "@/assets/news/united_we_end_racism.jpg";
import writingNewFuturesImage from "@/assets/news/writing_new_futures.jpg";
import whenIThinkOfFreedomImage from "@/assets/news/when_i_think_of_freedom.jpg";
import centralCurrentImage from "@/assets/news/central_current.png";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  slug: string;
  featured?: boolean;
  image: string;
  externalLink?: string;
};

const allNewsItems: NewsItem[] = [
  {
    id: 10,
    title: "Prison and Time",
    date: "November 23, 2025",
    category: "Awards and Recognitions",
    excerpt:
      "Congratulations to Marvin Wade and Evan Bode on 'Prison and Time.'",
    content:
      "Congratulations to Marvin Wade and Evan Bode on 'Prison and Time,' which premiered in Auburn at the Seymour Library on November 13 and will be screened in London, United Kingdom in December. In “Prison and Time,” Bode animates excerpts of an essay by writer and activist Marvin Wade, who speaks personally about his 25 years of incarceration—and the positive transformation he achieved in spite of, not because of, an inhumane prison system working against him.",
    slug: "prison-and-time-2025",
    featured: true,
    image: prison_and_timeImage,
    externalLink: "https://www.evanbode.net/project-mend/",
  },
  {
    id: 9,
    title: "When I Think of Freedom Showcase",
    date: "November 13, 2025",
    category: "Events",
    excerpt:
      "Writers and artists gathered at the Seymour Library in Auburn, NY for an evening of poetry, film, and conversation on freedom, incarceration, and repair.",
    content:
      "Project Mend writers and collaborators presented new work at the Seymour Library in Auburn, NY as part of the 'When I Think of Freedom' showcase. The event featured readings, film screenings, and conversations about incarceration, abolition, and narrative justice.",
    slug: "when-i-think-of-freedom-2025",
    image: whenIThinkOfFreedomImage,
  },
  {
    id: 8,
    title: "Launch Party for Mend 2025",
    date: "October 15, 2025",
    category: "Events",
    excerpt:
      "We celebrated the release of the 2025 issue of Mend with contributors, editors, and community partners.",
    content:
      "Our 2025 launch party brought together writers, artists, families, and community partners to celebrate the new issue of Mend. The evening included readings, films, and informal conversations about the work of storytelling after incarceration.",
    slug: "mend-2025-launch-party",
    image: launchPartyImage,
  },
  {
    id: 7,
    title: "Alex Anderson Featured in Mend",
    date: "September 10, 2025",
    category: "News",
    excerpt:
      "Artist and writer Alex Anderson joins the Project Mend community with a new series blending visual art and essay.",
    content:
      "Alex Anderson’s work appears in the latest issue of Mend, bringing together visual collage and essay to explore memory, confinement, and the possibility of new futures.",
    slug: "alex-anderson-feature",
    image: alexAndersonImage,
  },
  {
    id: 6,
    title: "Mend Editorial Team 2024–2025",
    date: "August 30, 2025",
    category: "News",
    excerpt:
      "Meet the editors who work on Mend, including systems-impacted writers, Syracuse students, and community partners.",
    content:
      "Our 2024–2025 editorial team includes systems-impacted writers, Syracuse University students, and community members who collaborate on editing, design, and outreach for Mend.",
    slug: "mend-editorial-team-2024-2025",
    image: mendTeamImage,
  },
  {
    id: 5,
    title: "United We End Racism",
    date: "April 20, 2025",
    category: "Events",
    excerpt:
      "Project Mend contributors joined local organizers for United We End Racism, sharing work on incarceration, race, and community repair.",
    content:
      "Project Mend writers participated in the United We End Racism gathering, sharing readings and multimedia work that confront the intersections of racism, policing, and incarceration.",
    slug: "united-we-end-racism-2025",
    image: unitedWeEndRacismImage,
  },
  {
    id: 4,
    title: "Writing New Futures",
    date: "March 10, 2025",
    category: "Workshops",
    excerpt:
      "A hands-on workshop series for systems-impacted writers focusing on storytelling, digital publishing, and community archiving.",
    content:
      "The Writing New Futures workshop series invites systems-impacted writers to experiment with multimodal storytelling, from print to podcasting, while building a shared community archive.",
    slug: "writing-new-futures-workshop",
    image: writingNewFuturesImage,
  },
  {
    id: 3,
    title: "Project Mend in Central Current",
    date: "January 25, 2025",
    category: "Press & Media",
    excerpt:
      "Central Current profiled Project Mend, highlighting our work with justice-impacted writers, artists, and families.",
    content:
      "Central Current’s profile of Project Mend discusses our community partnerships, editorial model, and the role of storytelling in imagining life after incarceration.",
    slug: "central-current-profile",
    image: centralCurrentImage,
    externalLink: "https://www.centralcurrent.org/", // update with the specific article link if you have it
  },
];

type TabKey = "all" | "news" | "events" | "press";

const getItemsForTab = (tab: TabKey): NewsItem[] => {
  if (tab === "all") return allNewsItems;

  if (tab === "news") {
    return allNewsItems.filter((item) =>
      item.category.toLowerCase().includes("news")
    );
  }

  if (tab === "events") {
    return allNewsItems.filter((item) =>
      ["event", "workshop"].some((word) =>
        item.category.toLowerCase().includes(word)
      )
    );
  }

  // "press"
  return allNewsItems.filter((item) =>
    ["press", "media"].some((word) =>
      item.category.toLowerCase().includes(word)
    )
  );
};

const STAY_CONNECTED_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzduAzI8yc_ytBRxbDzJkt-pxgTQab6I_hfMTpHNaw7DZarSGPH8SvM4_4LP2m73Loc/exec";

const NewsPage = () => {
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStayConnectedSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter both your name and email.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await fetch(STAY_CONNECTED_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      setName("");
      setEmail("");

      toast({
        title: "Thanks for staying connected",
        description:
          "We’ll keep you posted about new issues of Mend, events, and opportunities.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "We weren’t able to submit your information. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const itemsForActiveTab = getItemsForTab(activeTab);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          News &amp; Events
        </h1>
        <p className="mt-3 text-sm text-slate-700 md:text-base">
          Updates from{" "}
          <span className="italic">Mend</span>, including launches, events,
          workshops, and media features celebrating the work of systems-impacted
          writers and artists.
        </p>
      </header>

      <section className="mt-6">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabKey)}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="events">Events &amp; Workshops</TabsTrigger>
            <TabsTrigger value="press">Press &amp; Media</TabsTrigger>
          </TabsList>

          {/* One content block that updates based on activeTab */}
          <TabsContent value={activeTab}>
            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              {/* Left: news grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {itemsForActiveTab.map((item) => (
                  <article
                    key={item.id}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{item.date}</span>
                        </span>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>

                      <h2 className="text-lg font-semibold tracking-tight">
                        {item.title}
                      </h2>

                      <p className="text-sm text-slate-700">{item.excerpt}</p>

                      <div className="mt-auto pt-2">
                        {item.externalLink ? (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <a
                              href={item.externalLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Learn more
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Right: stay connected */}
              <aside className="h-fit rounded-2xl border bg-slate-50 p-6">
                <h2 className="text-lg font-semibold tracking-tight">
                  Stay connected
                </h2>
                <p className="mt-2 text-sm text-slate-700">
                  Share your email to receive updates about{" "}
                  <span className="italic">Mend</span> launches, workshops, and
                  events.
                </p>

                <form
                  onSubmit={handleStayConnectedSubmit}
                  className="mt-4 space-y-4"
                >
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="First and last name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>

                <div className="mt-6 border-t pt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                    Follow Project Mend
                  </p>
                  <div className="mt-2 flex gap-3">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-slate-700 hover:bg-slate-100"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-slate-700 hover:bg-slate-100"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default NewsPage;
