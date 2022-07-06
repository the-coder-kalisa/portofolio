import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions, State } from "../store";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector<State>((state) => state.mode);
  const buttons: string[] = ["Home", "About Us", "Services"];
  const changeMode = () => {
    dispatch(actions.changeMode(!mode));
  };
  return (
    <div className="flex items-center py-3 px-4 justify-between">
      <Link to="/" className={`${mode && "text-white"}`}>
        Personal
      </Link>
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-5">
          {buttons.map((but, index) => (
            <Button key={index}>{but}</Button>
          ))}
        </div>
        <Button
          style={{
            backgroundColor: "#fb992d",
            color: "white",
            borderRadius: "9999px",
            padding: "7px 20px",
            textTransform: "capitalize",
          }}
          className="drop-shadow-lg"
        >
          Contact Us
        </Button>
        <IconButton onClick={changeMode}>
          {mode ? <LightMode style={{ color: "white" }} /> : <DarkMode />}
        </IconButton>
      </div>
    </div>
  );
};
export default Navigation;
