import { Email } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FooterData } from "../data";
import { State, transition } from "../store";
function Footer() {
  const { phone, mode } = useSelector<State, State>((state) => state);
  const [font, setFont] = useState<boolean>(true);
  useEffect(
    () => () => {
      if (phone === "phone" || phone === "tablet") {
        setFont(false);
      } else {
        setFont(true);
      }
    },
    [phone]
  );
  return (
    <div
      id="aboutus"
      className={`text-white flex  gap-10 px-5 ${
        mode ? "bg-transparent" : "bg-[#091b2c]"
      } ${transition}`}
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
      {FooterData.map(({ title, links }, index) => (
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
      ))}
      <div>
        <h3 className="font-bold transition-all text-xl">Text me on email</h3>
        <div
          className={`${
            !mode ? "bg-[#091b2c]" : "bg-white"
          } ${transition} flex`}
        >
          <Email
            style={{
              color: mode ? "black" : "white",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
            }}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className="bg-[transparent]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
