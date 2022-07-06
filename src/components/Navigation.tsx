import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions, State } from "../store";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector<State>(state => state.mode);
  const buttons: string[] = ["Home", "About Us", "Services"];
  const changeMode = () => {
    dispatch(actions.changeMode(!mode))
  }
  return (
    <div className="">
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
      <IconButton className="absolute" onClick={changeMode}>
        {mode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </div>
  );
};
export default Navigation;
