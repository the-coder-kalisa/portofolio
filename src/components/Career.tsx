import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State, transition } from "../store";

const Career: FC = () => {
  const { mode, phone } = useSelector<State, State>((state) => state);
  const [font, setFont] = useState<Boolean>(true);
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
    <div className="flex gap-4">
      <div></div>
      <div className="max-w-[50rem] flex flex-col gap-10">
        <div
          className={`${
            font ? "text-6xl" : "text-4xl"
          } flex flex-col gap-2 font-bold`}
        >
          <div className="text-[#e9843f]">Here is my</div>
          <div>projects</div>
        </div>
        <div className={`flex flex-col gap-5`}>
          <div
            className={`${mode ? "text-white" : "text-black"} ${transition}`}
          >
            All theses projects, I'm CEO or founder of it or I am in developer
            team. All them were coded by me mostly.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
