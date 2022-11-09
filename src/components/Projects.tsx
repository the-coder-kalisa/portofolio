import { FC } from "react";
import { career } from "../data";
import { transition } from "../data";
import Code from "../images/Code.jpg";
import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
import Fade from "react-reveal/Fade";
const Career: FC = () => {
  const mode = useRecoilValue(modes);
  const phone = useRecoilValue(phones);
  const font = useRecoilValue(fonts);
  return (
    <div
      className={`flex justify-between items-center mx-auto max-w-[100rem] py-10 gap-20 ${
        (phone === "phone" || phone === "tablet") && "flex-col justify-start"
      }`}
    >
      <Fade left>
        <img src={Code} className="min-w-[40rem]" />
      </Fade>
      <Fade right>
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
              className={`flex flex-col p-2 max-w-[20rem] gap-2 ${
                mode ? "bg-white text-black" : "bg-[#000000bd] text-white"
              }`}
            >
              {career.map(({ name, link }, index) => (
                <a
                  href={link ? link : "javascript:void(0)"}
                  className="hover:text-blue-600"
                  key={index}
                  target="_blank"
                >
                  {name}
                </a>
              ))}
            </div>
            <div
              className={`${mode ? "text-white" : "text-black"} ${transition}`}
            >
              All theses projects, I'm CEO or founder of it or I am in developer
              team. All them were coded by me mostly and you'll see others in
              some days. what you have to do is to contact me on provided
              accounts. Thank you for your support!!
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Career;
