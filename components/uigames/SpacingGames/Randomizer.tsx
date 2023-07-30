// EqualSpacingGuesser.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const EqualSpacingGuesser: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(100); // Valeur par défaut du Slider
  const minSpacing = 5;
  const maxSpacing = 200;
  const numElements = 5; // Nombre d'éléments à espacer
  const containerWidth = 300;
  const containerHeight = 500;

  // Calcul de l'espacement réel entre les éléments en fonction de la valeur du Slider
  const spacing = (maxSpacing - minSpacing) * (sliderValue / 100) + minSpacing;

  // Calcul de la largeur totale nécessaire pour les éléments espacés
  const totalWidth = (numElements - 1) * spacing;

  // Centrer les éléments horizontalement dans le conteneur
  const leftOffset = (containerWidth - totalWidth) / 2;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        style={{
          width: containerWidth,
          height: containerHeight,
          border: "2px solid black",
          position: "relative",
        }}
      >
        {[...Array(numElements)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              left: index * spacing + leftOffset,
            }}
            className={`w-5 h-5 bg-blue-500 rounded-full`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      <div className="mt-4">
        <input
          type="range"
          min={5}
          max={100}
          value={sliderValue}
          onChange={(e) => setSliderValue(parseFloat(e.target.value))}
        />
        <span>{spacing.toFixed(2)} px</span>
      </div>
    </div>
  );
};

export default EqualSpacingGuesser;
