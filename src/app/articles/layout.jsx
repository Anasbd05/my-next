import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <h1 className="text-center text-xs mt-80">
        this is layout of articles
      </h1>
    </div>
  );
};

export default layout;
