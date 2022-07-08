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
      <div className="max-h-[30rem] max-w-[40rem] rounded-xl bg-[#e7f7fb] p-10 flex flex-col gap-10 overflow-scroll">
        {knowledge.map(({ type, categorie, desc, image }, index) => (
          <div
           
            className={`flex items-center gap-5`}
          >
            <img
              alt={type}
              className="rounded-full max-w-[15rem] max-h-[15rem]"
              src={image}
            />
            <div>
              <h1 className="text-lg font-bold">{type}</h1>
              <div>{desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[40rem]">
        <div className="text-7xl font-bold">
          <div className="text-[#061d48]">My awesome</div>
          <div>services</div>
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
