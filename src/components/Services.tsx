import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { knowledge } from "../data";
import { State, transition } from "../store";
const Services: React.FC = () => {
  const mode = useSelector<State>((state) => state.mode);
  const [select, setSelected] = useState<number | undefined>(undefined);
  const [popup, setPopup] = useState<boolean>(false);
  const showDesc: any = (categorie: Array<object | string>, index: number) => {
    setPopup(true);
    setSelected(index);
  };
  const scroll: React.MutableRefObject<any> = useRef<any>(null);
  const change: any = () => {
    scroll.current.scrollIntoView({ block: "end", behavior: "smooth" });
    windows();
  };
  const container: React.MutableRefObject<any> = useRef<any>();
  const the = () => {
    console.log(container);
  };
  const tops = useRef<any>();
  const windows = () => window.scrollBy(0, scrollY);
  const unchange = () => {
    windows();
    tops.current.scrollIntoView({ block: "end", behavior: "smooth" });
    the()
  };
  const [up, setUp] = useState<boolean>(false);
  return (
    <div
      className={`${
        mode && "text-white"
      } flex items-center gap-32 py-10 justify-center ${transition}`}
    >
      <div className="relative">
        {
          <IconButton
            style={{
              position: "absolute",
              top: 0,
              left: "45%",
              color: "white",
              background: "black",
            }}
            onClick={unchange}
          >
            <KeyboardArrowUp />
          </IconButton>
        }
        <div className="max-h-[30rem] max-w-[35rem] rounded-xl bg-[#e7f7fb] p-3 flex flex-col gap-5 overflow-scroll">
          <div ref={tops}></div>
          {knowledge.map(({ type, categorie, desc, image }, index) => (
            <div
              onClick={() => showDesc(categorie, index)}
              className={`${
                select !== index ? "hover:" : ""
              }bg-gradient-to-r from-[#f5c5be] via-[#febf83] to-[#d6aada] p-3 rounded-xl`}
              key={index}
            >
              <div
                className={`flex items-center p-5 rounded-xl bg-white gap-5 cursor-pointer`}
              >
                <div className="max-w-[10rem] max-h-[20rem]">
                  <img
                    alt={type}
                    src={image}
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-bold">{type}</h1>
                  <div className="text-xs">{desc}</div>
                </div>
              </div>
            </div>
          ))}

          <div ref={scroll}></div>
        </div>
        <IconButton
          style={{
            position: "absolute",
            bottom: 0,
            left: "45%",
            color: "white",
            background: "black",
          }}
          onClick={change}
        >
          <KeyboardArrowDown />
        </IconButton>
      </div>
      <div className="max-w-[40rem]">
        <div className="text-7xl font-bold">
          <div className="text-[#061d48]">My awesome</div>
          <div className="text-[#e9843f]">services</div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            reprehenderit dolorem voluptatem doloremque excepturi accusamus,
            reiciendis non tempore assumenda mollitia perferendis dolore
            voluptatibus architecto totam corporis autem alias. Consectetur,
            voluptatibus.
          </div>
          <Button variant="contained" style={{background: "#e9843f", maxWidth: 150}}>Download CV</Button>
        </div>
      </div>
    </div>
  );
};
export default Services;
