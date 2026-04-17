import React, { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

// ---------- Hero carousel (original) ----------

const NextArrow = ({ onClick }) => (
  <button className="carousel-arrow carousel-arrow-next" onClick={onClick} aria-label="Next slide">
    {"\u203a"}
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="carousel-arrow carousel-arrow-prev" onClick={onClick} aria-label="Previous slide">
    {"\u2039"}
  </button>
);

const heroSlides = [
  {
    title: "Lorem Ipsum",
    description: "Dolor sit amet consectetur adipiscing.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Sed Do Eiusmod",
    description: "Tempor incididunt ut labore et dolore magna.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Ut Enim Ad Minim",
    description: "Veniam quis nostrud exercitation ullamco laboris.",
    image: "https://images.unsplash.com/photo-1505691938895-4f0b9f9c07c5?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "ease",
    adaptiveHeight: false,
    fade: false,
  };

  return (
    <section className="carousel-fullscreen">
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <div key={index}>
            <div
              className="carousel-slide"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 60%), url(${slide.image})`,
              }}
            >
              <div className="carousel-overlay">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

// ---------- Drag carousel (your provided code) ----------

const DEFAULT_IMAGES = [
  "https://picsum.photos/1000/780?random=1",
  "https://picsum.photos/500/780?random=2",
  "https://picsum.photos/1000/780?random=3",
  "https://picsum.photos/1000/780?random=4",
  "https://picsum.photos/500/780?random=5",
  "https://picsum.photos/1000/780?random=6",
  "https://picsum.photos/1000/780?random=7",
  "https://picsum.photos/1000/780?random=8",
];

export function DragCarousel({ images = DEFAULT_IMAGES }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const drag = useRef({
    active: false,
    posX: 0,
    lastX: 0,
    lastT: 0,
    velX: 0,
    raf: null,
  });
  const [isDragging, setIsDragging] = useState(false);

  const getMin = () => {
    if (!outerRef.current || !trackRef.current) return 0;
    return outerRef.current.clientWidth - trackRef.current.scrollWidth;
  };

  const moveTo = (x) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${x}px)`;
    }
  };

  const cancelRaf = () => {
    if (drag.current.raf) cancelAnimationFrame(drag.current.raf);
  };

  const runInertia = useCallback(() => {
    const d = drag.current;
    const tick = () => {
      d.velX *= 0.94;
      const min = getMin();
      let next = d.posX + d.velX;

      if (next > 0) {
        next = 0;
        d.velX = 0;
      }
      if (next < min) {
        next = min;
        d.velX = 0;
      }

      d.posX = next;
      moveTo(d.posX);

      if (Math.abs(d.velX) > 0.2) {
        d.raf = requestAnimationFrame(tick);
      }
    };
    d.raf = requestAnimationFrame(tick);
  }, []);

  const onPointerDown = useCallback((e) => {
    cancelRaf();
    const d = drag.current;
    d.active = true;
    d.lastX = e.clientX;
    d.lastT = performance.now();
    d.velX = 0;
    setIsDragging(true);
    trackRef.current.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    const d = drag.current;
    if (!d.active) return;

    const now = performance.now();
    const dt = now - d.lastT || 1;
    const dx = e.clientX - d.lastX;

    d.velX = (dx / dt) * 16;
    d.lastX = e.clientX;
    d.lastT = now;

    const min = getMin();
    const raw = d.posX + dx;

    if (raw > 0) d.posX = raw * 0.3;
    else if (raw < min) d.posX = min + (raw - min) * 0.3;
    else d.posX = raw;

    moveTo(d.posX);
  }, []);

  const onPointerUp = useCallback(() => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    setIsDragging(false);

    const min = getMin();
    if (d.posX > 0) d.posX = 0;
    if (d.posX < min) d.posX = min;
    moveTo(d.posX);

    runInertia();
  }, [runInertia]);

  useEffect(() => () => cancelRaf(), []);

  return (
    <div ref={outerRef} className="carousel-outer">
      <ul
        ref={trackRef}
        className={`carousel-track${isDragging ? " is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {images.map((src, i) => (
          <li key={i}>
            <img src={src} alt="" draggable={false} />
            <div className="slide-overlay">
              <h3>Featured Property</h3>
              <p>Explore stunning views and modern interiors.</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProductsCarousel({ images = DEFAULT_IMAGES }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + count) % count);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % count);

  return (
    <section className="fullwidth-carousel-outer">
      <button
        className="fullwidth-carousel-nav fullwidth-carousel-nav-prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        {'\u2039'}
      </button>
      <div className="fullwidth-carousel-window">
        {images.map((src, i) => (
          <div
            key={i}
            className="fullwidth-carousel-slide"
            style={{
              opacity: activeIndex === i ? 1 : 0,
              zIndex: activeIndex === i ? 2 : 1,
            }}
          >
            <img src={src} alt={`Slide ${i + 1}`} draggable={false} />
          </div>
        ))}
      </div>
      <button
        className="fullwidth-carousel-nav fullwidth-carousel-nav-next"
        onClick={goNext}
        aria-label="Next slide"
      >
        {'\u203a'}
      </button>
    </section>
  );
}
