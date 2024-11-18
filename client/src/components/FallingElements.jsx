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
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/sallad/Lollo%20Rosso.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/farska-kryddor/Rosmarin.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/kal/Svartkal.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/kal/Vitkal.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/frukt/honungsmelon.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/gront/sparris.png",
    "https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/produkt-bilder/frukt-gront/rotfrukter/rattika.png",
  ];

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const createFallingElement = (size) => {
    const startPosition = Math.random() * (window.innerWidth - 40);
    const duration = 5 + Math.random() * 5; // Increased duration range

    const getBlurAmount = (elementSize) => {
      if (elementSize < 8) return "blur(3px)";
      return "none";
    };

    const getDuration = (elementSize) => {
      if (elementSize < 8) return "12";
      return "8";
    };

    return {
      id: generateId(),
      emoji: fruits[Math.floor(Math.random() * fruits.length)],
      style: {
        left: `${startPosition}px`,
        width: `${size}vw`,
        animationDuration: `${getDuration(size)}s`, // Using the new duration
        filter: getBlurAmount(size),
        zIndex: Math.floor(size),
      },
      duration, // Keeping the original duration
    };
  };

  const addElements = (count = 1) => {
    const newElements = Array(count)
      .fill(null)
      .map(() => {
        const largerSize = 8;
        const smallerSize = 6;

        return [
          createFallingElement(largerSize),
          createFallingElement(smallerSize),
        ];
      })
      .flat();

    setElements((prev) => [...prev, ...newElements]);

    newElements.forEach((element) => {
      const containerHeight = window.innerHeight;
      const elementBottom = element.style.top ? parseInt(element.style.top) + 100 : 0;

      setTimeout(() => {
        setElements((prev) => prev.filter((el) => el.id !== element.id));
      }, (containerHeight - elementBottom) / 100 * element.duration * 1000);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 2) + 2;
      addElements(count);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={element.id}
          className="absolute animate-fall"
          style={{
            ...element.style,
            transform: index % 2 === 0 ? "scale(1)" : "scale(0.7)",
          }}
        >
          <img
            src={element.emoji}
            alt="grönsak"
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

const styles = `
  @keyframes fall {
    0% {
      transform: translateY(-500px) rotate(0deg)
    }
    100% {
      transform: translateY(120vh) rotate(${90 + Math.random() * 270}deg);
    }
  }

  .animate-fall {
    animation: fall linear forwards;
  }
`;

const FallingElementsPage = () => {
  return (
    <div className="bg-black absolute h-full 2xl:rounded-3xl w-full overflow-hidden -z-10 pointer-events-none">
      <style>{styles}</style>
      <FallingElements />
    </div>
  );
};

export default FallingElementsPage;