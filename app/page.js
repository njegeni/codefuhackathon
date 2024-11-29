'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import CategorySliders from './components/CategorySliders';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  // State for slider values
  const [sliderValues, setSliderValues] = useState({
    transportation: [50, 50, 50, 50],
    energyProduction: [50, 50, 50, 50],
    industry: [50, 50, 50],
    residential: [50, 50],
    buildingEfficiency: [50],
    agriculture: [50, 50]
  });

  // Data for stacked area chart
  const stackedData = {
    labels: ['2020', '2040', '2060', '2080', '2100'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Dataset 3',
        data: [45, 25, 16, 36, 67],
        fill: true,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
      }
    ]
  };

  // Data for line comparison chart
  const lineData = {
    labels: ['2020', '2040', '2060', '2080', '2100'],
    datasets: [
      {
        label: 'Baseline',
        data: [50, 50, 50, 50, 50],
        borderColor: 'black',
        backgroundColor: 'black',
        tension: 0.1
      },
      {
        label: 'Current Scenario',
        data: [45, 59, 62, 48, 56],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)',
        tension: 0.1
      }
    ]
  };

  const stackedOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stacked Area Chart'
      }
    },
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        max: 200,
        ticks: {
          stepSize: 50
        },
        title: {
          display: true,
          text: 'PM10 Emission Levels (µg/m³)'
        }
      },
      x: {
        stacked: true
      }
    }
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Baseline vs Current Scenario'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        ticks: {
          stepSize: 50
        },
        title: {
          display: true,
          text: 'PM10 Emission Levels (µg/m³)'
        }
      }
    }
  };

  const handleSliderChange = (categoryIndex, sliderIndex, newValue) => {
    const updatedValues = { ...sliderValues };

    // Update the specific category and slider value
    if (categoryIndex === 0) {
      updatedValues.transportation[sliderIndex] = newValue;
    } else if (categoryIndex === 1) {
      updatedValues.energyProduction[sliderIndex] = newValue;
    } else if (categoryIndex === 2) {
      updatedValues.industry[sliderIndex] = newValue;
    } else if (categoryIndex === 3) {
      updatedValues.residential[sliderIndex] = newValue;
    } else if (categoryIndex === 4) {
      updatedValues.buildingEfficiency[sliderIndex] = newValue;
    } else if (categoryIndex === 5) {
      updatedValues.agriculture[sliderIndex] = newValue;
    }

    setSliderValues(updatedValues);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Air Pollution Simulation</h1>
        </div>

        {/* Charts Section */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="flex-1 bg-white rounded-lg p-2">
            <Line data={stackedData} options={stackedOptions} />
          </div>
          <div className="flex-1 bg-white rounded-lg p-2">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-3 gap-x-12">
          {/* First row */}
          <div className="space-y-8">
            <CategorySliders 
              title="Transportation" 
              sliders={[
                { label: "Vehicle Usage", value: sliderValues.transportation[0] },
                { label: "Electric Vehicles", value: sliderValues.transportation[1] },
                { label: "Public Transport", value: sliderValues.transportation[2] },
                { label: "Shipping & Aviation", value: sliderValues.transportation[3] }
              ]}
              onSliderChange={(index, value) => handleSliderChange(0, index, value)}
            />
          </div>

          <div className="space-y-8">
            <CategorySliders 
              title="Energy Production" 
              sliders={[
                { label: "Coal Plants", value: sliderValues.energyProduction[0] },
                { label: "Oil & Gas Plants", value: sliderValues.energyProduction[1] },
                { label: "Renewables", value: sliderValues.energyProduction[2] },
                { label: "Energy Efficiency", value: sliderValues.energyProduction[3] }
              ]}
              onSliderChange={(index, value) => handleSliderChange(1, index, value)}
            />
          </div>

          <div className="space-y-8">
            <CategorySliders 
              title="Industry" 
              sliders={[
                { label: "Manufacturing", value: sliderValues.industry[0] },
                { label: "Construction", value: sliderValues.industry[1] },
                { label: "Mining", value: sliderValues.industry[2] }
              ]}
              onSliderChange={(index, value) => handleSliderChange(2, index, value)}
            />
          </div>

          {/* Second row */}
          <div className="col-span-2 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <CategorySliders 
                  title="Residential Sources" 
                  sliders={[
                    { label: "Heating Fuels", value: sliderValues.residential[0] },
                    { label: "Cooking Fuels", value: sliderValues.residential[1] }
                  ]}
                  onSliderChange={(index, value) => handleSliderChange(3, index, value)}
                />
              </div>

              <div className="space-y-4">
                <CategorySliders 
                  title="" 
                  sliders={[
                    { label: "Building Efficiency", value: sliderValues.buildingEfficiency[0] }
                  ]}
                  onSliderChange={(index, value) => handleSliderChange(4, index, value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <CategorySliders 
              title="Agriculture" 
              sliders={[
                { label: "Crop Burning", value: sliderValues.agriculture[0] },
                { label: "Livestock Management", value: sliderValues.agriculture[1] }
              ]}
              onSliderChange={(index, value) => handleSliderChange(5, index, value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
