import React from "react";
import { Link } from "react-router-dom";
import satu from "../Assets/card/3.jpg";
import dua from "../Assets/card/2.jpg";
import tiga from "../Assets/card/1.jpg";

const Hero2 = () => {
  return (
    <div className="text-center py-6 w-full">
      <h1 className="font-bold mb-2 md:text-2xl">Kenapa tokoKu</h1>
      <p className="text-[12px] md:ml-40 md:mr-40 sm:mx-64 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        assumenda eveniet dolore, ratione ipsum doloribus possimus consequatur
        maiores repellat odit.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Link
          className="w-56 h-64 bg-slate-200 shadow-lg rounded-lg mt-6 mb-3 sm:mr-4 md:mr-7 hover:scale-105 duration-300"
          to={"/"}
        >
          <img className="rounded-t-lg h-40" src={satu} alt="satu" />
          <p className="font-bold my-3 w-20">Sefety</p>
          <p className="text-[12px] mb-3 w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            aut atque. Quas.
          </p>
        </Link>
        <Link
          className="w-56 h-64 bg-slate-200 shadow-lg rounded-lg mt-6 mb-3 sm:mr-4 md:mr-7 hover:scale-105 duration-300"
          to={"/"}
        >
          <img className="rounded-t-lg  h-40" src={dua} alt="dua" />
          <p className="font-bold my-3 w-20">solfing</p>
          <p className="text-[12px] mb-3 w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            aut atque. Quas.
          </p>
        </Link>
        <Link
          className="w-56 h-64 bg-slate-200 shadow-lg rounded-lg mt-6 mb-3 sm:mr-4 md:mr-7 hover:scale-105 duration-300"
          to={"/"}
        >
          <img className="rounded-t-lg  h-40" src={tiga} alt="tiga" />
          <p className="font-bold my-3 w-20">Edukasi</p>
          <p className="text-[12px] mb-3 w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            aut atque. Quas.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero2;
