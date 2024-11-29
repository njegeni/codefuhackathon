'use client';
import React from 'react';
import Slider from './Slider';

const CategorySliders = ({ title, sliders, onSliderChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="bg-sky-400 text-white px-4 py-1 rounded text-sm">{title}</h2>
      {sliders.map((slider, index) => (
        <Slider
          key={index}
          label={slider.label}
          value={slider.value}
          onChange={(e) => onSliderChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default CategorySliders;
