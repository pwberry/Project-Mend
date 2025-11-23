import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import katherinePatrickMichael from "@/assets/slideshow/katherine_patrick_michael.jpg";
import jackie from "@/assets/slideshow/jackie2.jpg";
import michaelJamesTroy from "@/assets/slideshow/michael_james_troy.jpg";
import theoYusra from "@/assets/slideshow/theo_yusra.jpg";
import everson from "@/assets/slideshow/everson.jpg";
import daquan from "@/assets/slideshow/daquan_5.jpg";
import group from "@/assets/slideshow/group.jpg";
import studio from "@/assets/slideshow/marion_troy_tony_in_studio.jpg";
import movie from "@/assets/slideshow/wade_bode.png";
import katherine_alexis from "@/assets/slideshow/katherine_alexis.png";
import marion_mary from "@/assets/slideshow/marion_mary_marvin.png";
import wade_interview from "@/assets/slideshow/wade_interview.png";
import ej_patrick from "@/assets/slideshow/ej_patrick.png";

// ✅ Slides with captions
const slides = [
  {
    src: katherinePatrickMichael,
    alt: "Katherine, Patrick, and Michael at Project Mend event",
    caption:
      "Katherine Nikolau, Patrick W. Berry, and Michael Willacy at Syracuse Stage talk",
  },
  {
    src: jackie,
    alt: "Jackie Thompkins at Mend launch event",
    caption: "Jackie Thompkins at Mend launch event",
  },
  {
    src: michaelJamesTroy,
    alt: "Michael Willacy, James Seibles, and Troy Paris",
    caption: "Michael Willacy, James Seibles, and Troy Paris",
  },
  {
    src: theoYusra,
    alt: "Theodore Robinson and Yusra Khazaleh",
    caption: "Theodore Robinson and Yusra Khazaleh",
  },
  {
    src: everson,
    alt: "Project Mend at the Everson Museum of Art",
    caption: "Project Mend event at the Everson Museum of Art",
  },
  {
    src: daquan,
    alt: "Daquan Noel at 2024 Project Mend launch",
    caption: "Daquan Noel at 2024 Project Mend launch",
  },
  {
    src: group,
    alt: "Group photo during Jose A. Pérez's visit",
    caption: "Group photo during Jose A. Pérez's visit",
  },
  {
    src: studio,
    alt: "Marion Rodriguez, Troy White, and Tony Eiland in the studio",
    caption: "Marion Rodriguez, Troy White, and Tony Eiland in the studio",
  },
  {
    src: movie,
    alt: "Still from Marvin Wade and Evan Stenger Bode's film Prison and Time",
    caption:
      "Still from Marvin Wade and Evan Stenger Bode's new film 'Prison and Time'",
  },
  {
    src: katherine_alexis,
    alt: "Katherine Nikolau and Alexis Kirkpatrick",
    caption: "Katherine Nikolau and Alexis Kirkpatrick",
  },
  {
    src: marion_mary,
    alt: "Marion Rodriguez, Mary Carr, and Marvin Wade",
    caption: "Marion Rodriguez, Mary Carr, and Marvin Wade",
  },
  {
    src: wade_interview,
    alt:
      "Marvin Wade being interviewed after When I Think of Freedom… event",
    caption:
      "Marvin Wade being interviewed after “When I Think of Freedom…” event",
  },
  {
    src: ej_patrick,
    alt: "Ejarias P. Burgin and Patrick W. Berry",
    caption: "Ejarias P. Burgin and Patrick W. Berry",
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentIndex}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="max-w-full max-h-full object-contain"
          />

          {/* Caption */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            {slide.caption}
          </p>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        type="button"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 rounded-full shadow"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 rounded-full shadow"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
