"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Slider: React.FC<{
  min: number;
  max: number;
  step: number;
  onValueChange: (value: number) => void;
}> = ({ min, max, step, onValueChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className="flex items-center">
      <motion.input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-40 h-4 bg-gray-300 rounded-md appearance-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <span className="ml-2">{value}</span>
    </div>
  );
};

export default Slider;
