"use client";
import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const earthImg = new Image();
    earthImg.src = "/earth.png";

    const dpr = window.devicePixelRatio || 1;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.scale(dpr, dpr);

    const stars = [];
    const STAR_COUNT = isMobile ? 60 : 1000;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * width,
        speed: 0.00005 + Math.random() * 0.001,
        size: Math.random() * 2,
      });
    }

    function drawEarth() {
      const earthRadius = 450;
      const x = width / 2;
      const y = height + 100;

      if (earthImg.complete) {
        ctx.save();
        ctx.shadowColor = "#4da6ff";
        if (!isMobile) {
          ctx.shadowColor = "#4da6ff";
          ctx.shadowBlur = 40;
        }

        ctx.drawImage(
          earthImg,
          x - earthRadius,
          y - earthRadius,
          earthRadius * 2,
          earthRadius * 2,
        );

        ctx.restore();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.angle += star.speed;

        const x = width / 2 + Math.cos(star.angle) * star.radius;
        const y = height / 2 + Math.sin(star.angle) * star.radius;

        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      drawEarth();

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener("resize", handleResize);

    // ✅ CLEANUP CORRECTO
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ EL COMPONENTE SIEMPRE DEVUELVE JSX
  return <canvas ref={canvasRef} className="space-canvas" />;
}
