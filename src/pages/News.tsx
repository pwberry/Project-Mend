import { useState } from "react";
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
import whenIThinkOfFreedomImage from "@/assets/news/when_i_think_of_freedom.jpg";
import centralCurrentImage from "@/assets/news/central_current.jpg";

interface Article {
  id: string;
  title: string;
  date: string;
  category: "Featured" | "Client Stories" | "In The Media" | "Our News";
  excerpt: string;
  content: string;
  image?: string;
  slug: string;
  featured: boolean;
  externalLink?: string;
  isVideo?: boolean;
  videoId?: string;
}

const articles: Article[] = [
  {
    id: "6",
    title: "Writing New Futures",
    date: "January 2025",
    category: "In The Media",
    excerpt: "The Coalition for Community Writing honored Project Mend with its 2025 Outstanding College-Community Partnership Award.",
    content: "The Coalition for Community Writing honored Project Mend with its 2025 Outstanding College-Community Partnership Award, recognizing the initiative's efforts to empower justice-impacted individuals through writing and publishing.",
    slug: "writing-new-futures",
    featured: true,
    image: writingNewFuturesImage,
    externalLink: "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/writing-new-futures/"
  },
  {
    id: "7",
    title: "When I Think of Freedom...",
    date: "December 2024",
    category: "In The Media",
    excerpt: "Alexis Kirkpatrick reflects on a recent public reading and workshop.",
    content: "Alexis Kirkpatrick, a biology major, forensic science minor and undergraduate research assistant for Project Mend, reflects on a recent public reading and workshop highlighting the creative work of individuals impacted by the criminal legal system.",
    slug: "when-i-think-of-freedom",
    featured: true,
    image: whenIThinkOfFreedomImage,
    externalLink: "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/when-i-think-of-freedom/"
  },
  {
    id: "8",
    title: "How Project Mend is helping formerly incarcerated people and their families tell their stories",
    date: "March 27, 2025",
    category: "In The Media",
    excerpt: "Central Current features Project Mend's work with formerly incarcerated individuals.",
    content: "How Project Mend is helping formerly incarcerated people and their families tell their stories. Project Mend was started by Syracuse University professor Patrick W. Berry, whose own family member's incarceration prompted him to help incarcerated people tell their stories.",
    slug: "central-current-project-mend",
    featured: true,
    image: centralCurrentImage,
    externalLink: "https://centralcurrent.org/how-project-mend-is-helping-formerly-incarcerated-people-and-their-families-tell-their-stories/"
  },
  {
    id: "1",
    title: "Celebrating the 2025 Issue of Mend",
    date: "February 15, 2025",
    category: "Featured",
    excerpt: "It's hard to believe that we have completed the third issue of Mend, a publication showcasing the writing and art of those impacted by the criminal legal system.",
    content: `It's hard to believe that we have completed the third issue of Mend, a publication showcasing the writing and art of those impacted by the criminal legal system.

Our launch party will be a hybrid event, where we will celebrate the 2025 issue of Mend and render, a new publication exploring the lives and creative works of impacted artists produced by Katherine Nikolau, a Writing and Rhetoric major who graduated in December through a SOURCE research grant.

📅 Date: Saturday, February 15
⏰ Time: 12:00 p.m. - 1:30 p.m. ET
📍 Location: Syracuse Central Library, Community Room, 447 S. Salina St., Syracuse, NY 13202 and via Zoom

This event will include a light lunch.

Project Mend is made possible through collaboration with the Center for Community Alternatives and through an HNY Post-Incarceration Humanities Partnership, which is generously supported by the Mellon Foundation. Additionally, the project has been supported at Syracuse University by: Engaged Humanities Network, The Humanities Center, SOURCE, Syracuse University Libraries, and the Department of Writing Studies, Rhetoric, and Composition.

For accommodations or more information: Contact Patrick W. Berry at pwberry@syr.edu by February 11.`,
    slug: "celebrating-2025-issue-mend",
    featured: true,
    image: launchPartyImage
  },
  {
    id: "2",
    title: "HNY Post-Incarceration Humanities Partnership Convening",
    date: "May 21, 2024",
    category: "Our News",
    excerpt: "Humanities New York hosted an in-person convening for our Post-Incarceration Humanities Partnership (PIHP) grant cohort members.",
    content: "On May 21, 2024, Humanities New York hosted an in-person convening for our Post-Incarceration Humanities Partnership (PIHP) grant cohort members, bringing together organizations working to support returning citizens through humanities programming.",
    slug: "hny-pihp-convening",
    featured: true,
    isVideo: true,
    videoId: "Iez6a6fYUZ8"
  },
  {
    id: "3",
    title: "Delighted to have Alex Anderson from Reentry Theater of Harlem join us on Thursday, September 19.",
    date: "September 19, 2024",
    category: "Our News",
    excerpt: "Delighted to have Alex Anderson from Reentry Theater of Harlem join us on Thursday, September 19.",
    content: "We were delighted to have Alex Anderson from Reentry Theater of Harlem join us on Thursday, September 19. Alex shared insights from his work in theater and reentry programs, inspiring our community with powerful stories of transformation and creativity.",
    slug: "alex-anderson-visit",
    featured: true,
    image: alexAndersonImage
  },
  {
    id: "4",
    title: "Congratulations to Mend editor Ilhy Gomez Del Campo Rojas..",
    date: "May 2024",
    category: "Client Stories",
    excerpt: "Celebrating the achievements of our dedicated Mend editorial team member.",
    content: "Congratulations to Mend editor Ilhy Gomez Del Campo Rojas for their outstanding contributions to the publication. Their dedication and editorial expertise have been instrumental in bringing impactful stories to our community.",
    slug: "congratulations-ilhy-gomez",
    featured: true,
    image: mendTeamImage
  },
  {
    id: "5",
    title: "On June 8th, 2024, Project Mend had the great opportunity of participating in the community festival United We End Racism",
    date: "June 8, 2024",
    category: "Our News",
    excerpt: "On June 8th, 2024, Project Mend had the great opportunity of participating in the community festival United We End Racism.",
    content: "On June 8th, 2024, Project Mend had the great opportunity of participating in the community festival United We End Racism. This community event brought together diverse voices and perspectives in the fight against systemic racism and social injustice.",
    slug: "united-we-end-racism-festival",
    featured: true,
    image: unitedWeEndRacismImage
  },
];

