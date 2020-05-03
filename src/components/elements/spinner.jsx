import React from "react";

function spinner() {
  return (
    <div className="text-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default spinner;
