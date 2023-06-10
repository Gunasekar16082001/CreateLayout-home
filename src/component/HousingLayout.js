import React from "react";
import '../App.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUtensils, faDumbbell, faHospital } from "@fortawesome/free-solid-svg-icons";

const HousingLayout = ({ layout }) => {
  return (
    <div className="layout-section">
      <h3>Housing Layout</h3>
      <div className="layout">
        {layout.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((plot, colIndex) => (
              <span className={`plot ${plot}`} key={colIndex}>
                {plot === "House" && <FontAwesomeIcon icon={faHome} />}
                {plot === "Restaurant" && <FontAwesomeIcon icon={faUtensils} />}
                {plot === "Gym" && <FontAwesomeIcon icon={faDumbbell} />}
                {plot === "Hospital" && <FontAwesomeIcon icon={faHospital} />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousingLayout;
