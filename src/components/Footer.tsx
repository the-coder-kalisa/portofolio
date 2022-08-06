import { ChevronRight, Email, Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FooterData } from "../data";
import { State, transition } from "../store";
function Footer() {
  const { phone, mode } = useSelector<State, State>((state) => state);
  const [font, setFont] = useState<boolean>(true);
  useEffect(() => {
    if (phone === "tablet" || phone === "phone") {
      setFont(false);
    } else {
      setFont(true);
    }
  }, [phone]);
  const [drops, setDrops] = useState<number[]>([]);
  const drop = (index: number) => {
    let dro = drops.filter((drop) => drop !== index);
    drops.includes(index) ? setDrops(dro) : setDrops([...drops, index]);
  };
  return (
    <div
      id="aboutus"
      className={`text-white py-5 flex justify-between px-12 ${
        mode ? "bg-transparent" : "bg-[#091b2c]"
      } ${transition} ${!font ? "flex-col gap-5" : "gap-10"}`}
    >
      <div className="flex flex-col gap-3">
        <Link
          to="/"
          className={`${mode && "text-white"} ${transition} ${
            font ? "text-xl " : "text-[1.3rem]"
          } font-bold`}
        >
          Personal
        </Link>
        <div className="max-w-[21rem]">
          Professional Web, desktop and mobile developer. We help in each of the
          above services.
        </div>
      </div>
      {font
        ? FooterData.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-bold text-xl">{title}</h3>
              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <Link to={link} key={index}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))
        : FooterData.map(({ title, links }, index) => (
            <div
              key={index}
              style={{
                height: drops.includes(index)
                  ? (links.length + 1) * 31
                  : "2rem",
              }}
              className={` duration-500 flex flex-col gap-5 overflow-hidden min-w-full`}
            >
              <div
                onClick={(): void => drop(index)}
                className="font-bold cursor-pointer text-xl flex  w-full justify-between"
              >
                <h1>{title}</h1>
                <ChevronRight
                  style={
                    !drops.includes(index)
                      ? {
                          transitionProperty: "all",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "100ms",
                        }
                      : {
                          transform: "rotate(90deg)",
                          transitionProperty: "all",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "100ms",
                        }
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <Link to={link} className="text-[1rem]" key={index}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">Text me on email</h3>
        <div className="flex flex-col items-end gap-4">
          <div
            className={`${
              !mode ? "bg-[#091b2c]" : "bg-white"
            } ${transition} flex justify-end w-full gap-5 p-2`}
          >
            <Email
              sx={{ height: 25, width: 25 }}
              style={{
                color: mode ? "black" : "white",
                transitionProperty: "all",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "100ms",
              }}
            />
            <input
              type="text"
              placeholder="Enter your Email"
              className={`bg-[transparent] w-full border-none outline-none ${
                mode ? "text-black" : "text-white"
              }`}
            />
          </div>
          <textarea
            placeholder="Enter your information"
            className={`resize-none w-full min-h-[53px] ${
              mode ? "text-black" : "text-white"
            }`}
          ></textarea>
          <Button
            sx={{ width: 100 }}
            style={{
              background: "#e9843f",
              display: "flex",
              gap: 5,
              color: "#0e11bb",
            }}
          >
            <span>send</span>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
