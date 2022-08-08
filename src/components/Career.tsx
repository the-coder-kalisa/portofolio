import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { career } from "../data";
import { State, transition } from "../store";
import Code from "../images/Code.jpg";
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
    <div
      className={`flex justify-between items-center px-20 py-10 gap-4 ${
        (phone === "phone" || phone === "tablet") && "flex-col"
      }`}
    >
      <div
        className={`flex gap-2  ${
          (phone === "phone" || phone === "tablet") && "flex-col"
        }`}
      >
        <img src={Code} className="min-h-[10rem]" />
        <div>
          {career.map(({ name, link }, index) => (
            <div key={index}>
              <a
                href={link ? link : "javascriptvoid(0)"}
                className="text-[#3131da]"
              >
                {name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[50rem] flex flex-col gap-10">
        <div
          className={`${
            font ? "text-6xl" : "text-4xl"
          } flex flex-col gap-2 font-bold`}
        >
          <div className="text-[#e9843f]">
            Here there <area shape="" coords="" href="" alt="" />
          </div>
          <div>projects</div>
        </div>
        <div className={`flex flex-col gap-5`}>
          <div
            className={`${mode ? "text-white" : "text-black"} ${transition}`}
          >
            All theses projects, I'm CEO or founder of it or I am in developer
            team. All them were coded by me mostly and you'll see others in some
            days. what you have to do is to contact me on provided accounts.
            Thank you for your support!!
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
