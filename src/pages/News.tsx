import { useState, FormEvent } from "react";
import { Calendar, ExternalLink, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import projectMendLaunchImage from "@/assets/news/project_mend_launch.png";
import launchPartyImage from "@/assets/news/launch_party_2025.png";
import alexAndersonImage from "@/assets/news/alex_anderson.png";
import mendTeamImage from "@/assets/news/mend_team_2024.jpg";
import unitedWeEndRacismImage from "@/assets/news/united_we_end_racism.jpg";
import writingNewFuturesImage from "@/assets/news/writing_new_futures.jpg";
import whenIThinkOfFreedomImage from "@/assets/news/when_i_think_of_freedom.jpg";
import centralCurrentImage from "@/assets/news/central_current.jpg";
import prisonAndTimeImage from "@/assets/news/prison_and_time.png";
import mendFencesArtImage from "@/assets/news/mend_fences_art.png";

export default function News() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    toast({
      title: "Thank you!",
      description: "You have been added to the Project Mend mailing list.",
    });

    setEmail("");
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">

      {/* PAGE HEADER */}

      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold">News</h1>
        <p className="text-muted-foreground">
          Updates from Project Mend, including publications, events, and
          collaborations with artists, writers, and community partners.
        </p>
      </div>

      {/* NEWS ITEMS */}

      <div className="space-y-20">

        {/* NEW PODCAST ANNOUNCEMENT */}

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <img
            src={mendFencesArtImage}
            alt="Artwork for the Mend Fences podcast series"
            className="rounded-lg w-full object-cover"
          />

          <div className="md:col-span-2 space-y-4">

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              March 2026
            </div>

            <h2 className="text-2xl font-semibold">
              Project Mend announces Mend Fences, a new podcast series
            </h2>

            <p>
              Project Mend is pleased to announce the launch of <em>Mend Fences</em>,
              a new podcast series that extends the conversations emerging from
              the pages of <em>Mend</em> and the Project Mend digital archive.
            </p>

            <p>
              The first episode of <em>Mend Fences</em> was inspired by Rebekah
              Nilsen’s “Permission to Grieve,” which appears in the 2026 issue of
              <em> Mend</em>.
            </p>

            <p>
              <em>Mend Fences</em> is available on major podcast platforms.
            </p>

          </div>
        </div>


        {/* PROJECT MEND LAUNCH */}

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <img
            src={projectMendLaunchImage}
            alt="Project Mend launch event"
            className="rounded-lg w-full object-cover"
          />

          <div className="md:col-span-2 space-y-4">

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 2026
            </div>

            <h2 className="text-2xl font-semibold">
              Project Mend celebrates the fourth issue of <em>Mend</em>
            </h2>

            <p>
              Project Mend celebrates the publication of the fourth issue of
              <em> Mend</em>, a journal featuring writing and artwork created by
              individuals impacted by incarceration.
            </p>

            <p>
              The issue continues the project’s commitment to storytelling,
              creative collaboration, and public engagement.
            </p>

          </div>
        </div>


        {/* PRISON AND TIME FILM */}

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <img
            src={prisonAndTimeImage}
            alt="Prison and Time film still"
            className="rounded-lg w-full object-cover"
          />

          <div className="md:col-span-2 space-y-4">

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              2025
            </div>

            <h2 className="text-2xl font-semibold">
              Prison and Time added to Project Mend archive
            </h2>

            <p>
              The short documentary <em>Prison and Time</em> has been added to the
              Project Mend digital archive. The film explores how people
              experience time during and after incarceration.
            </p>

          </div>
        </div>

      </div>

      {/* MAILING LIST */}

      <div className="border-t pt-12 max-w-xl space-y-6">

        <h2 className="text-2xl font-semibold">
          Join the Project Mend mailing list
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit">Subscribe</Button>

        </form>

      </div>

      {/* SOCIAL LINKS */}

      <div className="border-t pt-10 flex gap-6 text-muted-foreground">

        <a
          href="https://www.instagram.com/projectmend/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground"
        >
          <Instagram size={18} />
          Instagram
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground"
        >
          <Facebook size={18} />
          Facebook
        </a>

      </div>

    </div>
  );
}
