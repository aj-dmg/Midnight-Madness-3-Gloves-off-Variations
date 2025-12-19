import React, { useRef, useEffect } from 'react';

const WarpTunnel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const stars: { x: number; y: number; z: number; o: number }[] = [];
    const numStars = 800;
    const focalLength = w / 2;
    let centerX = w / 2;
    let centerY = h / 2;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w - centerX,
        y: Math.random() * h - centerY,
        z: Math.random() * w,
        o: Math.random(),
      });
    }

    let animationFrameId: number;

    const moveStars = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 10; // Speed

        if (star.z <= 0) {
          star.z = w;
          star.x = Math.random() * w - centerX;
          star.y = Math.random() * h - centerY;
        }

        const x = (star.x * focalLength) / star.z + centerX;
        const y = (star.y * focalLength) / star.z + centerY;
        const radius = (1 - star.z / w) * 3;
        
        // Color variation: Cyan to Magenta
        const hue = (star.z / w) * 60 + 280; 
        
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${star.o})`;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(moveStars);
    };

    moveStars();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      centerX = w / 2;
      centerY = h / 2;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60"
    />
  );
};

export default WarpTunnel;