import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { transition } from "../data";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useRecoilState, useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";

const Navigation: React.FC = () => {
  const [mode, setMode] = useRecoilState(modes);
  const buttons: string[] = ["Home", "Services", "solution", "About Us"];
  const changeMode = () => {
    setMode(!mode);
  };

  const [droped, setDroped] = useState<boolean>(false);
  const font = useRecoilValue(fonts);
  const phone = useRecoilValue(phones);
  return (
    <div
      className={`flex items-center fixed z-50 w-full ${transition} ${
        !mode ? "bg-white" : "bg-[#091b2c]"
      } py-5 ${phone !== "phone" ? "pl-20 pr-10" : "px-3"} justify-between`}
    >
      {phone === "phone" && (
        <div
          className="relative"
          onMouseEnter={() => setDroped(true)}
          onMouseLeave={() => setDroped(false)}
        >
          <MenuIcon
            style={{
              height: 20,
              width: 20,
              cursor: "pointer",
              color: mode ? "white" : "black",
            }}
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
          font ? "text-xl " : "text-[1rem]"
        } font-bold`}
      >
       The Coder
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
        {/* <div className="flex items-center gap-5 h-3">
          <IconButton onClick={changeMode}>
            {mode ? (
              <LightMode
                style={{ color: "white" }}
                sx={{ height: 15, width: 15 }}
              />
            ) : (
              <DarkMode sx={{ height: 15, width: 15 }} />
            )}
          </IconButton>
        </div> */}
      </div>
    </div>
  );
};
export default Navigation;
