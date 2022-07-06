import React from "react";
import { useSelector } from "react-redux";
import { State, transition } from "../store";

const Services: React.FC = () => {
  const mode = useSelector<State>((state) => state.mode);
  return (
    <div className={`${mode && "text-white"} ${transition}`}>
      <div></div>
      <div></div>
    </div>
  );
};
export default Services;
