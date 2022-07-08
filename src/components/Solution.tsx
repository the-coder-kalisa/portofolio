import { Button } from "@mui/material";
import business from "../images/business.jpg"
function Solution() {
  return (
    <div className="flex gap-20 items-center py-20 justify-center">
    <img src={business} alt="business" className="max-w-[45rem]"/>
      <div className="max-w-[50rem] flex flex-col gap-10">
        <div className="text-6xl flex flex-col gap-2 font-bold">
          <div className="text-[#e9843f]">Perfect solution</div>
          <div>for you business</div>
        </div>
        <div className="flex flex-col gap-5">

        <div className="text-lg text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          assumenda animi dolores saepe necessitatibus veniam ad vero doloremque
          delectus tempore sit voluptatibus laborum iste ipsum, ratione
          blanditiis voluptates qui ab?
        </div>
        <Button variant="contained" className="max-w-[7rem]">Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Solution;
