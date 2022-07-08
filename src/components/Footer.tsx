import { Contacts } from "../data";

function Footer() {
  return (
    <div className="flex items-center gap-5 flex-col justify-center ">
      <h1 className="font-bold text-5xl">Contact info</h1>
      <div
      className="grid grid-cols-2 gap-4"
      >
        {Contacts.map(({ bug, desc, link }, index) => (
          <a className="flex items-center gap-5" href={link} key={index}>
            <div className="max-w-[1rem]">{bug}</div>
            <div className="text-xl ">{desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
