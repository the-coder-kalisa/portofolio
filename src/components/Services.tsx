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
  };
  interface option {
    up: boolean;
    down: boolean;
  }
  const container: (Element | null  )= document.querySelector("div#container");
  const [options, setOptions] = useState<option>({ up: false, down: true });
  useEffect(() => {
    container!?.scrollTop > 0 ? setOptions({...options, ['up']: true}) : setOptions({...options, ['up']: false});
    container!?.scrollTop === 532 ? setOptions({...options, ['down']: false}) : setOptions({...options, ['down']: true})
  });
  const tops = useRef<any>(null);
  const unchange = () => {
    tops.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  return (
    <div
      className={`${
        mode && "text-white"
      } flex items-center gap-5 py-10 justify-center ${transition}`}
    >
      <div className="relative">
        {options.up && (
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
        )}
        <div ref={tops}></div>
        <div
          id="container"
          className="max-h-[30rem] max-w-[35rem] rounded-xl bg-[#e7f7fb] p-3 flex flex-col gap-5 overflow-scroll"
        >
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
        {options.down && (
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
        )}
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
