import React from "react";
import satu from "../Assets/Team/1.jpg";
import dua from "../Assets/Team/2.jpg";
import tiga from "../Assets/Team/3.jpeg";
import empat from "../Assets/Team/4.jfif";
import lima from "../Assets/Team/5.jpg";

const Section5 = () => {
  const teams = [
    {
      src: satu,
      title: "mark",
      lorem:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nisi!",
    },
    {
      src: dua,
      title: "Bilgets",
      lorem:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nisi!",
    },
    {
      src: tiga,
      title: "elon musk",
      lorem:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nisi!",
    },
    {
      src: empat,
      title: "jokowi",
      lorem:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nisi!",
    },
    {
      src: lima,
      title: "makruf amin",
      lorem:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nisi!",
    },
  ];
  return (
    <div className="w-full bg-slate-300 lg:pb-10">
      <p className="text-center lg:text-4xl lg:font-bold text-yellow-400 lg:py-7 py-6 text-xl font-bold">
        Team
      </p>
      <div className="flex flex-wrap items-center justify-center">
        {teams.map((team) => (
          <div className="w-[100px] sm:w-[150px] md:w-[180px] lg:w-200px mx-1 md:mx-2 md:my-5 my-2">
            <div className="flex items-center justify-center">
              <img
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:h-[150px] md:w-[150px] rounded-full "
                src={team.src}
                alt=""
              />
            </div>
            <p className="text-center lg:text-2xl lg:font-semibold text-yellow-700">
              {team.title}
            </p>
            <p className="text-center lg:w-[200px] lg:text-[10px] text-[7px]">
              {team.lorem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
