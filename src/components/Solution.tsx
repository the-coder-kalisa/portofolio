import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import business from "../images/business.jpg";
import { State, transition } from "../store";
function Solution() {
  const { mode, phone } = useSelector<State, State>((state) => state);
  const [font, setFont] = useState<boolean>(true);
  useEffect(
    () => () => {
      if (phone === "phone") {
        setFont(false);
      }else{
        setFont(true);
      }
    },
    [phone]
  );
  return (
    <div
      className={`flex ${
        (phone === "phone" || phone === "tablet") && "flex-col px-5"
      } gap-20 items-center py-20 justify-center`}
    >
      <img
        src={business}
        alt="business"
        className={`${phone === "phone" && "w-full"} max-w-[45rem]`}
      />
      <div className="max-w-[50rem] flex flex-col gap-10">
        <div
          className={`${
            font ? "text-6xl" : "text-4xl"
          } flex flex-col gap-2 font-bold`}
        >
          <div className="text-[#e9843f]">Perfect solution</div>
          <div>for you business</div>
        </div>
        <div className={`flex flex-col gap-5`}>
          <div
            className={`${mode ? "text-white" : "text-black"} ${transition}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            assumenda animi dolores saepe necessitatibus veniam ad vero
            doloremque delectus tempore sit voluptatibus laborum iste ipsum,
            ratione blanditiis voluptates qui ab?
          </div>
          <Button variant="contained" className="max-w-[7rem]">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Solution;
