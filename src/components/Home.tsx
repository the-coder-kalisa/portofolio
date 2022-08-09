import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profile from "../images/me.png";
import { State, transition } from "../store";
import Facebook from "./Facebook";
import Google from "./Google";
import Twitter from "./Twitter";
import gif from "../images/gif.png";
import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
const Home: FC = () => {
  const mode = useRecoilValue(modes);
  const phone = useRecoilValue(phones);
  const allcircle: string = "w-[22rem] h-[22rem] relative rounded-full";
  const font = useRecoilValue(fonts);
  return (
    <div
      id="home"
      className={` ${
        phone === "tablet" || phone === "phone"
          ? "flex-col pt-[10rem] px-5"
          : "pt-[5rem] pr-[15rem] pl-[5rem]"
      } justify-between items-center flex gap-3`}
    >
      <div className={`flex flex-col max-w-[40rem]  gap-5`}>
        <div className={`flex flex-col ${!font ? "gap-3" : "gap-10"}`}>
          <div
            className={`font-bold flex flex-col ${
              font ? "text-6xl gap-10" : "text-4xl gap-2"
            }`}
          >
            <div className={`${transition}`}>Hy! I am</div>
            <div className="text-[#e9843f]">KALISA INEZA Giovanni</div>
          </div>
          <div
            className={`font-[500] ${
              !mode ? "text-[#000000b6]" : "text-white"
            } ${transition} `}
          >
            Professional Web, desktop and mobile developer with more than 3
            years of experience. I am the owner of projects like levitra,
            transduite and involved in projects like aquarens and others.
          </div>
        </div>
        <Button
          variant="contained"
          style={{
            background: "#e9843f",
            width: "150px",
            fontSize: 20,
            padding: "0 10px",
            textTransform: "capitalize",
          }}
        >
          Hire Me
        </Button>
      </div>
      <div className="relative">
        <img src={gif} alt="gif" className="absolute top-0 -left-[12rem]" />
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
        <img
          src={Profile}
          className="min-h-[30rem] min-w-[30rem] z-10 relative"
          alt="me"
        />
      </div>
    </div>
  );
};
export default Home;
