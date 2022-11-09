import { ChevronRight, Email, Send } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fonts, modes, phones } from "../atom";
import axios from "../axios";
import Fade from "react-reveal/Fade";
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
  const [loading, setLoading] = useState<boolean>(false);
  const sendMessage = async () => {
    if (await validation()) {
      alert("Please fill all the fields as it must be");
    } else {
      try {
        setLoading(true);
        const response = await axios.post("/", messages);
        console.log(response.data);
        alert("Message sent successfully");
        setMessages({
          email: "",
          message: "",
          name: "",
        });
        setLoading(false);
      } catch (error: any) {
        alert(error.response.data || error.message);
        setLoading(false);
      }
    }
  };
  return (
    <div
      id="aboutus"
      className={`text-white py-5 relative max-w-[100rem] mx-auto flex justify-between px-2 ${
        mode ? "bg-transparent" : "bg-[#091b2c]"
      } ${transition} ${!font ? "flex-col gap-5" : "gap-10"}`}
    >
      {loading && (
        <div className="fixed top-0 right-0 w-full h-screen left-0 bg-[#000000d0] text-white flex items-center justify-center z-50">
          <div className="flex flex-col-reverse gap-5 items-center">
            <div className="font-bold w-[18rem] text-center text-xl">
              Sending your message to the best developer
            </div>
            <CircularProgress />
          </div>
        </div>
      )}
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
                    <a key={index} href={`#${name.toLowerCase()}`}>
                      {name}
                    </a>
                  ) : (
                    <a key={index} target="_blank" href={link}>
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
                    <a key={index} target="_blank" href={link}>
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
            disabled={loading}
            onClick={() => sendMessage()}
            sx={{ width: 100 }}
            style={{
              background: "#e9843f",
              display: "flex",
              gap: 5,
              color: "white",
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
