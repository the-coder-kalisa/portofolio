import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { categorie, knowledge } from "../data";
import { transition } from "../data";
import CV from "../images/KALISA INEZA Giovanni CV.png";
import { Close } from "@mui/icons-material";
import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
import { Fade } from "react-reveal";
const Services: React.FC = () => {
  const mode = useRecoilValue(modes);
  const phone = useRecoilValue(phones);
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
  const font = useRecoilValue(fonts);
  return (
    <div
      id="services"
      className={`${mode && "text-white"} flex relative ${
        phone === "phone" || phone === "tablet"
          ? "flex-col px-5"
          : "items-center"
      } gap-32 py-10 justify-center ${transition}`}
    >
     <Fade left>
     <div
        className={` ${
          font && "max-w-[40rem]"
        } max-h-[40rem] overflow-y-scroll rounded-xl ${
          mode ? "bg-[#19305c]" : "bg-[#e7f7fb] "
        } ${transition} p-3 flex  flex-col gap-5`}
      >
        {popup && (
          <div
            style={{ marginTop: `${(hoverd! + 1) * 5}rem` }}
            onMouseEnter={() => setPopup(true)}
            className={`z-10 ${
              phone === "phone" || phone === "tablet" ? "" : "left-[47%]"
            } rounded-md ${transition} absolute  p-3 bg-gradient-to-r to-[#fdcdbe] via-[#febf83] from-[#d6aada]`}
          >
            {(phone === "phone" || phone === "tablet") && (
              <Close
                onClick={() => showDesc(undefined)}
                style={{
                  height: 30,
                  width: 30,
                  color: !mode ? "white" : "black",
                  cursor: "pointer",
                }}
                className="absolute right-5 top-5"
              />
            )}
            <div
              className={`p-3 w-full h-full ${
                mode ? `bg-white text-black` : "bg-[#000000b4] text-white"
              }`}
            >
              {desc?.map(({ type, languages }, index) => (
                <div
                  key={index}
                  className={`flex ${phone === "phone" && "flex-col"} gap-2`}
                >
                  <div
                    className={
                      !(phone === "phone" || phone === "tablet")
                        ? "font-extrabold text-lg"
                        : "font-bold text-base"
                    }
                  >
                    {type}:
                  </div>
                  <div
                    className={`flex ${
                      phone === "phone" && "pl-3"
                    } pt-1 pb-3 flex-col gap-2`}
                  >
                    {languages?.map(
                      ({ name, frameworksAndLibraries }, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            phone === "phone" ? "flex-col gap-1" : "gap-2"
                          }`}
                        >
                          <div
                            className={`max-w-[16rem] ${
                              frameworksAndLibraries
                                ? !(phone === "phone" || phone === "tablet")
                                  ? "font-bold"
                                  : "font-semibold"
                                : phone === "phone" || phone === "tablet"
                                ? "font-medium"
                                : "font-normal"
                            }`}
                          >
                            {name} {frameworksAndLibraries && ":"}
                          </div>
                          <div
                            className={`flex ${
                              phone === "phone"
                                ? "flex-col pl-5"
                                : "items-center"
                            }`}
                          >
                            {frameworksAndLibraries?.map(
                              (frameAndLibra, index) => (
                                <div
                                  className={`${
                                    phone === "phone" || phone === "tablet"
                                      ? "text-sm font-normal"
                                      : "text-sm font-medium"
                                  } flex gap-[2px]`}
                                  key={index}
                                >
                                  <span>{frameAndLibra}</span>
                                  <span className="pr-1">
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
            onMouseEnter={() =>
              !(phone === "phone" || phone === "tablet") &&
              showDesc(categorie, index)
            }
            onMouseLeave={() =>
              !(phone === "phone" || phone === "tablet") && showDesc(undefined)
            }
            onClick={() =>
              (phone === "phone" || phone === "tablet") &&
              showDesc(categorie, index)
            }
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
                <h1
                  className={
                    !(phone === "phone" || phone === "tablet")
                      ? `text-xl font-bold`
                      : "text-lg font-semibold"
                  }
                >
                  {type}
                </h1>
                <div
                  className={`${
                    !(phone === "phone" || phone === "tablet")
                      ? "text-sm"
                      : "text-xs"
                  } max-w-[40rem] overflow-hidden overflow-ellipsis`}
                >
                  {desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     </Fade>
      <Fade right>
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
              These skills are really mine don't hesitate to invite me on your
              project, sothat we can put skills together to build a better
              world!
            </div>

            <Button
              variant="contained"
              style={{ background: "#e9843f", maxWidth: 150 }}
              href={CV}
              target="_blank"
              download
            >
              Download CV
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Services;
