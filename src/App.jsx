import React, { useState } from "react";
import LaunchesList from "./components/Launches/launches-list";
import StatusFilterButton from "./components/Launches/status-filter-button";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleStatusFilter = (filter) => {
    setStatusFilter(filter);
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="status-filter-container">
        {["All", "Upcoming", "Success", "Failed"].map((status) => (
          <StatusFilterButton
            key={status}
            status={status}
            isActive={status === statusFilter}
            onClick={handleStatusFilter}
          />
        ))}
      </div>

      <div className="launch">
        <LaunchesList searchQuery={searchQuery} statusFilter={statusFilter} />
      </div>
    </div>
  );
}

export default App;
