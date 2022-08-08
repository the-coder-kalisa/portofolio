import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { categorie, knowledge } from "../data";
import { State, transition } from "../store";
import CV from "../images/desktop.png";
import { Close } from "@mui/icons-material";
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
    if (desc) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, [desc]);
  const [font, setFont] = useState<boolean>(true);
  useEffect(() => {
    if (phone === "phone" || phone === "tablet") {
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
        className={` ${
          font && "max-w-[40rem]"
        } max-h-[50rem] overflow-y-scroll rounded-xl ${
          mode ? "bg-[#19305c]" : "bg-[#e7f7fb] "
        } ${transition} p-3 flex  flex-col gap-5`}
      >
        {popup && (
          <div
            style={{ marginTop: `${(hoverd! + 1) * 5}rem` }}
            onMouseEnter={() => setPopup(true)}
            className={` z-50 min-w-[20rem] ${
              (phone === "phone" || phone === "tablet") ? "" : "left-[47%]"
            } rounded-md ${transition} absolute p-3  bg-gradient-to-r to-[#fdcdbe] via-[#febf83] from-[#d6aada]`}
          >
            {(phone === "phone" || phone === "tablet") && <Close style={{height: 30, width: 30, color: mode ? "white" : "black"}} className="absolute top-2 right-5"/>}
            <div
              className={`p-3 w-full h-full ${
                mode ? `bg-white text-black` : "bg-black text-white"
              }`}
            >
              {desc?.map(({ type, languages }, index) => (
                <div key={index} className="flex gap-2">
                  <div className="font-extrabold text-lg">{type}:</div>
                  <div className={`flex flex-col gap-2`}>
                    {languages?.map(
                      ({ name, frameworksAndLibraries }, index) => (
                        <div key={index} className="flex gap-2">
                          <div
                            className={`max-w-[16rem] ${
                              frameworksAndLibraries
                                ? "font-bold"
                                : "font-medium"
                            }`}
                          >
                            {name} {frameworksAndLibraries && ":"}
                          </div>
                          <div className="flex items-center">
                            {frameworksAndLibraries?.map(
                              (frameAndLibra, index) => (
                                <div
                                  className="font-medium flex gap-2 text-sm"
                                  key={index}
                                >
                                  <span>{frameAndLibra}</span>
                                  <span className="pr-2">
                                    {index !==
                                      frameworksAndLibraries.length - 1 &&
                                    index !== frameworksAndLibraries.length - 2
                                      ? ","
                                      : index ===
                                          frameworksAndLibraries.length - 2 &&
                                        "and"}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {knowledge.map(({ type, categorie, desc, image }, index) => (
          <div
            onMouseEnter={() =>  showDesc((phone === "phone" || phone === "tablet") ? undefined: categorie, index)}
            onMouseLeave={() => showDesc(undefined)}
            onClick={() => showDesc((phone === "phone" || phone === "tablet") ? categorie : undefined, index)}
            className={`hover:bg-gradient-to-r from-[#f5c5be] relative via-[#febf83] to-[#d6aada] p-3 rounded-xl`}
            key={index}
          >
            <div
              className={`flex ${
                !font ? "flex-col items-start" : "items-center"
              } p-5 rounded-xl ${
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
            This skills are really mine don't hesitate to invite me on your
            project, sothat we can put skills together to build a better world!
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
