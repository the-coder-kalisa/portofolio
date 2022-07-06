import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions, State, transition } from "../store";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector<State>((state) => state.mode);
  const buttons: string[] = ["Home", "About Us", "Services"];
  const changeMode = () => {
    dispatch(actions.changeMode(!mode));
  };
  useEffect(()=>{
    
  },[])
  window.addEventListener('scroll', () =>{
    dispatch(actions.changeHeight(scrollY));
  })
  return (
    <div className="flex items-center fixed z-50 w-full bg-transparent py-5 pl-20 pr-10 justify-between">
      <Link to="/" className={`${mode && "text-white"} ${transition} text-xl font-bold`}>
        Personal
      </Link>
      <div className="flex items-center gap-20">
        <div>
          {buttons.map((button, index) => (
            <Button style={{textTransform: "capitalize", color: !mode ? "black": "white"}} className={transition} key={index}>{button}</Button>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Button
          variant="contained"
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
            {mode ? <LightMode style={{color: "white"}}/> : <DarkMode />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
