import React from "react";
import { Link } from "react-router-dom";

const NabBars = () => {
  return (
    <div className="fixed top-0 bg-white w-full shadow-lg z-20">
      <div className="  lg:flex flex flex-wrap justify-between py-1 items-center lg:pr-[230px] lg:pl-[230px] md:pr-[90px] md:pl-[90px]">
        <div className="flex items-center justify-center lg:gap-3 ">
          <p className="flex pl-3 justify-center items-center gap-2 font-bold text-[14px]">
            <span className="flex lg:px-4 lg:py-2 py-1 px-2 bg-yellow-600 rounded-md shadow-md items-center justify-center">
              E
            </span>
            <span className="text-[20px]">Tokoku</span>
          </p>
          <Link
            className="text-[18px] pl-2 text-slate-900 font-semibold flex items-center justify-center"
            to={"/edukasi"}
          >
            Edukasi
          </Link>
        </div>

        <div className="lg:w-4/5 px-3 flex md:w-[200px] w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 w-full rounded-l-md px-3"
          />
          <button className="bg-yellow-500 w-10 items-center justify-center rounded-r-md">
            <ion-icon
              name="search-outline"
              className="flex items-center justify-center"
            ></ion-icon>
          </button>
          <span className="text-2xl mx-2 text-yellow-500">
            <ion-icon name="cart-outline"></ion-icon>
          </span>
          <div className="lg:flex hidden">
            <button className="lg:px-7 lg:py-1 px-2 text-[10px] border border-yellow-500 bg-white font-bold text-yellow-500 rounded-md mx-2 hover:text-white hover:bg-yellow-500">
              Masuk
            </button>
            <button className="lg:px-7 lg:py-1 px-2 text-[10px] border border-yellow-500 bg-yellow-500 font-bold text-white rounded-md mx-2 hover:text-yellow-500 hover:bg-white">
              Daftar
            </button>
          </div>
        </div>
        <div className="flex lg:hidden mt-1 md:mt-0">
          <button className="lg:px-7 md:px-6 md:py-1 lg:py-1 py-1 px-2 text-[10px] border border-yellow-500 bg-white font-bold text-yellow-500 rounded-md mx-2 hover:text-white hover:bg-yellow-500">
            Masuk
          </button>
          <button className="lg:px-7 md:px-6 md:py-1 lg:py-1 py-1 px-2 text-[10px] border border-yellow-500 bg-yellow-500 font-bold text-white rounded-md mx-2 hover:text-yellow-500 hover:bg-white">
            Daftar
          </button>
        </div>
      </div>
      <hr />

      <div
        className={`flex text-[15px] text-slate-600 gap-4 pt-1 pb-2 pr[100px] pl-[100px] lg:pr-[230px] lg:pl-[230px] font-semibold`}
      >
        <Link className="pl-2" to={"/semua"}>
          Semua
        </Link>
        <Link to={"/terbaru"}>Terbaru</Link>
        <Link to={"/test"}>Penjualan</Link>
        <span className="flex items-center justify-center">
          <ion-icon name="reorder-four-outline"></ion-icon>
          <span className="mx-3">Katergori</span>
        </span>
        <p className="font-bold">|</p>
        <p className="hideen ">Semua</p>
      </div>
    </div>
  );
};

export default NabBars;
