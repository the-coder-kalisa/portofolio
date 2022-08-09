import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { career } from "../data";
import { State, transition } from "../store";
import Code from "../images/Code.jpg";
import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
const Career: FC = () => {
const mode = useRecoilValue(modes);
const phone = useRecoilValue(phones);
const font = useRecoilValue(fonts);
  return (
    <div
      className={`flex justify-between items-center  py-10 gap-4 ${
        (phone === "phone" || phone === "tablet") &&
        "flex-col justify-start"
      }`}
    >
      <img src={Code} className="min-w-[40rem]" />
      <div className=" flex flex-col gap-10">
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
        <div className={``}>
          <div
            className={`flex flex-col p-2 gap-2 ${
              mode ? "bg-white text-black" : "bg-[#000000bd] text-white"
            }`}
          >
            {career.map(({ name, link }, index) => (
              <a
                href={link ? link : "javascript:void(0)"}
                className="hover:text-blue-600"
                key={index}
              >
                {name}
              </a>
            ))}
          </div>
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
