import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { categorie, knowledge } from "../data";
import { State, transition } from "../store";
import CV from "../images/desktop.png";
const Services: React.FC = () => {
  const { mode, phone } = useSelector<State, State>((state) => state);
  const [desc, setDesc] = useState<Array<categorie>>();
  const [popup, setPopup] = useState<boolean>(false);
  const [hoverd, setHoverd] = useState<number>();
  const showDesc: any = (categorie: Array<categorie>, index: number) => {
    setDesc(categorie);
    setHoverd(index);
  };
  useEffect(() => {
    if(desc) {
      setPopup(true)
    }else{
      setPopup(false)
    }
  }, [desc])
  const [font, setFont] = useState<boolean>(true);
  useEffect(() => {
    if (phone === "phone") {
      setFont(false);
    } else {
      setFont(true);
    }
  }, [phone]);
  return (
    <div
    id="services"
      className={`${mode && "text-white"} flex relative ${
        phone === "phone" || phone === "tablet"
          ? "flex-col-reverse px-5"
          : "items-center"
      } gap-32 py-10 justify-center ${transition}`}
    >
      <div
        className={`max-h-[30rem] ${font && "max-w-[40rem]"} rounded-xl ${
          mode ? "bg-[#19305c]" : "bg-[#e7f7fb] "
        } ${transition} p-3 flex  flex-col gap-5 overflow-scroll`}
      >
        {knowledge.map(({ type, categorie, desc, image }, index) => (
          <div
            onMouseEnter={() => showDesc(categorie, index)}
            onMouseLeave={() => showDesc(undefined)}
            className={`hover:bg-gradient-to-r from-[#f5c5be] relative via-[#febf83] to-[#d6aada] p-3 rounded-xl`}
            key={index}
          >
            {popup && hoverd === index &&  <div className="absolute bg-white right-0 text-black">hello</div>}
            <div
              className={`flex ${!font ? "flex-col items-start" : "items-center"} p-5 rounded-xl ${
                mode ? "bg-[#091b2c]" : "bg-white"
              } ${transition} gap-5 cursor-pointer`}
            >
              <img
                alt={type}
                src={image}
                className={`w-[10rem] h-[10rem] rounded-full`}
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold">{type}</h1>
                <div className=" text-xs max-h-20 overflow-hidden overflow-ellipsis">
                  {desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[40rem] flex flex-col gap-3">
        <div className={`${!font ? "text-4xl" : "text-7xl"} font-bold`}>
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
