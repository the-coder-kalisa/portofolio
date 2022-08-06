import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actions, State, transition } from "../store";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const { mode, phone } = useSelector<State, State>((state) => state);
  const buttons: string[] = ["Home", "Services", "solution", "About Us"];
  const changeMode = () => {
    dispatch(actions.changeMode(!mode));
  };
  window.addEventListener("scroll", () => {
    dispatch(actions.changeHeight(scrollY));
  });
  const [droped, setDroped] = useState<boolean>(false);
  const [font, setFont] = useState<boolean>(true);
  useEffect(
    () => () => {
      if (phone === "tablet" || phone === "phone") {
        setFont(false);
      } else {
        setFont(true);
      }
    },
    [phone]
  );
  return (
    <div
      className={`flex items-center fixed z-50 w-full ${transition} ${
        !mode ? "bg-white" : "bg-[#091b2c]"
      } py-5 ${phone !== "phone" ? "pl-20 pr-10" : "px-3"} justify-between`}
    >
      {phone === "phone" && (
        <div
          className="relative"
          onMouseEnter={(): void => setDroped(true)}
          onMouseLeave={(): void => setDroped(false)}
        >
          <BsList
            style={{ height: "1.5em", width: "1.5em", cursor: "pointer" }}
          />
          {droped && (
            <div className="absolute bg-white gap-3 ml-2 flex flex-col">
              {buttons.map((button, index) => {
                let link: string =
                  index === 0
                    ? "home"
                    : index === 1
                    ? "services"
                    : index === 2
                    ? "solution"
                    : "aboutus";
                return (
                  <a
                    href={`#${link}`}
                    key={index}
                    className="min-w-[10rem] hover:bg-[#e9843f] p-3 hover:text-white text-black flex justify-start"
                  >
                    {button}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      )}
      <Link
        to="/"
        className={`${mode && "text-white"} ${transition} ${
          font ? "text-xl " : "text-[0.8rem]"
        } font-bold`}
      >
        Personal
      </Link>
      <div className="flex items-center gap-20">
        {phone !== "phone" && (
          <div>
            {buttons.map((button, index) => {
              let link: string =
                index === 0
                  ? "home"
                  : index === 1
                  ? "services"
                  : index === 2
                  ? "solution"
                  : "aboutus";
              return (
                <Button
                  href={`#${link}`}
                  style={{
                    textTransform: "capitalize",
                    color: !mode ? "black" : "white",
                  }}
                  className={transition}
                  key={index}
                >
                  {button}
                </Button>
              );
            })}
          </div>
        )}
        <div className="flex items-center gap-5 h-3">
          <IconButton onClick={changeMode}>
            {mode ? (
              <LightMode
                style={{ color: "white" }}
                sx={{ height: 18, width: 18 }}
              />
            ) : (
              <DarkMode sx={{ height: 18, width: 18 }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