const ITEMS_PER_PAGE = 6;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const featuredArticles = articles.filter(article => article.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    // TODO: Implement newsletter signup
    toast({
      title: "Success!",
      description: "You've been added to our mailing list.",
    });
    setName("");
    setEmail("");
  };

  const getCategoryColor = (category: Article["category"]) => {
    switch (category) {
      case "Featured":
        return "default";
      case "Client Stories":
        return "secondary";
      case "In The Media":
        return "outline";
      case "Our News":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              News & Events
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Stay updated on Project Mend announcements, events, and community happenings
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.facebook.com/ProjectMendSU", "_blank")}
                className="gap-2"
              >
                <Facebook size={20} />
                Join us on Facebook
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.instagram.com/projectmend/", "_blank")}
                className="gap-2"
              >
                <Instagram size={20} />
                Join us on Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* All Articles - Image Left, Text Right */}
          {featuredArticles.length > 0 && (
            <section className="mb-8">
              <div className="space-y-8">
                {featuredArticles.map((article) => {
                  const ArticleWrapper = article.externalLink ? 'a' : 'article';
                  const wrapperProps = article.externalLink 
                    ? { 
                        href: article.externalLink, 
                        target: "_blank", 
                        rel: "noopener noreferrer",
                        className: "block cursor-pointer hover:opacity-95 transition-opacity"
                      }
                    : {};
                  
                  return (
                    <ArticleWrapper key={article.id} {...wrapperProps}>
                      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-border pb-8">
                        {/* Left: Image or Video */}
                        <div className="overflow-hidden rounded-lg">
                          {article.isVideo && article.videoId ? (
                            <div className="aspect-video">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${article.videoId}`}
                                title={article.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                              />
                            </div>
                          ) : article.image ? (
                            <img
                              src={article.image}
                              alt={article.title}
                              className={`w-full h-auto object-contain ${
                                article.id === "6" || article.id === "7" ? "max-h-64" : ""
                              }`}
                            />
                          ) : (
                            <div className="w-full h-64 bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">No image available</span>
                            </div>
                          )}
                        </div>

                        {/* Right: Text Content */}
                        <div className="relative">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar size={14} />
                            <time dateTime={article.date}>{article.date}</time>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                            {article.title}
                          </h3>
                          <div className="relative">
                            <div className="text-muted-foreground leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                              {article.content}
                            </div>
                            {article.externalLink && (
                              <div className="mt-4 pt-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                                <p className="relative text-primary font-medium hover:underline cursor-pointer flex items-center gap-2">
                                  Click here to read more
                                  <ExternalLink size={16} />
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    </ArticleWrapper>
                  );
                })}
              </div>
            </section>
          )}


          {/* Newsletter Signup */}
          <section className="mt-16 bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Connected
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our mailing list to receive the latest news, events, and updates from Project Mend.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
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
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
