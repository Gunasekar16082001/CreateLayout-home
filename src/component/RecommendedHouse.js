import React from "react";

const RecommendedHouse = ({ recommendHouse, recommendedHouse, error }) => {
  const handleRecommendHouse = () => {
    recommendHouse();
  };

  return (
    <div className="card">
      <h3>Recommended House</h3>
      <button className="button" onClick={handleRecommendHouse}>
        Recommend
      </button>
      {error && <p className="error">{error}</p>}
      {recommendedHouse && (
        <p className="recommended-house">
          Recommended House: {recommendedHouse}
        </p>
      )}
    </div>
  );
};

export default RecommendedHouse;
