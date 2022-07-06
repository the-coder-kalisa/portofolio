import { Button } from "@mui/material";
import React from "react";
import Profile from "../images/me.png";
const Home: React.FC = () => {
  return (
    <div className="pt-[5rem] px-[5rem] items-center flex gap-3">
      <div className="">
        <div>
          <div className="font-bold flex flex-col gap-5 text-3xl">
            <div>Hy! I am</div>
            <div className="text-[#fca61f]">KALISA INEZA Giovanni</div>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste
          quibusdam ad rem laboriosam placeat quas vitae deserunt tempora
          reprehenderit explicabo laudantium ut voluptatibus optio ab, ex sed
          quod assumenda.
        </div>
        <Button variant="contained">Hire Me</Button>
      </div>
      <div>
        <img src={Profile} className="" alt="me"/>
      </div>
    </div>
  );
};
export default Home;
