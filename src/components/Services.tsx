import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { knowledge } from "../data";
import { State, transition } from "../store";
import CV from "../images/desktop.png";
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
    the();
  };
  const [up, setUp] = useState<boolean>(false);
  const phone = useSelector<State>((state) => state.phone);
  return (
    <div
      className={`${mode && "text-white"} flex items-center ${
        phone && "flex-col"
      } gap-32 py-10 justify-center ${transition}`}
    >
      <div className="relative">
        {
          <IconButton
            style={{
              position: "absolute",
              top: !phone ? 0 : "40%",
              transform: phone ? "rotate(-90deg)" : "",
              left: phone ? "  " : "45%",
              color: "white",
              background: "black",
            }}
            onClick={unchange}
          >
            <KeyboardArrowUp />
          </IconButton>
        }
        <div
          className={`max-h-[30rem] min-w-[20rem] max-w-[35rem] rounded-xl ${
            mode ? "bg-[#19305c]" : "bg-[#e7f7fb] "
          } ${transition} p-3 flex ${
            !phone && "flex-col"
          } gap-5 overflow-scroll`}
        >
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
                className={`flex items-center p-5 rounded-xl ${
                  mode ? "bg-[#091b2c]" : "bg-white"
                } ${transition} gap-5 cursor-pointer`}
              >
                <img
                  alt={type}
                  src={image}
                  className="max-w-[10rem] max-h-[10rem] rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-bold">{type}</h1>
                  <div className="text-xs max-h-20 overflow-hidden overflow-ellipsis">
                    {desc}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div ref={scroll}></div>
        </div>
        <IconButton
          style={{
            position: "absolute",
            bottom: !phone ? 0 : "-40%",
            transform: phone ? "rotate(-90deg)" : "",
            right: phone ? "0%" : "45%",
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
          <div
            className={`${
              mode ? "text-[white]" : "text-[#19305c]"
            } ${transition}`}
          >
            My awesome
          </div>
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

          <Button
            variant="contained"
            style={{ background: "#e9843f", maxWidth: 150 }}
            href={CV}
            download
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Services;
