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
