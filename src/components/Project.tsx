import React from "react";

function Project() {
  interface project {
    link: string;
    desc: string;
  }
  const projects: project[] = [
    {
      link: "https://levitra.vercel.app",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus pariatur sequi fugit mollitia labore est aspernatur quis minima, atque veritatis saepe ratione a soluta exercitationem dignissimos. Ipsum, dolor tenetur.",
    },
    {
      link: "https://siloam.vercel.app",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus pariatur sequi fugit mollitia labore est aspernatur quis minima, atque veritatis saepe ratione a soluta exercitationem dignissimos. Ipsum, dolor tenetur.",
    },
    {
      link: "https://instagram-eta-eight.vercel.app",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus pariatur sequi fugit mollitia labore est aspernatur quis minima, atque veritatis saepe ratione a soluta exercitationem dignissimos. Ipsum, dolor tenetur.",
    },
  ];
  return (
    <div className="flex flex-col gap-16 pb-20">
      <h1 className="text-center w-full text-[#061e48] font-bold text-6xl">
        Recent Project
      </h1>
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fill,minmax(500px, 1fr))",
        }}
        className="gap-20 grid max-auto"
      >
        {projects.map(({ link, desc }, index) => (
          <div>
            <iframe key={index} src={link} width={550} height={550} />
            <div>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
