import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Contacts } from "../data";
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
      className={`text-white px-5 ${
        mode ? "bg-transparent" : "bg-[#091b2c]"
      } ${transition}`}
    >
      <div className="flex flex-col gap-2">
        <Link
          to="/"
          className={`${mode && "text-white"} ${transition} ${
            !font ? "text-xl " : "text-[1rem]"
          } font-bold`}
        >
          Personal
        </Link>
        <div className="max-w-32">
          Professional Web, desktop and mobile developer with more than 3 years
          of experience. I am the owner of projects like levitra, and involved
          in projects like aquarens and others.
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
