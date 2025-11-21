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
    date: "November 2025",
    category: "In The Media",
    excerpt:
      "The Coalition for Community Writing honored Project Mend with its 2025 Outstanding College-Community Partnership Award.",
    content:
      "The Coalition for Community Writing honored Project Mend with its 2025 Outstanding College-Community Partnership Award, recognizing the initiative's efforts to empower justice-impacted individuals through writing and publishing.",
    slug: "writing-new-futures",
    featured: true,
    image: writingNewFuturesImage,
    externalLink:
      "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/writing-new-futures/",
  },
  {
    id: "7",
    title: "When I Think of Freedom...",
    date: "July 2025",
    category: "In The Media",
    excerpt: "Alexis Kirkpatrick reflects on a recent public reading and workshop.",
    content:
      "Alexis Kirkpatrick, a biology major, forensic science minor and undergraduate research assistant for Project Mend, reflects on a recent public reading and workshop highlighting the creative work of individuals impacted by the criminal legal system.",
    slug: "when-i-think-of-freedom",
    featured: true,
    image: whenIThinkOfFreedomImage,
    externalLink:
      "https://artsandsciences.syracuse.edu/writing-studies-rhetoric-and-composition/news/when-i-think-of-freedom/",
  },
  {
    id: "8",
    title:
      "How Project Mend is helping formerly incarcerated people and their families tell their stories",
    date: "March 27, 2025",
    category: "In The Media",
    excerpt:
      "Central Current features Project Mend's work with formerly incarcerated individuals.",
    content:
      "How Project Mend is helping formerly incarcerated people and their families tel
