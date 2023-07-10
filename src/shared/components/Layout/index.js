import React from "react";
import { FiMenu } from "react-icons/fi";

const GlobalLayout = ({ children }) => {

  return (
      <div className="main">{children}</div>
  );
};

export default GlobalLayout;
