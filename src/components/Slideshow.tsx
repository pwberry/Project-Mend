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

// ✅ Add captions here
const slides = [
  {
    src: katherinePatrickMichael,
    alt: "Katherine, Patrick, and Michael at Project Mend event",
    caption: "Katherine, Patrick, and Michael at a Project Mend event",
  },
  {
    src: jackie,
    alt: "Jackie at Project Mend gathering",
    caption: "Jackie during a Project Mend gathering",
  },
  {
    src: michaelJamesTroy,
    alt: "Michael, James, and Troy engaging with community",
    caption: "Michael, James, and Troy engaging with the community",
  },
  {
    src: theoYusra,
    alt: "Theo and Yusra at Project Mend",
    caption: "Theo and Yusra participating in Project Mend",
  },
  {
    src: everson,
    alt: "Project Mend at the Everson Museum",
    caption: "Project Mend event at the Everson Museum",
  },
  {
    src: daquan,
    alt: "Daquan at a Project Mend workshop",
    caption: "Daquan at a Project Mend workshop",
  },
  {
    src: group,
    alt: "Project Mend group photo",
    caption: "Group photo from a Project Mend event",
  },
  {
    src: studio,
    alt: "Marion, Troy, and Tony in the studio",
    caption: "Marion, Troy, and Tony recording in the studio",
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance (optional)
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

          {/* ✅ Caption */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            {slide.caption}
          </p>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() =>
          setCurrentIndex((currentIndex + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
