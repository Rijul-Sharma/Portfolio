import React, { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import { cn } from "@/lib/utils"

export default function Carousel({
  children,
  width = "100%",
  height = "300px",
  gap = 0,
  showArrows = true,
  arrowSize = 24,
  arrowColor = "currentColor",
  arrowBgColor = "rgba(255, 255, 255, 0.8)",
  showDots = true,
  dotSize = 8,
  dotColor = "rgba(0, 0, 0, 0.3)",
  activeDotColor = "rgba(0, 0, 0, 0.8)",
  transitionSpeed = 300,
  transitionType = "slide",
  autoPlay = false,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  infinite = true,
  initialSlide = 0,
  className,
}) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const [isPaused, setIsPaused] = useState(false)
  const childrenArray = React.Children.toArray(children)
  const slideCount = childrenArray.length

  const goToSlide = useCallback(
    (index) => {
      let newIndex = index
      if (infinite) {
        if (index < 0) newIndex = slideCount - 1
        if (index >= slideCount) newIndex = 0
      } else {
        if (index < 0) newIndex = 0
        if (index >= slideCount) newIndex = slideCount - 1
      }
      setCurrentSlide(newIndex)
    },
    [slideCount, infinite]
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    if (!autoPlay || isPaused) return
    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isPaused, nextSlide])

  return (
    <div
    className={`relative overflow-hidden ${className || ""}`}
      style={{ width, height }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex h-full"
        style={{
          gap: `${gap}px`,
          ...(transitionType === "slide" ? { transform: `translateX(-${currentSlide * 100}%)` } : {}),
          transition: `transform ${transitionSpeed}ms ease`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={`flex-shrink-0 flex-grow-0 ${transitionType !== "slide" && index === currentSlide ? "active" : ""}`}

            style={{
              flexBasis: "100%",
              ...(transitionType !== "slide"
                ? {
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? "scale(1)" : "scale(0.9)",
                    transition: `opacity ${transitionSpeed}ms ease, transform ${transitionSpeed}ms ease`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {}),
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {showArrows && slideCount > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
            style={{
              width: `${arrowSize * 1.5}px`,
              height: `${arrowSize * 1.5}px`,
              backgroundColor: arrowBgColor,
              color: arrowColor,
              opacity: !infinite && currentSlide === 0 ? 0.5 : 1,
              cursor: !infinite && currentSlide === 0 ? "default" : "pointer",
            }}
            onClick={prevSlide}
            disabled={!infinite && currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft size={arrowSize} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
            style={{
              width: `${arrowSize * 1.5}px`,
              height: `${arrowSize * 1.5}px`,
              backgroundColor: arrowBgColor,
              color: arrowColor,
              opacity: !infinite && currentSlide === slideCount - 1 ? 0.5 : 1,
              cursor: !infinite && currentSlide === slideCount - 1 ? "default" : "pointer",
            }}
            onClick={nextSlide}
            disabled={!infinite && currentSlide === slideCount - 1}
            aria-label="Next slide"
          >
            <ChevronRight size={arrowSize} />
          </button>
        </>
      )}

      {showDots && slideCount > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className="rounded-full"
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                backgroundColor: index === currentSlide ? activeDotColor : dotColor,
                transition: "background-color 300ms ease",
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
