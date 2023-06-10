import React, { useState } from "react";
import "./App.css";
import CreateLayout from "./component/CreateLayout";
import RecommendedHouse from "./component/RecommendedHouse";
import HousingLayout from "./component/HousingLayout";
import AddPlot from "./component/AddPlot";

const Layout = () => {
  const [layout, setLayout] = useState([]);
  const [houseLabels, setHouseLabels] = useState([]);
  const [recommendedHouse, setRecommendedHouse] = useState("");
  const [error, setError] = useState("");

  const createLayout = (m, n) => {
    const newLayout = Array(m)
      .fill(null)
      .map(() => Array(n).fill(""));

    setLayout(newLayout);
    setError("");
  };

  const assignPlot = (rowIndex, colIndex, type) => {
    if (rowIndex > layout.length || colIndex > layout[0].length) {
      setError("Plot coordinates are out of bounds.");
      return;
    }

    const newLayout = [...layout];
    newLayout[rowIndex - 1][colIndex - 1] = type;

    setLayout(newLayout);
    setError("");
  };

  const addHouseLabel = (rowIndex, colIndex, label, owner) => {
    const newHouseLabels = [...houseLabels];
    newHouseLabels.push({ row: rowIndex, col: colIndex, label, owner });

    setHouseLabels(newHouseLabels);
  };

  const calculateScore = (rowIndex, colIndex) => {
    const services = {
      Restaurant: 0,
      Gym: 0,
      Hospital: 0
    };

    // Count nearby services within 1km distance
    for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
      for (let j = colIndex - 1; j <= colIndex + 1; j++) {
        if (i >= 0 && i < layout.length && j >= 0 && j < layout[0].length) {
          const plot = layout[i][j];
          if (plot === "Restaurant") services.Restaurant++;
          else if (plot === "Gym") services.Gym++;
          else if (plot === "Hospital") services.Hospital++;
        }
      }
    }

    return services;
  };

  const recommendHouse = () => {
    if (houseLabels.length === 0) {
      setError("There are no house labels assigned.");
      return;
    }

    let bestHouse = "";
    let bestScore = 0;

    for (const houseLabel of houseLabels) {
      const { row, col, label } = houseLabel;
      const score = calculateScore(row, col);

      const totalScore = score.Restaurant + score.Gym + score.Hospital;
      if (totalScore > bestScore) {
        bestScore = totalScore;
        bestHouse = label;
      }
    }

    setRecommendedHouse(bestHouse);
    setError("");
  };

  return (
    <div className="container">
      <div className="cards-section">
        <CreateLayout createLayout={createLayout} />
        <AddPlot
          assignPlot={assignPlot}
          addHouseLabel={addHouseLabel}
          setError={setError}
        />
        <RecommendedHouse
          recommendHouse={recommendHouse}
          recommendedHouse={recommendedHouse}
          error={error}
        />
      </div>

      <HousingLayout layout={layout} />
    </div>
  );
};

export default Layout;
