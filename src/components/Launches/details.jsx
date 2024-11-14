import React from "react";

function Details({ details }) {
  return (
    <>
      {details ? (
        <p className="launch__details">{details}</p>
      ) : (
        <p className="no-content">No Details Yet</p>
      )}
    </>
  );
}

export default Details;
