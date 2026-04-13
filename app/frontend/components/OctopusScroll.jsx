import { useEffect, useRef, useState } from 'react';
import '../styles/OctopusScroll.css';

export default function OctopusScroll() {
  const [pos, setPos] = useState({ x: 50, y: 55 });
  const target = useRef({ x: 50, y: 55 });

  useEffect(() => {
    let raf;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const cycle = (scrollY % vh) / vh;

      // 🐙 ONDES PLUS COMPLEXES (horizontal nerveux)
      const wave1 = Math.sin(cycle * Math.PI * 2);
      const wave2 = Math.sin(cycle * Math.PI * 6) * 0.6;
      const wave3 = Math.sin(cycle * Math.PI * 12) * 0.25;

      // 🔥 saccade type tentacule
      const jerk = Math.sign(Math.sin(cycle * Math.PI * 10)) * 0.8;

      // 🎯 X centré + mouvement élargi
      const rawX =
        (wave1 * 28) +
        (wave2 * 16) +
        (wave3 * 8) +
        jerk * 2;

      let x = 35 + rawX;

      // 🛑 clamp écran safe
      x = Math.min(88, Math.max(12, x));

      // 🐙 Y organique
      const yMain = Math.sin(cycle * Math.PI);
      const yNoise = Math.sin(cycle * Math.PI * 5) * 3;
      const baseY = 35;

      const y = baseY + yMain * 25 + yNoise;

      target.current = { x, y };
    };

    const animate = () => {
      setPos(prev => {
        const lerp = (a, b, t) => a + (b - a) * t;

        return {
          x: lerp(prev.x, target.current.x, 0.04),
          y: lerp(prev.y, target.current.y, 0.05),
        };
      });

      raf = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 🎯 rotation basée sur centre
  const rawX = (pos.x - 50) / 50;
  const rotation = rawX * 14;
  const flipX = rawX < 0 ? -1 : 1;

  // 🌊 FLOTTEMENT PLUS FORT (INTÉGRÉ ICI)
  const t = Date.now() * 0.0015;

  const floatY =
    Math.sin(t) * 7 +        // 🔥 amplitude augmentée (avant 4)
    Math.sin(t * 2.3) * 4;   // micro agitation plus visible

  const floatX =
    Math.sin(t * 0.8) * 3;   // petit drift horizontal vivant

  return (
    <div className="octopus-scroll-anchor">
      <img
        src="https://res.cloudinary.com/dnojcwwos/image/upload/v1774863326/9d78df4e-9bd3-4d9f-b9f6-676856022d57.png"
        alt=""
        className="octopus-img"
        style={{
          left: `${pos.x}%`,
          top: `calc(${pos.y}% + ${floatY}px)`,
          transform: `
            translate(calc(-50% + ${floatX}px), -50%)
            rotate(${rotation}deg)
            scaleX(${flipX})
          `,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </div>
  );
}