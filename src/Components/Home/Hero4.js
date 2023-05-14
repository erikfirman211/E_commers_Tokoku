import React from "react";
import satu from "../Assets/Mitra/1.png";
import dua from "../Assets/Mitra/2.jpg";
import tiga from "../Assets/Mitra/3.png";
import empat from "../Assets/Mitra/4.png";
import lima from "../Assets/Mitra/5.png";
import enam from "../Assets/Mitra/6.png";
import tujuh from "../Assets/Mitra/7.png";
import delapan from "../Assets/Mitra/8.png";
import sembilan from "../Assets/Mitra/9.png";
import sepuluh from "../Assets/Mitra/10.jpg";
const Hero4 = () => {
  return (
    <div className="bg-transparent shadow-lg pb-5 w-full">
      <h1 className="text-center md:text-2xl mt-10 mb-6 text-xl font-bold">
        Mitra Kerjasama
      </h1>
      <div className="flex flex-wrap md:mx-40">
        <div className="mx-auto px-3 md:px-0">
          <img className="w-[100px]" src={satu} alt="satu" />
          <img className="w-[100px]" src={dua} alt="dua" />
        </div>
        <div className="mx-auto px-3 md:px-0 ">
          <img className="w-[100px]" src={tiga} alt="tiga" />
          <img className="w-[100px]" src={empat} alt="empat" />
        </div>
        <div className="mx-auto px-3 md:px-0">
          <img className="w-[100px]" src={lima} alt="lima" />
          <img className="w-[100px]" src={enam} alt="enam" />
        </div>
        <div className="mx-auto px-3 md:px-0 ">
          <img className="w-[100px]" src={tujuh} alt="tujuh" />
          <img className="w-[100px]" src={delapan} alt="delapan" />
        </div>
        <div className="mx-auto px-3 md:px-0">
          <img className="w-[100px]" src={sembilan} alt="sembilan" />
          <img className="w-[100px]" src={sepuluh} alt="sepuluh" />
        </div>
      </div>
    </div>
  );
};

export default Hero4;
