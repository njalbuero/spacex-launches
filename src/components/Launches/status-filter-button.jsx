import React from "react";

const StatusFilterButton = ({ status, isActive, onClick }) => {
  return (
    <button
      className={`filter-button ${isActive ? "filter-button--active" : ""}`}
      onClick={() => onClick(status)}
    >
      {status}
    </button>
  );
};

export default StatusFilterButton;
