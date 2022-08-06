import { useSelector } from "react-redux";
import { Contacts } from "../data";
import { State, transition } from "../store";
function Footer() {
  const {phone, mode} = useSelector<State, State>(state => state)
  return (
    <div id="aboutus" className={`text-white ${mode ? "bg-transparent" : "bg-[#091b2c]"} ${transition}`}>
     
    </div>
  );
}

export default Footer;
