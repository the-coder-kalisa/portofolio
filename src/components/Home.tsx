import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../images/me.png";
import { State, transition } from "../store";
import Facebook from "./Facebook";
import Google from "./Google";
import Twitter from "./Twitter";
const Home: React.FC = () => {
  const mode = useSelector<State>((state) => state.mode);
  const allcircle: string = "w-[22rem] h-[22rem] relative rounded-full";
  return (
    <div className="pt-[5rem] pr-[15rem] pl-[5rem] justify-between items-center flex gap-3">
      <div className="flex flex-col max-w-[40rem] gap-5">
        <div className="flex flex-col gap-10">
          <div className="font-bold flex flex-col gap-10 text-6xl">
            <div className={`${mode ? "text-white" : "text-black"} ${transition}`}>Hy! I am</div>
            <div className="text-[#fca61f]">KALISA INEZA Giovanni</div>
          </div>
          <div className={`font-[500] ${!mode ? "text-[#000000b6]" : "text-white"} ${transition} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            iste quibusdam ad rem laboriosam placeat quas
          </div>
        </div>
        <Button
          variant="contained"
          style={{ background: "#fb9f26", width: "150px", fontSize: 20, padding: "0 10px", textTransform: "capitalize" }}
        >
          Hire Me
        </Button>
      </div>
      <div className="relative">
        <div className="absolute items-end top-8 flex z-0">
          <div className={`${allcircle} bg-[#d2f7ff]`}>
            <div className="absolute cursor-pointer bg-white rounded-full p-5 drop-shadow-xl top-[5rem]">
              <Google />
            </div>
          </div>
          <div
            className={`${allcircle} bg-[#fae1b1] relative right-24 top-[12rem]`}
          >
            <div className="absolute cursor-pointer bg-white rounded-full p-3 drop-shadow-xl right-5 top-5">
              <Twitter />
            </div>
          </div>
          <div className="absolute right-[17rem] top-14">
            <Facebook />
          </div>
        </div>
        <img src={Profile} className="min-h-[40rem] z-10 relative" alt="me" />
      </div>
    </div>
  );
};
export default Home;
