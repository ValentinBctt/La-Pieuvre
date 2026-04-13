import React, { useRef, useEffect, useState } from "react";
import "../styles/sonar-cursor-hud-sound-sync2.css";
import "../styles/home.css";
import OctopusScroll from './OctopusScroll';
// Utilitaires
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

const MIN_DEPTH = 0, MAX_DEPTH = -1000;

export default function HomePage() {
  // Références DOM
  const sonarRef = useRef();
  const labelRef = useRef();
  const oceanRef = useRef();
  const markerRef = useRef();
  const bubbleRef = useRef();
  const pressureRef = useRef();
  const clockRef = useRef();
  const o2ValRef = useRef();
  const o2BarRef = useRef();
  const hrValRef = useRef();
  const stressValRef = useRef();
  const bodyTempValRef = useRef();
  const waterTempValRef = useRef();
  const soundInputRef = useRef();

  // États
  const [o2, setO2] = useState(100);
  const [hr, setHr] = useState(72);
  const [stress, setStress] = useState(20);
  const [bodyT, setBodyT] = useState(36.8);
  const [waterT, setWaterT] = useState(13.4);
  const [audioCtx, setAudioCtx] = useState(null);
  const [customBuffer, setCustomBuffer] = useState(null);
  const [defaultBeep, setDefaultBeep] = useState(true);
  const [lastClientX, setLastClientX] = useState(window.innerWidth/2);
  const [lastClientY, setLastClientY] = useState(window.innerHeight/2);

  // Profondeur et pression
  function pressureBar(depthMeters) { var d = Math.max(0, Math.abs(depthMeters)); return 1 + d/10; }
  function absYToDepth(absY) {
    var doc = document.documentElement;
    var total = (doc.scrollHeight - doc.clientHeight) + window.innerHeight;
    var t = clamp(absY/total, 0, 1);
    return Math.round(MIN_DEPTH + (MAX_DEPTH - MIN_DEPTH) * t);
  }
  function depthToPercent(depth) {
    var t = (depth - MIN_DEPTH) / (MAX_DEPTH - MIN_DEPTH);
    return clamp(t * 100, 0, 100);
  }
  function updateAll(absY, cx, cy) {
    const depth = absYToDepth(absY);
    const percent = depthToPercent(depth);
    if (labelRef.current) {
      labelRef.current.textContent = depth + " m";
      labelRef.current.style.left = cx + "px";
      labelRef.current.style.top = cy + "px";
    }
    if (markerRef.current) markerRef.current.style.top = percent + "%";
    if (bubbleRef.current) {
      bubbleRef.current.style.top = `calc(${percent}%)`;
      bubbleRef.current.textContent = depth + " m";
    }
    if (pressureRef.current) pressureRef.current.textContent = pressureBar(depth).toFixed(1) + " bar";
    if (oceanRef.current) {
      var doc = document.documentElement;
      var total = (doc.scrollHeight - doc.clientHeight) || 1;
      var tScroll = clamp(window.scrollY / total, 0, 1);
      oceanRef.current.style.backgroundPosition = `center ${(tScroll*100).toFixed(2)}%`;
    }
  }

  // Horloge
  useEffect(() => {
    function tickClock() {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      if (clockRef.current) clockRef.current.textContent = `${hh}:${mm}:${ss}`;
    }
    const interval = setInterval(tickClock, 1000);
    tickClock();
    return () => clearInterval(interval);
  }, []);

  // Déplacement sonar et profondeur
  useEffect(() => {
    function onMove(e) {
      setLastClientY(e.clientY);
      setLastClientX(e.clientX);
      if (sonarRef.current) {
        sonarRef.current.style.left = e.clientX + "px";
        sonarRef.current.style.top = e.clientY + "px";
      }
      const absY = window.scrollY + e.clientY;
      updateAll(absY, e.clientX, e.clientY);
    }
    function onScroll() {
      const absY = window.scrollY + lastClientY;
      updateAll(absY, lastClientX, lastClientY);
    }
    function onResize() {
      const y = Math.min(lastClientY, window.innerHeight);
      setLastClientY(y);
      const absY = window.scrollY + y;
      updateAll(absY, lastClientX, y);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Boot
    updateAll(window.scrollY + lastClientY, lastClientX, lastClientY);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line
  }, [lastClientX, lastClientY]);

  // Stats dynamiques
  useEffect(() => {
    const interval = setInterval(() => {
      setO2((prev) => Math.max(0, prev - 0.04));
      setHr((prev) => clamp(prev + (Math.random()-0.5)*3 + (stress-30)*0.01, 58, 125));
      setStress((prev) => clamp(prev + (Math.random()-0.5)*6, 5, 95));
      setBodyT((prev) => clamp(prev + (Math.random()-0.5)*0.03, 36.5, 37.3));
      setWaterT((prev) => clamp(prev + (Math.random()-0.5)*0.05, 10.0, 18.0));
    }, 1000);
    return () => clearInterval(interval);
  }, [stress]);

  // Mise à jour des stats dans le DOM
  useEffect(() => {
    if (o2ValRef.current) o2ValRef.current.textContent = o2.toFixed(1) + "%";
    if (o2BarRef.current) {
      o2BarRef.current.style.width = o2 + "%";
      const col = o2 > 60 ? "rgba(0,255,110,1)" : o2 > 30 ? "rgba(255,200,0,1)" : "rgba(255,80,80,1)";
      o2BarRef.current.style.background = `linear-gradient(90deg,${col},${col})`;
      o2BarRef.current.style.boxShadow = `0 0 12px ${col.replace("1)", "0.45)")}`;
    }
    if (hrValRef.current) hrValRef.current.textContent = Math.round(hr) + " bpm";
    if (stressValRef.current) stressValRef.current.textContent = Math.round(stress) + "%";
    if (bodyTempValRef.current) bodyTempValRef.current.textContent = bodyT.toFixed(1) + " °C";
    if (waterTempValRef.current) waterTempValRef.current.textContent = waterT.toFixed(1) + " °C";
  }, [o2, hr, stress, bodyT, waterT]);

  // Son personnalisable & halo
  const playCustom = (x, y) => {
    let ctx = audioCtx;
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioCtx(ctx);
    }
    const now = ctx.currentTime;
    if (customBuffer) {
      const src = ctx.createBufferSource();
      src.buffer = customBuffer;
      const g = ctx.createGain();
      g.gain.value = 1.0;
      src.connect(g).connect(ctx.destination);
      src.start(now);
    } else {
      // fallback ultrason court (800ms env.)
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(4200, now);
      o.frequency.exponentialRampToValueAtTime(1100, now + 0.12);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(now + 0.22);
    }
    // Halo synchronisé
    const r = document.createElement("div");
    r.className = "ripple";
    r.style.left = x + "px";
    r.style.top = y + "px";
    document.body.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  };

  // Click sonar
  useEffect(() => {
    function onDown(e) {
      if (sonarRef.current) {
        sonarRef.current.style.transition = "transform 120ms ease-out";
        sonarRef.current.style.transform = "translate(-50%, -50%) scale(0.9)";
      }
      playCustom(e.clientX, e.clientY);
    }
    function onUp() {
      if (sonarRef.current) {
        sonarRef.current.style.transition = "transform 220ms cubic-bezier(.2,.8,.2,1.2)";
        sonarRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  });

  // Drag & drop son
  useEffect(() => {
    function onDragOver(e) { e.preventDefault(); }
    async function onDrop(e) {
      e.preventDefault();
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (!file) return;
      if (soundInputRef.current) {
        soundInputRef.current.files = e.dataTransfer.files;
        const evt = new Event("change", { bubbles: true });
        soundInputRef.current.dispatchEvent(evt);
      }
    }
    window.addEventListener("dragover", onDragOver);
    window.addEventListener("drop", onDrop);
    return () => {
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", onDrop);
    };
  }, []);

  // Gestion du son custom
  const handleSoundBtn = () => {
    if (soundInputRef.current) soundInputRef.current.click();
  };
  const handleSoundInput = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    let ctx = audioCtx;
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioCtx(ctx);
    }
    try {
      const arr = await file.arrayBuffer();
      const buf = await ctx.decodeAudioData(arr);
      setCustomBuffer(buf);
      setDefaultBeep(false);
      document.documentElement.style.setProperty('--ripple-ms', (buf.duration*1000).toFixed(0)+'ms');
    } catch (err) { console.error(err); }
  };

useEffect(() => {
  let raf;

  // 🎯 état interne (inertie)
  let state = {
    oxygen: 100,
    heartRate: 72,
    stress: 20,
    bodyTemp: 36.8,
    waterTemp: 13.4,
  };

  const smoothNoise = (t) => {
    return (
      Math.sin(t * 0.6) * 0.5 +
      Math.sin(t * 1.3) * 0.25 +
      Math.sin(t * 2.1) * 0.15
    );
  };

  const lerp = (a, b, t) => a + (b - a) * t;

  const updateStats = () => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.body.scrollHeight - window.innerHeight;

    let progress = scrollY / maxScroll;

    const t = Date.now() * 0.001;

    // 🧠 très léger bruit (beaucoup réduit)
    const jitter =
      Math.sin(t * 1.5) * 0.01 +
      Math.sin(t * 2.2) * 0.008;

    const wave = smoothNoise(t) * 0.03;

    progress = Math.min(1, Math.max(0, progress + jitter + wave));

    // 🎯 valeurs cibles (plus stables)
    const target = {
      oxygen: Math.max(5, 100 - progress * 120),
      heartRate: 85 + progress * 35,
      stress: 20 + progress * 65,
      bodyTemp: 36.8 - progress * 1.5,
      waterTemp: 13.4 - progress * 2.2,
    };

    // 🫁 inertie (TRÈS important)
    state.oxygen = lerp(state.oxygen, target.oxygen, 0.03);
    state.heartRate = lerp(state.heartRate, target.heartRate, 0.03);
    state.stress = lerp(state.stress, target.stress, 0.03);
    state.bodyTemp = lerp(state.bodyTemp, target.bodyTemp, 0.02);
    state.waterTemp = lerp(state.waterTemp, target.waterTemp, 0.02);

    // 🔗 DOM update
    if (o2ValRef.current)
      o2ValRef.current.textContent = `${state.oxygen.toFixed(0)}%`;

    if (hrValRef.current)
      hrValRef.current.textContent = `${Math.floor(state.heartRate)} bpm`;

    if (stressValRef.current)
      stressValRef.current.textContent = `${Math.floor(state.stress)}%`;

    if (bodyTempValRef.current)
      bodyTempValRef.current.textContent = `${state.bodyTemp.toFixed(1)} °C`;

    if (waterTempValRef.current)
      waterTempValRef.current.textContent = `${state.waterTemp.toFixed(1)} °C`;

    if (o2BarRef.current) {
      o2BarRef.current.style.width = `${state.oxygen}%`;
    }

    raf = requestAnimationFrame(updateStats);
  };

  updateStats();

  return () => cancelAnimationFrame(raf);
}, []);
    
