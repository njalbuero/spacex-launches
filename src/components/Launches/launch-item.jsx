import React, { useState } from "react";
import Status from "./status";
import Meta from "./meta";
import Image from "./image";
import Details from "./details";


function LaunchItem({ launch }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="launch__item fade">
      <h2>
        {launch.mission_name} <Status status={launch.status} />
      </h2>
      {isDetailsOpen && (
        <div className="launch__body">
          <Meta launch={launch} />
          <div className="media">
            <Image imageUrl={launch.links.mission_patch_small} alt={launch.mission_name} />
            <Details details={launch.details} />
          </div>
        </div>
      )}
      <div>
        <button
          className="btn btn--primary"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
        >
          {isDetailsOpen ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default LaunchItem;
