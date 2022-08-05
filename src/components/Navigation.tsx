import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actions, State, transition } from "../store";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector<State, boolean>((state) => state.mode);
  const phone = useSelector<State, string>((state) => state.phone);
  const buttons: string[] = ["Home", "Services", "About Us"];
  const changeMode = () => {
    dispatch(actions.changeMode(!mode));
  };
  window.addEventListener("scroll", () => {
    dispatch(actions.changeHeight(scrollY));
  });
  const [droped, setDroped] = useState<boolean>(false);
  return (
    <div
      className={`flex items-center fixed z-50 w-full ${transition} ${
        !mode ? "bg-white" : "bg-[#091b2c]"
      } py-5 ${ phone !== "phone" ?  "pl-20 pr-10" : "px-3"} justify-between`}
    >
      {phone === "phone" && (
        <div className="relative" onMouseEnter={() => setDroped(true)} onMouseLeave={() => setDroped(false)}>
          <BsList style={{height: 30, width: 30, cursor: "pointer"}}/>
          {droped && <div className="absolute bg-white gap-3   ml-2 flex flex-col">
            {buttons.map((button, index) =>(
              <button key={index} className="min-w-[10rem] hover:bg-[#e9843f] p-3 hover:text-white text-black flex justify-start">
                {button}
              </button>
            ))}
          </div>}
        </div>
      )}
      <Link
        to="/"
        className={`${mode && "text-white"} ${transition} text-xl font-bold`}
      >
        Personal
      </Link>
      <div className="flex items-center gap-20">
        {phone !== "phone" && (
          <div>
            {buttons.map((button, index) => (
              <Button
                style={{
                  textTransform: "capitalize",
                  color: !mode ? "black" : "white",
                }}
                className={transition}
                key={index}
              >
                {button}
              </Button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-5">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e9843f",
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
    </div>
  );
};
export default Navigation;
