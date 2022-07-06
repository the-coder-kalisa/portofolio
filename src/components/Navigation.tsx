import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector<object>((state: any) => state.mode);
  const buttons: string[] = ["Home", "About Us", "Services"];
  return (
    <div className="flex items-center py-3 justify-between px-20">
      <Link to="/">Personal</Link>
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-5">
          {buttons.map((but, index) => (
            <Button key={index}>{but}</Button>
          ))}
        </div>
        <Button style={{ backgroundColor: "#fb992d", color: "white" }}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};
export default Navigation;
