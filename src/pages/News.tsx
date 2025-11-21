import { useState, FormEvent } from "react";
import { Calendar, ExternalLink, Instagram, Facebook } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";

import launchPartyImage from "@/assets/news/launch_party_2025.png";
import alexAndersonImage from "@/assets/news/alex_anderson.png";
import mendTeamImage from "@/assets/news/mend_team_2024.jpg";
import unitedWeEndRacismImage from "@/assets/news/united_we_end_racism.jpg";
import writingNewFuturesImage from "@/assets/news/writing_new_futures.jpg";
import whenIThinkOfFreedomImage from "@/assets/news/when_i_think_of_freedom.jpg"; // adjust extension if different

type NewsItem = {
  id: number;
  title: string;
  date: string;
  category: "events" | "news";
  description: string;
  image: string;
  link?: string;
  external?: boolean;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Project Mend Launch Party, 2025",
    date: "March 20, 2025",
    category: "events",
    description:
      "We celebrated the official launch of Mend with contributors, editors, community partners, and supporters. The evening featured readings, short film screenings, and conversations about narrative justice and digital storytelling.",
    image: launchPartyImage,
  },
  {
    id: 2,
    title: "Alex Anderson: Writing New Futures",
    date: "February 10, 2025",
    category: "news",
    description:
      "Alex Anderson, Mend editor and contributor, discussed the role of writing, film, and community in building futures beyond the criminal legal system.",
    image: alexAndersonImage,
  },
  {
    id: 3,
    title: "Mend Editorial Team, 2024",
    date: "December 15, 2024",
    category: "news",
    description:
      "Our 2024 editorial cohort worked across print, film, and podcast projects, building an open-access archive that centers systems-impacted voices.",
    image: mendTeamImage,
  },
  {
    id: 4,
    title: "United We End Racism",
    date: "October 28, 2024",
    category: "events",
    description:
      "Project Mend participated in United We End Racism, sharing work that connects racial justice, abolitionist futures, and creative expression.",
    image: unitedWeEndRacismImage,
  },
  {
    id: 5,
    title: "Writing New Futures: Community Conversation",
    date: "September 12, 2024",
    category: "events",
    description:
      "A community conversation on storytelling, grief, and repair, featuring Mend contributors and Syracuse-area partners.",
    image: writingNewFuturesImage,
  },
  {
    id: 6,
    title: "When I Think of Freedom",
    date: "April 18, 2024",
    category: "events",
    description:
      "A public program focused on freedom, confinement, and imagination, with readings and multimedia work by Mend contributors.",
    image: whenIThinkOfFreedomImage,
  },
];

const ITEMS_PER_PAGE = 3;

const News = () => {
  const [activeTab, setActiveTab] = useState<"all" | "events" | "news">("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzduAzI8yc_ytBRxbDzJkt-pxgTQab6I_hfMTpHNaw7DZarSGPH8SvM4_4LP2m73Loc/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      }
    );

    const rawText = await response.text();
    console.log("Raw response from Apps Script:", rawText);

    let data: any = null;
    try {
      data = JSON.parse(rawText);
    } catch {
      // if it wasn't valid JSON, leave data = null
    }

    if (!response.ok || (data && data.error)) {
      throw new Error(data?.error || `Submission failed (${response.status})`);
    }

    setName("");
    setEmail("");

    toast?.({
      title: "Thank you!",
      description: "You’ve been added to the Project Mend mailing list.",
    });
  } catch (error) {
    console.error("Submit error:", error);
    toast?.({
      title: "Something went wrong",
      description: "We couldn’t submit your info. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const filteredNews =
    activeTab === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeTab);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleTabChange = (value: string) => {
    if (value === "all" || value === "events" || value === "news") {
      setActiveTab(value);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              News & Events
            </h1>
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              Keep up with Project Mend’s readings, film screenings, workshops,
              and community gatherings, along with updates from our editors and
              contributors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-[2fr,1fr]">
          {/* Left: News List */}
          <div>
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6 space-y-6">
                {paginatedNews.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 rounded-xl border bg-card p-4 md:p-5 shadow-sm"
                  >
                    <div className="md:w-1/3">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-48 w-full object-cover md:h-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                          <Badge variant="outline" className="ml-2">
                            {item.category === "events" ? "Event" : "News"}
                          </Badge>
                        </div>
                        <h2 className="text-xl font-semibold leading-snug">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      {item.link && (
                        <div className="mt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="gap-2"
                          >
                            <a
                              href={item.link}
                              target={item.external ? "_blank" : "_self"}
                              rel="noreferrer"
                            >
                              Learn more
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-6 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(currentPage - 1);
                            }}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, index) => {
                          const page = index + 1;

                          // Simple version: show all pages if few, else first, last, current, neighbors
                          if (
                            totalPages <= 5 ||
                            page === 1 ||
                            page === totalPages ||
                            Math.abs(page - currentPage) <= 1
                          ) {
                            return (
                              <PaginationItem key={page}>
                                <PaginationLink
                                  href="#"
                                  isActive={page === currentPage}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(page);
                                  }}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }

                          if (
                            page === 2 && currentPage > 3
                          ) {
                            return (
                              <PaginationItem key="ellipsis-start">
                                <PaginationEllipsis />
                              </PaginationItem>
                            );
                          }

                          if (
                            page === totalPages - 1 &&
                            currentPage < totalPages - 2
                          ) {
                            return (
                              <PaginationItem key="ellipsis-end">
                                <PaginationEllipsis />
                              </PaginationItem>
                            );
                          }

                          return null;
                        })}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(currentPage + 1);
                            }}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </TabsContent>

              {/* We reuse same list for other tabs, since filtering is done above */}
              <TabsContent value="events">
                {/* Intentionally left empty because filteredNews already handles category.
                    The actual rendered list is in the "all" content bound to paginatedNews. */}
              </TabsContent>
              <TabsContent value="news">
                {/* Same as above. Tabs just switch filter; content uses same UI. */}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right: Stay Connected Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Stay Connected</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign up to hear about upcoming Mend issues, community events,
                screenings, and workshops.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-left">
                    <Label htmlFor="newsletter-name" className="mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="newsletter-name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-left">
                    <Label htmlFor="newsletter-email" className="mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Subscribe to Newsletter"}
                </Button>
              </form>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Follow Project Mend</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with us on social media for new work, events, and calls
                for submissions.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.instagram.com/projectmend/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Project Mend on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Project Mend on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default News;
