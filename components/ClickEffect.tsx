import React, { useState, useEffect } from 'react';

interface Click {
  id: number;
  x: number;
  y: number;
}

const ClickEffect: React.FC = () => {
  const [clicks, setClicks] = useState<Click[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      
      // Clean up after animation
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute rounded-full border-2 border-blue-400 bg-blue-500/20 animate-ripple"
          style={{
            left: click.x,
            top: click.y,
            width: '20px',
            height: '20px',
          }}
        />
      ))}
    </div>
  );
};

export default ClickEffect;