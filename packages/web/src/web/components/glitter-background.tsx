import { useEffect, useRef } from "react";

export function GlitterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let previous = 0;
    let particles: { x: number; y: number; size: number; phase: number; speed: number; star: boolean; color: string }[] = [];
    let seed = 729;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const seconds = motion.matches ? 0 : time / 1000;
      for (const p of particles) {
        const wave = (Math.sin(seconds * p.speed + p.phase) + 1) / 2;
        const shimmer = wave ** 7;
        ctx.globalAlpha = p.star ? 0.12 + shimmer * 0.83 : 0.1 + shimmer * 0.65;
        ctx.fillStyle = p.color;
        const x = p.x * width;
        const y = p.y * height;
        if (p.star) {
          const size = p.size * (0.6 + shimmer * 0.7);
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.quadraticCurveTo(x + size * 0.12, y - size * 0.12, x + size, y);
          ctx.quadraticCurveTo(x + size * 0.12, y + size * 0.12, x, y + size);
          ctx.quadraticCurveTo(x - size * 0.12, y + size * 0.12, x - size, y);
          ctx.quadraticCurveTo(x - size * 0.12, y - size * 0.12, x, y - size);
          ctx.fill();
          ctx.globalAlpha = shimmer * 0.17;
          ctx.beginPath();
          ctx.arc(x, y, size * 1.7, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(x, y, p.size, p.size * 0.7);
        }
      }
      ctx.globalAlpha = 1;
    };

    const animate = (time: number) => {
      if (time - previous > 32) {
        draw(time);
        previous = time;
      }
      frame = requestAnimationFrame(animate);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !motion.matches) frame = requestAnimationFrame(animate);
      else draw(0);
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed = 729;
      particles = Array.from({ length: Math.min(16000, Math.round(width * height / 95)) }, (_, i) => ({
        x: random(), y: random(), size: i % 110 === 0 ? 2.4 + random() * 3.8 : 0.45 + random() * 1.1,
        phase: random() * Math.PI * 2, speed: 0.65 + random() * 1.6,
        star: i % 110 === 0, color: ["#fff7fd", "#ffc2e2", "#ff78ba", "#b80058", "#ffe2f3"][Math.floor(random() * 5)],
      }));
      draw(performance.now());
    };
    resize();
    resume();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener("visibilitychange", resume);
    motion.addEventListener("change", resume);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", resume);
      motion.removeEventListener("change", resume);
    };
  }, []);

  return <div className="pink-background" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}