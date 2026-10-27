import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 192;
const FPS = 24;
const CYCLE_STEPS = (FRAME_COUNT - 1) * 2;
const frameAtStep = (step: number) => {
  const position = ((step % CYCLE_STEPS) + CYCLE_STEPS) % CYCLE_STEPS;
  return position < FRAME_COUNT ? position : CYCLE_STEPS - position;
};
const frameUrl = (index: number) => `/images/hero-frames/frame-${String(index + 1).padStart(3, "0")}.webp`;

export function FrameHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const change = () => setMobile(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cache = new Map<number, HTMLImageElement>();
    let active = true;
    let animation = 0;
    let start: number | null = null;
    let elapsed = 0;
    let displayed = -1;
    let current = 0;

    const load = (index: number) => {
      const existing = cache.get(index);
      if (existing) return existing;
      const image = new Image();
      image.decoding = "async";
      if (index === 0) image.fetchPriority = "high";
      cache.set(index, image);
      image.onload = () => {
        if (active && (displayed < 0 || reducedMotion.matches)) render(0);
      };
      image.src = frameUrl(index);
      return image;
    };

    const paint = (image: HTMLImageElement, opacity = 1) => {
      const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.globalAlpha = opacity;
      context.drawImage(image, (canvas.width - width) * (mobile ? 0.72 : 0.5), 0, width, height);
      context.globalAlpha = 1;
    };

    const render = (index: number) => {
      const image = load(index);
      if (!image.complete || !image.naturalWidth) return;
      paint(image);
      displayed = index;
      canvas.dataset.frame = String(index);
    };

    const preload = (step: number) => {
      load(0);
      const aheadCount = mobile ? 10 : 16;
      const keep = new Set([0]);
      for (let offset = -3; offset <= aheadCount + 2; offset++) {
        const index = frameAtStep(step + offset);
        keep.add(index);
        if (offset >= 0) load(index);
      }
      if (cache.size > (mobile ? 24 : 40)) {
        for (const key of cache.keys()) {
          if (!keep.has(key)) cache.delete(key);
        }
      }
    };

    const tick = (time: number) => {
      if (!active) return;
      if (start === null) start = time - elapsed;
      elapsed = time - start;
      const step = Math.floor(elapsed / 1000 * FPS);
      current = frameAtStep(step);
      if (current !== displayed) {
        preload(step);
        render(current);
      }
      animation = requestAnimationFrame(tick);
    };

    const resume = () => {
      cancelAnimationFrame(animation);
      start = null;
      if (reducedMotion.matches) {
        current = 0;
        elapsed = 0;
        render(0);
      } else if (!document.hidden) animation = requestAnimationFrame(tick);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(bounds.width * dpr);
      canvas.height = Math.round(bounds.height * dpr);
      displayed = -1;
      render(current);
    };

    if (reducedMotion.matches) load(0);
    else preload(0);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resume();
    document.addEventListener("visibilitychange", resume);
    reducedMotion.addEventListener("change", resume);
    return () => {
      active = false;
      cancelAnimationFrame(animation);
      observer.disconnect();
      document.removeEventListener("visibilitychange", resume);
      reducedMotion.removeEventListener("change", resume);
      for (const image of cache.values()) image.onload = null;
      cache.clear();
    };
  }, [mobile]);

  return (
    <section className="frame-hero" aria-labelledby="hero-title">
      <canvas ref={canvasRef} className="frame-hero__canvas" role="img" aria-label="Mulher em traje preto sobre fundo pink animado com luzes brilhantes" />
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-copy__title">
          Ester
          <span>Lash Designer</span>
        </h1>
        <p className="hero-copy__subtitle">Extensão de cílios e sobrancelhas que realçam a sua beleza.</p>
      </div>
    </section>
  );
}