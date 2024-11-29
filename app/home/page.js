"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import Slider from "../components/Slider";

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

const Home = () => {
  // States for slider values
  const [vehicleUsage, setVehicleUsage] = useState(50);
  const [publicTransport, setPublicTransport] = useState(50);
  const [freight, setFreight] = useState(50);
  const [aviation, setAviation] = useState(50);

  const [coalPlants, setCoalPlants] = useState(50);
  const [renewables, setRenewables] = useState(50);
  const [oilProduction, setOilProduction] = useState(50);
  const [naturalGas, setNaturalGas] = useState(50);

  const [heavyMachinery, setHeavyMachinery] = useState(50);
  const [chemicalPlants, setChemicalPlants] = useState(50);
  const [steelProduction, setSteelProduction] = useState(50);
  const [mining, setMining] = useState(50);

  const [heating, setHeating] = useState(50);
  const [cooking, setCooking] = useState(50);
  const [lighting, setLighting] = useState(50);
  const [appliances, setAppliances] = useState(50);

  const [cropBurning, setCropBurning] = useState(50);
  const [fertilizerUse, setFertilizerUse] = useState(50);
  const [livestock, setLivestock] = useState(50);
  const [deforestation, setDeforestation] = useState(50);

  const [landfill, setLandfill] = useState(50);
  const [recycling, setRecycling] = useState(50);
  const [openBurning, setOpenBurning] = useState(50);
  const [wastewater, setWastewater] = useState(50);

  // Chart data and options remain unchanged
  const stackedData = {
    labels: ["2020", "2040", "2060", "2080", "2100"],
    datasets: [
      // Add your datasets
    ],
  };

  const lineData = {
    labels: ["2020", "2040", "2060", "2080", "2100"],
    datasets: [
      // Add your datasets
    ],
  };

  const stackedOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 20 },
      },
      title: {
        display: true,
        text: "Sources of Air Pollution",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        max: 200,
        ticks: { stepSize: 50 },
        title: { display: true, text: "PM10 Emission Levels (µg/m³)" },
      },
      x: { stacked: true },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: true,
        text: "Air Pollution in the Next 100 Years",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: ["2020", "2040", "2060", "2080", "2100"],
        title: {
          display: true,
        },
      },
      y: {
        min: 0,
        max: 200,
        ticks: {
          stepSize: 50,
        },
        title: {
          display: true,
          text: 'PM10 Emission Levels (µg/m³)',
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col mx-auto container">
        <h1 className="text-3xl font-bold text-gray-800 mt-4 text-center">
          Air Pollution Simulation
        </h1>
        <div className="flex items-center justify-center">
          <div className="chart-container w-[700px] h-[350px]">
            <Line data={stackedData} options={stackedOptions} />
          </div>
          <div className="chart-container w-[700px] h-[350px]">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Grid Layout: 3 Columns and 2 Rows */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Column 1 */}
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-800 mt-4 bg-sky-500 p-2 rounded-md text-white font-medium">
              Transportation
            </h2>
            <div className="flex flex-col space-y-4">
              <Slider
                label="Vehicle Usage"
                value={vehicleUsage}
                onChange={(e) => setVehicleUsage(e.target.value)}
                description="Adjust the impact of privately owned vehicle usage."
              />
              <Slider
                label="Public Transport"
                value={publicTransport}
                onChange={(e) => setPublicTransport(e.target.value)}
                description="Adjust the usage of public transportation."
              />
              <Slider
                label="Freight"
                value={freight}
                onChange={(e) => setFreight(e.target.value)}
                description="Adjust the contribution of freight transportation."
              />
              <Slider
                label="Aviation"
                value={aviation}
                onChange={(e) => setAviation(e.target.value)}
                description="Adjust the impact of aviation on air pollution."
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-800 mt-4 bg-sky-500 p-2 rounded-md text-white font-medium">
              Energy Production
            </h2>
            <div className="flex flex-col space-y-4">
              <Slider
                label="Coal Plants"
                value={coalPlants}
                onChange={(e) => setCoalPlants(e.target.value)}
                description="Adjust the impact of coal plants."
              />
              <Slider
                label="Renewables"
                value={renewables}
                onChange={(e) => setRenewables(e.target.value)}
                description="Adjust the impact of renewable energy."
              />
              <Slider
                label="Oil Production"
                value={oilProduction}
                onChange={(e) => setOilProduction(e.target.value)}
                description="Adjust the impact of oil production."
              />
              <Slider
                label="Natural Gas"
                value={naturalGas}
                onChange={(e) => setNaturalGas(e.target.value)}
                description="Adjust the impact of natural gas."
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-800 mt-4 bg-sky-500 p-2 rounded-md text-white font-medium">
              Industry
            </h2>
            <div className="flex flex-col space-y-4">
              <Slider
                label="Heavy Machinery"
                value={heavyMachinery}
                onChange={(e) => setHeavyMachinery(e.target.value)}
                description="Adjust the impact of heavy machinery."
              />
              <Slider
                label="Chemical Plants"
                value={chemicalPlants}
                onChange={(e) => setChemicalPlants(e.target.value)}
                description="Adjust the impact of chemical plants."
              />
              <Slider
                label="Steel Production"
                value={steelProduction}
                onChange={(e) => setSteelProduction(e.target.value)}
                description="Adjust the impact of steel production."
              />
              <Slider
                label="Mining"
                value={mining}
                onChange={(e) => setMining(e.target.value)}
                description="Adjust the impact of mining."
              />
            </div>
          </div>
        </div>

        {/* Grid Layout: 2nd Row with 3 Columns */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Column 1 */}
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-800 mt-4 bg-sky-500 p-2 rounded-md text-white font-medium">
              Residential
            </h2>
            <div className="flex flex-col space-y-4">
              <Slider
                label="Heating"
                value={heating}
                onChange={(e) => setHeating(e.target.value)}
                description="Adjust the impact of heating."
              />
              <Slider
                label="Cooking"
                value={cooking}
                onChange={(e) => setCooking(e.target.value)}
                description="Adjust the impact of cooking."
              />
              <Slider
                label="Lighting"
                value={lighting}
                onChange={(e) => setLighting(e.target.value)}
                description="Adjust the impact of lighting."
              />
              <Slider
                label="Appliances"
                value={appliances}
                onChange={(e) => setAppliances(e.target.value)}
                description="Adjust the impact of appliances."
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-800 mt-4 bg-sky-500 p-2 rounded-md text-white font-medium">
              Agriculture
            </h2>
            <div className="flex flex-col space-y-4">
              <Slider
                label="Crop Burning"
                value={cropBurning}
                onChange={(e) => setCropBurning(e.target.value)}
                description="Adjust the impact of crop burning."
              />
              <Slider
                label="Fertilizer Use"
                value={fertilizerUse}
                onChange={(e) => setFertilizerUse(e.target.value)}
                description="Adjust the impact of fertilizer use."
              />
              <Slider
                label="Livestock"
                value={livestock}
                onChange={(e) => setLivestock(e.target.value)}
                description="Adjust the impact of livestock."
              />
              <Slider
                label="Deforestation"
                value={deforestation}
                onChange={(e) => setDeforestation(e.target.value)}
                description="Adjust the impact of deforestation."
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-800 mt-4 bg-sky-500 p-2 rounded-md text-white font-medium">
              Waste
            </h2>
            <div className="flex flex-col space-y-4">
              <Slider
                label="Landfill"
                value={landfill}
                onChange={(e) => setLandfill(e.target.value)}
                description="Adjust the impact of landfills."
              />
              <Slider
                label="Recycling"
                value={recycling}
                onChange={(e) => setRecycling(e.target.value)}
                description="Adjust the impact of recycling."
              />
              <Slider
                label="Open Burning"
                value={openBurning}
                onChange={(e) => setOpenBurning(e.target.value)}
                description="Adjust the impact of open burning."
              />
              <Slider
                label="Wastewater"
                value={wastewater}
                onChange={(e) => setWastewater(e.target.value)}
                description="Adjust the impact of wastewater."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
