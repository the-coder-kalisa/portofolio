import { Button } from "@mui/material";
import React from "react";
import Profile from "../images/me.png";
const Home: React.FC = () => {
  return (
    <div className="pt-[5rem] px-[5rem] items-center flex gap-3">
      <div className="">
        <div className="flex flex-col gap-10">
          <div className="font-bold flex flex-col gap-5 text-3xl">
            <div>Hy! I am</div>
            <div className="text-[#fca61f]">KALISA INEZA Giovanni</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            iste quibusdam ad rem laboriosam placeat quas vitae deserunt tempora
            reprehenderit explicabo laudantium ut voluptatibus optio ab, ex sed
            quod assumenda.
          </div>
        </div>
        <Button variant="contained">Hire Me</Button>
      </div>
      <div className="relative">
        <div className="absolute"></div>
        <div className="absolute"></div>
        <img src={Profile} className="h-[35rem] w-[90rem]" alt="me" />
      </div>
    </div>
  );
};
export default Home;
