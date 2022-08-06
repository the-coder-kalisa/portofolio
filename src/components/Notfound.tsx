import { FC } from "react";
import { useSelector } from "react-redux";
import { State } from "../store";

const NotFound: FC = () => {
  const { mode } = useSelector<State, State>((state) => state);
  return (
    <div
      className={`${
        mode ? "bg-[#091b2c] text-white" : "bg-white text-black"
      } flex items-center h-[100vh] justify-center`}
    >
      404 This page is not found
    </div>
  );
};
export default NotFound;
