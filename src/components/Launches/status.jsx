import React from "react";

function Status({ status }) {
  const statusClasses = {
    Upcoming: "launch__status--info",
    Success: "launch__status--success",
    Failed: "launch__status--danger",
  };

  return (
    <span className={`launch__status ${statusClasses[status]}`}>{status}</span>
  );
}

export default Status;
