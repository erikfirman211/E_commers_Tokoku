import React from "react";
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <div className="bg-slate-200 shadow-xl shadow-gray-300 w-full">
      <p className="text-center font-bold py-5 md:pt-10 md:text-2xl">
        Pencapaian Kami
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="font-bold text-xl mx-3 md:mx-12 mb-5">
          <p className="text-yellow-600 text-center">32</p>
          <p className="text-gray-700 text-center text-[16px]">Mitra</p>
        </div>
        <div className="font-bold text-xl mx-3 md:mx-12 mb-5">
          <p className="text-yellow-600 text-center">2430</p>
          <p className="text-gray-700 text-center text-[16px] ">
            Penggunak aktive
          </p>
        </div>
        <div className="font-bold text-xl mx-3 md:mx-12 mb-5">
          <p className="text-yellow-600 text-center">123.210 Biji</p>
          <p className="text-gray-700 text-center text-[16px]">buku Terjual</p>
        </div>
        <div className="font-bold text-xl mx-3 md:mx-12 mb-5">
          <p className="text-yellow-600 text-center">323.3221</p>
          <p className="text-gray-700 text-center text-[16px] ">Pengunjung</p>
        </div>
      </div>
      <div className="flex pb-10 pt-3">
        <Link
          to={"tentangkami"}
          className="mx-auto px-8 py-1 font-bold text-white rounded-md shadow-lg bg-green-700 hover:bg-green-600"
        >
          Tetang Kami
        </Link>
      </div>
    </div>
  );
};

export default Hero3;
