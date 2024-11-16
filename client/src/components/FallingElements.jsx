import React, { useEffect, useState } from "react";

const FallingElements = () => {
  const [elements, setElements] = useState([]);

  const fruits = [
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/gront/cocktailtomat%20kvist.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/sallad/Isbergssallat.png?t=2024-11-15T21%3A27%3A25.941Z",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/kal/Broccoli.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/gront/aubergine.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/lok/Salladslok.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/lok/Purjolok.png?t=2024-11-15T21%3A22%3A53.664Z",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/sallad/Rosesallat.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/sallad/Lollo%20Rosso.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/farska-kryddor/Rosmarin.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/kal/Svartkal.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/kal/Vitkal.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/frukt/honungsmelon.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/gront/sparris.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/rotfrukter/rattika.png",
  ];

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const createFallingElement = () => {
    const startPosition = Math.random() * (window.innerWidth - 40);
    const duration = 4 + Math.random() * 10;
    const size = Math.random() * 10 + 5; // Increased size range from 5-25

    // Enhanced blur logic based on size
    const getBlurAmount = (elementSize) => {
      if (elementSize < 10) return "blur(3px)";
      return "none";
    };

    return {
      id: generateId(),
      emoji: fruits[Math.floor(Math.random() * fruits.length)],
      style: {
        left: `${startPosition}px`,
        animationDuration: `${duration}s`,
        width: `${size}vw`, // Using vw for responsive sizing
        filter: getBlurAmount(size),
        zIndex: Math.floor(size), // Layer elements based on size
      },
      duration,
    };
  };

  const addElements = (count = 1) => {
    const newElements = Array(count)
      .fill(null)
      .map(() => createFallingElement());

    setElements((prev) => [...prev, ...newElements]);

    // Remove elements after their animation completes
    newElements.forEach((element) => {
      setTimeout(() => {
        setElements((prev) => prev.filter((el) => el.id !== element.id));
      }, element.duration * 1000);
    });
  };

  useEffect(() => {
    // Create more initial elements (20 instead of 10)

    // Add elements more frequently (every 500ms instead of 2000ms)
    // And add multiple elements each time (2-4 elements)
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 2) + 2; // 2-4 elements
      addElements(count);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-fall"
          style={{
            ...element.style,
          }}
        >
          <img
            src={element.emoji}
            alt="grönsak"
            className="w-full h-auto"
            // Random initial rotation
          />
        </div>
      ))}
    </div>
  );
};

const styles = `
  @keyframes fall {
    0% {
      transform: translateY(-500px) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(${90 + Math.random() * 270}deg);
    }
  }

  .animate-fall {
    animation: fall linear forwards;
  }
`;

const FallingElementsPage = () => {
  return (
    <div className="bg-black absolute h-full w-full overflow-x-hidden -z-10 pointer-events-none">
      <style>{styles}</style>
      <FallingElements />
    </div>
  );
};

export default FallingElementsPage;
