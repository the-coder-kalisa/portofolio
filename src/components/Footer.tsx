import { ChevronRight, Email, Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
import axios from "../axios";
import { FooterData, transition, Message } from "../data";
function Footer() {
  const phone = useRecoilValue(phones);
  const mode = useRecoilValue(modes);
  const font = useRecoilValue(fonts);
  const [drops, setDrops] = useState<number[]>([]);
  const drop = (index: number) => {
    let dro = drops.filter((drop) => drop !== index);
    drops.includes(index) ? setDrops(dro) : setDrops([...drops, index]);
  };
  const [messages, setMessages] = useState<Message>({
    email: "",
    message: "",
    name: "",
  });
  const validation = async () => {
    if (
      messages.email === "" ||
      messages.message === "" ||
      messages.name === ""
    ) {
      return true;
    } else if (
      !/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(messages.email)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const sendMessage = async () => {
    if (await validation()) {
      alert("Please fill all the fields as it must be");
    } else {
      try{

        const response = await axios.post("/", messages);
        console.log(response.data);
        alert("Message sent successfully");
        setMessages({
          email: "",
          message: "",
          name: "",
        });
      }catch(error : any){
        alert(error.response.data)
      }
    }
  };
  return (
    <div
      id="aboutus"
      className={`text-white py-5 flex justify-between ${
        phone !== "phone" ? "px-12" : "px-1"
      } ${mode ? "bg-transparent" : "bg-[#091b2c]"} ${transition} ${
        !font ? "flex-col gap-5" : "gap-10"
      }`}
    >
      <div className="flex flex-col  gap-3">
        <Link
          to="/"
          className={`${mode && "text-white"} ${transition} ${
            !font ? "text-xl " : "text-[1.3rem]"
          } font-bold`}
        >
          Personal
        </Link>
        <div className="max-w-[21rem]">
          Professional Web, desktop and mobile developer. We help in each of the
          above services.
        </div>
      </div>
      {font
        ? FooterData.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-bold text-xl">{title}</h3>
              <div className="flex flex-col gap-2">
                {links.map(({ type, name, link }, index) =>
                  type ? (
                    <Link key={index} to={`#${name.toLowerCase()}`}>
                      {name}
                    </Link>
                  ) : (
                    <a key={index} href={link}>
                      {name}
                    </a>
                  )
                )}
              </div>
            </div>
          ))
        : FooterData.map(({ title, links }, index) => (
            <div
              key={index}
              style={{
                height: drops.includes(index)
                  ? (links.length + 1) * 31.5
                  : "2rem",
                overflow: "hidden",
              }}
              className={` duration-500 flex flex-col w-full`}
            >
              <div
                onClick={(): void => drop(index)}
                className="font-bold cursor-pointer bg-transparent text-xl flex  w-full justify-between"
              >
                <h1>{title}</h1>
                <ChevronRight
                  style={
                    !drops.includes(index)
                      ? {
                          transitionProperty: "all",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "100ms",
                        }
                      : {
                          transform: "rotate(90deg)",
                          transitionProperty: "all",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "100ms",
                        }
                  }
                />
              </div>
              <div className="flex flex-col h-full text-base pt-[2rem] gap-2">
                {links.map(({ type, link, name }, index) =>
                  type ? (
                    <Link key={index} to={`#${name.toLowerCase()}`}>
                      {name}
                    </Link>
                  ) : (
                    <a key={index} href={link}>
                      {name}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">Text me on email</h3>
        <div className="flex flex-col items-end gap-4">
          <input
            type="text"
            placeholder="Enter your name..."
            value={messages.name}
            className="w-full h-10 px-2 text-black bg-white border-none outline-none"
            onChange={(e): void => {
              setMessages({ ...messages, name: e.target.value });
            }}
          />
          <div
            className={`${
              !mode ? "bg-[#091b2c]" : "bg-white"
            } ${transition} flex justify-end w-full gap-5 p-2`}
          >
            <Email
              sx={{ height: 25, width: 25 }}
              style={{
                color: mode ? "black" : "white",
                transitionProperty: "all",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "100ms",
              }}
            />
            <input
              type="text"
              value={messages.email}
              onChange={(e): void => {
                setMessages({ ...messages, email: e.target.value });
              }}
              placeholder="Enter your Email"
              className={`w-full border-none outline-none bg-white text-black`}
            />
          </div>
          <textarea
            onChange={(e): void => {
              setMessages({ ...messages, message: e.target.value });
            }}
            value={messages.message}
            placeholder="Enter your information"
            className={`resize-none w-full min-h-[53px] border-none outline-none bg-white text-black`}
          ></textarea>
          <Button
            onClick={() => sendMessage()}
            sx={{ width: 100 }}
            style={{
              background: "#e9843f",
              display: "flex",
              gap: 5,
              color: "#0e11bb",
            }}
          >
            <span>send</span>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
