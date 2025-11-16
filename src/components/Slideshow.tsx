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

const slides = [
  { src: katherinePatrickMichael, alt: "Katherine, Patrick, and Michael at Project Mend event" },
  { src: jackie, alt: "Jackie at Project Mend gathering" },
  { src: michaelJamesTroy, alt: "Michael, James, and Troy engaging with community" },
  { src: theoYusra, alt: "Theo and Yusra at Project Mend" },
  { src: everson, alt: "Project Mend community gathering at Everson" },
  { src: daquan, alt: "Daquan presenting at Project Mend event" },
  { src: group, alt: "Project Mend team and community members" },
  { src: studio, alt: "Project Mend in studio" },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (event: any) => {
      setIsReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || isReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isReducedMotion]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Image slideshow"
    >
      {/* Slides */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all duration-200 hover:scale-110 shadow-md"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all duration-200 hover:scale-110 shadow-md"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
