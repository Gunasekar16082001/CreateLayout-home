import React, { useState } from "react";
import '../App.css'


const AddPlot = ({ assignPlot, addHouseLabel, error }) => {
  const [rowIndex, setRowIndex] = useState("");
  const [colIndex, setColIndex] = useState("");
  const [plotType, setPlotType] = useState("House");

  const handleRowIndexChange = (e) => {
    setRowIndex(parseInt(e.target.value));
  };

  const handleColIndexChange = (e) => {
    setColIndex(parseInt(e.target.value));
  };

  const handlePlotTypeChange = (e) => {
    setPlotType(e.target.value);
  };

  const handleAssignPlot = () => {
    assignPlot(rowIndex, colIndex, plotType);

    if (plotType === "House") {
      const label = prompt("Enter house label:");
      addHouseLabel(rowIndex, colIndex, label);
    }
  };

  return (
    <div className="card">
      <h3>Add Plot</h3>
      <div className="input-group">
        <label htmlFor="plotRowIndex">Row Index:</label>
        <input type="number" id="plotRowIndex" value={rowIndex} onChange={handleRowIndexChange} />
        <label htmlFor="plotColIndex">Column Index:</label>
        <input type="number" id="plotColIndex" value={colIndex} onChange={handleColIndexChange} />
        <label htmlFor="plotType">Plot Type:</label>
        <select id="plotType" value={plotType} onChange={handlePlotTypeChange}>
          <option value="House">House</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Gym">Gym</option>
          <option value="Hospital">Hospital</option>
        </select>
      </div>
      <button className="button" onClick={handleAssignPlot}>
        Assign Plot
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddPlot;
