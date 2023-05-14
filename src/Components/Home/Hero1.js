import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="herohome w-full h-[500px] ">
      <p className=" text-center  pt-32 md:text-4xl text-xl text-white font-bold">
        Bersama Kami <br /> budayakan Membaca
      </p>
      <div>
        <p className="text-center text-white text-sm mt-10 md:mt-20 sm:mt-32 mx-16 md:ml-16 md:mr-16  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet
          fugit nisi autem animi eum unde velit ipsa, facere consectetur Lorem
          ipsum dolor sit.
        </p>
        <div className="flex mt-9 md:mt-4">
          <Link
            to={"/semua"}
            className="mx-auto bg-yellow-500 px-4 md:px-8 py-2 rounded-lg shadow-slate-500 font-bold text-sm md:text-[18px]"
          >
            Belanja Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
