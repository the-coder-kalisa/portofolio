import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navigation: React.FC = () => {
  const buttons: string[] = ["Home", "About Us", "Services"];
  return (
    <div className="flex items-center justify-between px-20">
      <Link to="/">Personal</Link>
      <div className="flex items-center gap-5">
        {buttons.map((but, index)=>(
          <Button>{but}</Button>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
