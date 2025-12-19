import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 blend-diff transition-transform duration-100 ease-out will-change-transform"
      style={{
        transform: `translate(${position.x - (isHovering ? 40 : 10)}px, ${position.y - (isHovering ? 40 : 10)}px)`,
      }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-300 ${
          isHovering ? 'w-20 h-20 opacity-50' : 'w-5 h-5 opacity-100'
        }`}
      />
    </div>
  );
};

export default CustomCursor;