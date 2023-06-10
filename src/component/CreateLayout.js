import React, { useState } from "react";
import '../App.css'


const CreateLayout = ({ createLayout }) => {
  const [rows, setRows] = useState("");
  const [cols, setCols] = useState("");

  const handleRowsChange = (e) => {
    setRows(parseInt(e.target.value));
  };

  const handleColsChange = (e) => {
    setCols(parseInt(e.target.value));
  };

  const handleCreateLayout = () => {
    createLayout(rows, cols);
  };

  return (
    <div className="card">
      <h3>Create Layout</h3>
      <div className="input-group">
        <label htmlFor="rowsInput">Rows:</label>
        <input type="number" id="rowsInput" value={rows} onChange={handleRowsChange} />
        <label htmlFor="colsInput">Columns:</label>
        <input type="number" id="colsInput" value={cols} onChange={handleColsChange} />
      </div>
      <button className="button" onClick={handleCreateLayout}>
        Create Layout
      </button>
    </div>
  );
};

export default CreateLayout;
