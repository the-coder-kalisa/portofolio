import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { knowledge } from "../data";
import { State, transition } from "../store";
const Services: React.FC = () => {
  const mode = useSelector<State>((state) => state.mode);
  return (
    <div
      className={`${
        mode && "text-white"
      } flex items-center gap-5 justify-center ${transition}`}
    >
      <div className="max-h-[30rem] max-w-[35rem] rounded-xl bg-[#e7f7fb] p-3 flex flex-col gap-10 overflow-scroll">
        {knowledge.map(({ type, categorie, desc, image }, index) => (
          <div
            className="hover:bg-gradient-to-r from-[#f5c5be] via-[#febf83] to-[#d6aada] p-3 rounded-xl"
            key={index}
          >
            <div
              className={`flex items-center p-5 rounded-xl bg-white gap-5 cursor-pointer`}
            >
              <div className="">
                <img alt={type} src={image} className="min-h-[10rem] min-w-[10rem]"/>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold">{type}</h1>
                <div className="text-sm">{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[40rem]">
        <div className="text-7xl font-bold">
          <div className="text-[#061d48]">My awesome</div>
          <div className="text-[#fb9f26]">services</div>
        </div>
        <div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            reprehenderit dolorem voluptatem doloremque excepturi accusamus,
            reiciendis non tempore assumenda mollitia perferendis dolore
            voluptatibus architecto totam corporis autem alias. Consectetur,
            voluptatibus.
          </div>
          <Button variant="contained">Download CV</Button>
        </div>
      </div>
    </div>
  );
};
export default Services;
