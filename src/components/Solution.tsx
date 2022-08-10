import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
import business from "../images/business.jpg";
import { transition } from "../data";
import { Fade } from "react-reveal";
function Solution() {
  const mode = useRecoilValue(modes);
  const phone = useRecoilValue(phones);
  const font = useRecoilValue(fonts);
  return (
    <div
      id="solution"
      className={`flex ${
        phone === "phone" || phone === "tablet" ? "flex-col px-5" : "px-32"
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
            <div>for your business</div>
          </div>
          <div className={`flex flex-col gap-5`}>
            <div
              className={`${mode ? "text-white" : "text-black"} ${transition}`}
            >
              Don't hesistate to invite me to your business because I'm perfect
              solution to your good business. Many business that I've helped are
              still congulating me for my work. What are you waiting for?
            </div>
          </div>
        </div>
    </div>
  );
}

export default Solution;