function useFloatLinks(selector = 'a') {
  useEffect(() => {
    let raf;

    const elements = document.querySelectorAll(selector);

    const animate = () => {
      const t = Date.now() * 0.0015;

      const floatY =
        Math.sin(t) * 12 +
        Math.sin(t * 2.2) * 6;

      // 🔥 X BEAUCOUP PLUS LARGE
      const floatX =
        Math.sin(t * 0.9) * 14;

      elements.forEach((el, i) => {
        const offset = i * 1.2;

        const x =
          floatX +
          Math.sin(t + offset) * 12;

        const y =
          floatY +
          Math.cos(t + offset) * 6;

        el.style.display = 'inline-block';
        el.style.transform = `
          translate(${x}px, ${y}px)
        `;

        el.style.willChange = 'transform';
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, [selector]);
}
useFloatLinks('.home-la-pieuvre a, .home-atelier a, .home-bureau a, .home-studio a');
  // Rendu JSX
  return (
        <>
    <div className="home-all">
        <OctopusScroll />
      <div className="home-la-pieuvre">
        <a href="#"><strong>LA PIEUVRE</strong></a>
      </div>
      <div className="home-atelier">
        <a href="/atelier">Atelier&nbsp;<strong>LA PIEUVRE</strong></a>
      </div>
      <div className="home-bureau">
        <a href="/bureau">Bureau &nbsp;<strong>LA PIEUVRE</strong></a>
      </div>
      <div className="home-studio">
        <a href="/studio">Studio &nbsp;<strong>LA PIEUVRE</strong></a>
      </div>

    </div>
    <div style={{cursor: "none" }}>
      <div className="ocean" ref={oceanRef}></div>
      <div
        ref={sonarRef}
        className="sonar"
        aria-hidden="true"
        style={{ left: lastClientX, top: lastClientY }}
      >
        <div className="boundary"></div>
        <div className="scope"></div>
        <div className="beam"></div>
        <div className="pulse"></div>
        <div className="dot"></div>
      </div>
      <div id="depth-label" ref={labelRef} style={{ position: "fixed" }}>0 m</div>
      {/* HUD gauche */}
      <aside className="hud left" id="hud">
        <div className="scan-line"></div>
        <div>
          <div className="badge">Océan Atlantique</div>
          <div ref={clockRef} className="clock">00:00:00</div>
        </div>
        <div className="scale">
          <div className="legend" style={{ position: "absolute", left: 0, right: 0, top: 4 }}>
            <span>0 m</span><span>-1000 m</span>
          </div>
          <div ref={markerRef} className="marker" style={{ top: "0%" }}></div>
          <div ref={bubbleRef} className="bubble">0 m</div>
        </div>
        <div className="stat" style={{ justifySelf: "stretch" }}>
          <span>Pression</span><span className="val" ref={pressureRef}>1.0 bar</span>
        </div>
      </aside>
      {/* HUD droit */}
      <aside className="hud right" id="diverHud">
        <div className="diver-title">Niveau d’oxygène / autonomie</div>
        <div className="diver-stage">
          {/* Ici tu peux ajouter une image de plongeur si besoin */}
        </div>
        <div className="stat"><span>Oxygène</span><span className="val" ref={o2ValRef}>100%</span></div>
        <div className="gauge"><span ref={o2BarRef}></span></div>
        <div className="stat"><span>Fréquence cardiaque</span><span className="val" ref={hrValRef}>72 bpm</span></div>
        <div className="stat"><span>Stress</span><span className="val" ref={stressValRef}>20%</span></div>
        <div className="stat"><span>T° corporelle</span><span className="val" ref={bodyTempValRef}>36.8 °C</span></div>
        <div className="stat"><span>T° de l’eau</span><span className="val" ref={waterTempValRef}>13.4 °C</span></div>
      </aside>
      {/* Loader son */}
      <div id="soundLoader">
        <input
          id="soundInput"
          ref={soundInputRef}
          type="file"
          accept="audio/*"
          style={{ display: "none" }}
          onChange={handleSoundInput}
        />
        <button
          id="soundBtn"
          title="Charger un son de sonar (mp3/wav/ogg) pour le synchroniser"
          onClick={handleSoundBtn}
        >Changer le son</button>
      </div>
    </div>
    </>
  );
}