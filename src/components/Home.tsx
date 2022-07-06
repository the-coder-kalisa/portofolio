import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../images/me.png";
import { State } from "../store";
const Home: React.FC = () => {
  const mode = useSelector<State>((state) => state.mode);
  const allcircle : string = "w-[27rem] h-[27rem] relative rounded-full"
  return (
    <div className="pt-[5rem] px-[5rem] items-center flex gap-3">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-10">
          <div className="font-bold flex flex-col gap-10 text-6xl">
            <div>Hy! I am</div>
            <div className="text-[#fca61f]">KALISA INEZA Giovanni</div>
          </div>
          <div className="font-[500] text-[#000000b6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            iste quibusdam ad rem laboriosam placeat quas
          </div>
        </div>
        <Button
          variant="contained"
          style={{ background: "#fb9f26", width: "100px" }}
        >
          Hire Me
        </Button>
      </div>
      <div className="relative">
        <div className="absolute items-end top-4 left-32 flex z-0">
          <div className={`${allcircle} bg-[#d2f7ff]`}>
            <div className="absolute"></div>
          </div>
          <div className={`${allcircle} bg-[#fae1b1] relative right-24 top-[12rem]`}></div>
        </div>
        <img src={Profile} className="min-w-[60rem] z-10 relative" alt="me" />
      </div>
    </div>
  );
};
export default Home;
