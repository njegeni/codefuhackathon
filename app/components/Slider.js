import React, { useState } from 'react';

const Slider = ({ label, value, onChange, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* Label and toggle button */}
      <div className="flex items-center justify-between w-full my-3"> 
        <label className="text-black font-bold text-left">{label}</label>
        <button
          onClick={toggleDescription}
          className="ml-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          title="More Info"
        >
          •••
        </button>
      </div>
      {/* Slider input */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="slider w-full"
      />
      {/* Description */}
      {showDescription && (
        <span className="text-gray-600 text-sm mt-1">{description}</span>
      )}
    </div>
  );
};

export default Slider;
