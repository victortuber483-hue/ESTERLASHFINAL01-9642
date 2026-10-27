import { useEffect, useRef } from "react";

// Transparent, size-aware decoration; all coordinates follow the name itself.
export function NameGlitterOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = false;
    let elapsed = 0;
    let previous = 0;

    // Expensive gradients/facets are drawn once, not dozens of times per frame.
    const star = document.createElement("canvas");
    star.width = star.height = 128;
    const starCtx = star.getContext("2d")!;
    const halo = starCtx.createRadialGradient(64, 64, 0, 64, 64, 60);
    halo.addColorStop(0, "#ffffff");
    halo.addColorStop(.16, "#fff8fce8");
    halo.addColorStop(.4, "#ffd6eb70");
    halo.addColorStop(1, "#ffe4f200");
    starCtx.fillStyle = halo;
    starCtx.fillRect(0, 0, 128, 128);
    const vertices = Array.from({ length: 8 }, (_, i) => {
      const angle = i * Math.PI / 4 - Math.PI / 2;
      const size = i % 2 === 0 ? 29 : 7;
      return [64 + Math.cos(angle) * size, 64 + Math.sin(angle) * size];
    });
    for (let i = 0; i < 8; i++) {
      starCtx.beginPath();
      starCtx.moveTo(64, 64);
      starCtx.lineTo(vertices[i][0], vertices[i][1]);
      starCtx.lineTo(vertices[(i + 1) % 8][0], vertices[(i + 1) % 8][1]);
      starCtx.closePath();
      starCtx.fillStyle = ["#ffffff", "#ffe2f1", "#ffffff", "#efbbd6"][i % 4];
      starCtx.fill();
    }
    starCtx.fillStyle = "#ffffff";
    starCtx.beginPath();
    starCtx.arc(64, 64, 3.5, 0, Math.PI * 2);
    starCtx.fill();
    const dust = document.createElement("canvas");
    dust.width = dust.height = 24;
    const dustCtx = dust.getContext("2d")!;
    const dustGlow = dustCtx.createRadialGradient(12, 12, 0, 12, 12, 12);
    dustGlow.addColorStop(0, "#ffffff");
    dustGlow.addColorStop(.2, "#fff8fcf0");
    dustGlow.addColorStop(.55, "#ffe1ef70");
    dustGlow.addColorStop(1, "#ffe4f200");
    dustCtx.fillStyle = dustGlow;
    dustCtx.fillRect(0, 0, 24, 24);

    function sparkle(x: number, y: number, radius: number, alpha: number, rotation = 0) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      ctx.drawImage(star, -radius * 2.2, -radius * 2.2, radius * 4.4, radius * 4.4);
      ctx.restore();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      const angle = motion.matches ? -.55 : elapsed / 3600 * Math.PI * 2 - Math.PI / 2;
      const cx = width / 2;
      const cy = height / 2;
      const rx = Math.max(10, cx - 23);
      const ry = Math.max(10, cy - 23);
      const orbit = (a: number) => ({ x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry });

      if (!motion.matches) {
        // Trailing arc fades into scattered, twinkling dust, not a solid ring.
        for (let i = 64; i >= 1; i--) {
          const age = i / 64;
          const pos = orbit(angle - age * 1.45);
          const scatter = 2 + age * 9;
          const dx = Math.sin(i * 12.7) * scatter;
          const dy = Math.cos(i * 7.3) * scatter;
          const twinkle = .8 + .2 * Math.sin(elapsed / 260 + i * 2.1);
          const alpha = Math.pow(1 - age, 1.25) * twinkle;
          if (i % 5 === 0) sparkle(pos.x + dx, pos.y + dy, 2.6 + (1 - age) * 2.2, alpha);
          else {
            ctx.globalAlpha = alpha;
            const size = 5 + (1 - age) * 5;
            ctx.drawImage(dust, pos.x + dx - size / 2, pos.y + dy - size / 2, size, size);
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      const head = orbit(angle);
      const depth = .92 + .08 * Math.sin(angle);
      sparkle(head.x, head.y, 15 * depth, 1, angle * .5);
      ctx.globalCompositeOperation = "source-over";
    }

    function tick(now: number) {
      elapsed += previous ? now - previous : 0;
      previous = now;
      draw();
      frame = requestAnimationFrame(tick);
    }

    function sync() {
      cancelAnimationFrame(frame);
      previous = 0;
      draw();
      if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick);
    }

    const resize = new ResizeObserver(() => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sync();
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={canvasRef} className="name-glitter-orbit" aria-hidden="true" />;
}