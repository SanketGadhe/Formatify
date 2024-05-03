import React from "react";
import { useLocation } from "react-router-dom";

const Print = () => {
  const location = useLocation()
  const { from } = location.state
  
  return <div className="preview">{from}</div>;
};

export default Print;
